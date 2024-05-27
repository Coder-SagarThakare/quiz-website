// This component is used to create a radio button with basic property

function RadioButton(props) {
  const buttonStyle = {
    height: "20px",
    width: "20px",
    border: props.selected === props.value ? ' : "0.5px solid #ccff00"' : "",
  };
  return (
    <div className="d-flex align-items-center">
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={buttonStyle}
      >
        <input
          style={props.style}
          className={`form-check-input m-0 ${props.className}`}
          type="radio"
          name={`${props.name}`}
          id={props.id}
          value={props.value}
          {...props.register(`${props.name}`, {
            required: `${props.isRequired}`,
          })}
          onChange={(e) => {
            props.setselected(e.target.value);
          }}
        />
      </div>
      <label className="mx-2 "> {props.label} </label>
    </div>
  );
}

export default RadioButton;
