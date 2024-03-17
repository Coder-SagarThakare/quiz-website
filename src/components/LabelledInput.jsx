 /**
 * @param {String}  label to show labe on input field at the top of input field
 * @param {String}  type type of input field you want
 * @param {String}  name name to store in register object
 * @param {String}  id   to apply customized css
 * @param {String}  placeholder  to show bydefault text
 * @param {Boolean} isRequired  is field is required or not
 * @param {object}  errors   it is object of react-hook-form
 * @param {object}  register    to register our field in react-hook-from , object of react-hook-form
 * @param {String}  className  to apply customised classnames of bootstrap
 * @param {Object}  style   apply customized styling
 *
 * @returns - returns a HTML of inputfield
 */

function LabelledInput(props) {
  return (
    <div className="py-2 px-0">
      <label className="mb-1"> {props.label}</label>

      <input
        style={props.style}
        className={`form-control w-100 ${props.className}`}
        type={`${props.type}`}
        name={`${props.name}`}
        id={props.id}
        placeholder={props.placeholder}
        {...props.register(`${props.name}`, {
          required: `${props.isRequired}`,
        })}
      />
  
      {props.errors?.[props.name]?.type === "required" && (
        <p className="text-danger m-0">{props.name} is required</p>
      )}

    </div>
  );
}

export default LabelledInput;
