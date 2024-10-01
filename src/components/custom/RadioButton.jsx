// This component is used to create a radio button with basic property

function RadioButton({htmlFor, ...rest }) {
  const buttonStyle = {
    height: "20px",
    width: "20px",
    border: rest.selected === rest.value ? ' : "5px solid #ccff00"' : "",
  };

  const handleSelect = (e) => {
    if (rest.setSelected) {
      rest.setSelected(e.target.value);
    }
    console.log("clicked")
  };

  return (
    <div className="d-flex align-items-center py-1">
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={buttonStyle}
      >
        <input
          className={`form-check-input m-0 cursor ${rest?.className ? rest.className : ""}`}
          type="radio"
          {...(rest.register &&
            rest.register(rest.name, {
              required: rest.isRequired,
            }))}
          onChange={handleSelect}
          {...rest}
        />
      </div>
      <label className="mx-2 cursor" htmlFor={htmlFor}> {rest.label} </label>
    </div>
  );
}

export default RadioButton;
