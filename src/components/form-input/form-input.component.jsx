import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleOnChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleOnChange} {...otherProps} />
      {label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
    </div>
  );
};

export default FormInput;
