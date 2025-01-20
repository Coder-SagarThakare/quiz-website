import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { patch } from '../services';
import { apiPaths } from '../constants';
import { Country, State, City } from 'country-state-city';
import Loader from './Loader';

function Modals({ show, setShow, address }) {
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
    console.log('Submitted data:', data);

    const { state, country, district, taluka, pincode } = data;
  const address = { state, country, district, taluka, pincode };

  const payload = { address };

    setIsLoading(true);
    try {
      await patch(apiPaths.STUDENT.UPDATE_ADDRESS, payload);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-secondary">
          <Modal.Title>Edit Address Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Country</label>
              <Select
                options={Country.getAllCountries().map((country) => ({
                  label: country.name,
                  value: country.isoCode,
                }))}
                onChange={handleCountryChange}
              />
              {errors.country && <div className="invalid-feedback">{errors.country.message}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">State</label>
              <Select
                options={states}
                onChange={handleStateChange}
                isDisabled={!states.length}
              />
              {errors.state && <div className="invalid-feedback">{errors.state.message}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">District</label>
              <Select
                options={cities}
                onChange={handleDistrictChange}
                isDisabled={!cities.length}
              />
              {errors.district && <div className="invalid-feedback">{errors.district.message}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Taluka</label>
              <input
                type="text"
                className={`form-control ${errors.taluka ? 'is-invalid' : ''}`}
                {...register('taluka', { required: 'Taluka is required', maxLength: 50 })}
              />
              {errors.taluka && <div className="invalid-feedback">{errors.taluka.message}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Pincode</label>
              <input
                type="text"
                className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                {...register('pincode', {
                  required: 'Pincode is required',
                  pattern: {
                    value: /^[0-9]{5,6}$/,
                    message: 'Pincode must be 5 or 6 digits',
                  },
                })}
              />
              {errors.pincode && <div className="invalid-feedback">{errors.pincode.message}</div>}
            </div>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                Close
              </Button>
              <Button variant="primary" type="submit" disabled={isLoading} className='d-flex gap-2'>
                {isLoading && <Loader size={15}/>}
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;
