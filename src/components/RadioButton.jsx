import React from "react";

function RadioButton(props) {
  return (
    <div >
      <input
        style={props.style}
        className={` ${props.className}`}
        type={`${props.type}`}
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
