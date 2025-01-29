import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { patch } from '../services';
import { apiPaths } from '../constants';
import { Country, State, City } from 'country-state-city';
import Loader from './Loader';
import { LabelledInput } from './reusable';

function Modals({ show, setShow, address, editType, user, setUser }) {
  const handleClose = () => setShow(false);

  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: address?.country || 'India',
      state: address?.state || '',
      district: address?.district || '',
      taluka: address?.taluka || '',
      pincode: address?.pincode || '',
    },
  });

  const handleCountryChange = (selectedOption) => {
    setValue('country', selectedOption?.label || '');
    const stateOptions = State.getStatesOfCountry(selectedOption?.value).map((state) => ({
      label: state.name,
      value: state.isoCode,
      countryCode: selectedOption?.value,
    }));
    setStates(stateOptions);
    setCities([]);
    setValue('state', '');
    setValue('district', '');
  };

  const handleStateChange = (selectedOption) => {

    setValue('state', selectedOption?.label || '');

    const cityOptions = City.getCitiesOfState(
      selectedOption.countryCode, // Use stored country ISO code
      selectedOption?.value // State ISO code
    ).map((city) => ({ label: city.name, value: city.name }));

    console.log({ cityOptions });
    setCities(cityOptions);
    setValue('district', 'satara');
  };

  const handleDistrictChange = (selectedOption) => {
    setValue('district', selectedOption?.label || '');
  };

  const onSubmit = async (data) => {
    let payload;

    if (editType === "Address") {
      const { state, country, district, taluka, pincode } = data;
      const address = { state, country, district, taluka, pincode };

      payload = { address };

    } else if (editType === "Image") {
      const formData = new FormData();

      if (data.image && data.image[0]) {
        formData.append("profileImg", data.image[0]);
      } else {
        console.error("No image file found");
        return;
      }
      payload = formData;
    } else if (editType === "Personal") {
      const { name, email, gender, bio, github } = data;
      payload = { name, email, gender, bio, github };
    }

    setIsLoading(true);
    try {
      if (editType === "Address") {

        await patch(apiPaths.STUDENT.UPDATE_INFO, payload);
        setUser((prev) => ({ ...prev, address: { ...payload.address } }))

      } else if (editType === "Image") {
        const result = await patch(apiPaths.STUDENT.UPDATE_PROFILE_IMAGE, payload);
        setUser((prev) => ({
          ...prev,
          picture : result.picture, 
        }));
      }else if (editType === "Personal") {
        await patch(apiPaths.STUDENT.UPDATE_INFO, payload);
        setUser((prev) => ({
          ...prev,
          ...payload, 
        }));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="bg-secondary">
          <Modal.Title>Update {editType}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            {editType === "Address" ? (
              <>
                <div className="mb-3">
                  <label className="form-label">Country</label>
                  <Select
                    options={Country.getAllCountries().map((country) => ({
                      label: country.name,
                      value: country.isoCode,
                    }))}
                    onChange={handleCountryChange}
                    defaultValue={{ label: user.address.country }}
                  />
                  {errors.country && (
                    <div className="invalid-feedback">
                      {errors.country.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">State</label>
                  <Select
                    options={states}
                    onChange={handleStateChange}
                    isDisabled={!states.length}
                    defaultValue={{ label: user.address.state }}
                  />
                  {errors.state && (
                    <div className="invalid-feedback">
                      {errors.state.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">District</label>
                  <Select
                    options={cities}
                    onChange={handleDistrictChange}
                    isDisabled={!cities.length}
                    defaultValue={{ label: user.address.district }}
                  />
                  {errors.district && (
                    <div className="invalid-feedback">
                      {errors.district.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Taluka</label>
                  <input
                    type="text"
                    className={`form-control ${errors.taluka ? "is-invalid" : ""}`}
                    {...register("taluka", {
                      required: "Taluka is required",
                      maxLength: 50,
                    })}
                  />
                  {errors.taluka && (
                    <div className="invalid-feedback">
                      {errors.taluka.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    className={`form-control ${errors.pincode ? "is-invalid" : ""
                      }`}
                    {...register("pincode", {
                      required: "Pincode is required",
                      pattern: {
                        value: /^[0-9]{5,6}$/,
                        message: "Pincode must be 5 or 6 digits",
                      },
                    })}
                  />
                  {errors.pincode && (
                    <div className="invalid-feedback">
                      {errors.pincode.message}
                    </div>
                  )}
                </div>
              </>
            ) : editType === "Image" ? (
              <>
                <LabelledInput
                  type="file"
                  register={register}
                  name={"image"}
                  label="Image"
                />
              </>
            ) : (
              <>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    {...register("name", {
                      required: "Name is required",
                      maxLength: 50,
                    })}
                    placeholder='Enter name'
                    defaultValue={user.name}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email",
                      },
                    })}
                    placeholder='Enter email'
                    defaultValue={user.email}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    className={`form-control ${errors.gender ? "is-invalid" : ""}`}
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                    placeholder='Gender'
                    defaultValue={user.gender}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <div className="invalid-feedback">{errors.gender.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <textarea
                    className={`form-control ${errors.bio ? "is-invalid" : ""}`}
                    {...register("bio", {
                      maxLength: {
                        value: 200,
                        message: "Bio cannot exceed 200 characters",
                      },
                    })}
                    rows="3"
                    defaultValue={user.bio}
                  />
                  {errors.bio && (
                    <div className="invalid-feedback">{errors.bio.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Github</label>
                  <input
                    type="text"
                    className={`form-control ${errors.github ? "is-invalid" : ""}`}
                    {...register("github", {
                      required: "Github is required",
                    })}
                    placeholder='Github link'
                    defaultValue={user.github}
                  />
                  {errors.github && (
                    <div className="invalid-feedback">{errors.github.message}</div>
                  )}
                </div>

              </>
            )}

            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="me-2"
              >
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={isLoading}
                className="d-flex gap-2 align-items-center"
              >
                {isLoading && <Loader size={15} />}
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );

}

export default Modals
