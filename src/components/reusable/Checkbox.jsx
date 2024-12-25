import React from "react";

function Checkbox({ label, id, value, checked, onChange }) {
  return (
    <div className="d-flex align-items-center mb-2">
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-check-input me-2"
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;