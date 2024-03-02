// This component is used to create a radio button with basic property

function RadioButton(props) {
  return (
    <div>
      <input
        style={props.style}
        className={`form-check-input mx-2 ${props.className}`}
        type = "radio"
        name={`${props.name}`}
        id={props.id}
        value={props.value}
        {...props.register(`${props.name}`, {
          required: `${props.isRequired}`,
        })}
      />
      <label className="mb-1"> {props.label}</label>
    </div>
  );
}

export default RadioButton;
