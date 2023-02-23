import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="input-field-redux form-group">
    <label className="font-w600">{label}</label>
    <div>
      <input {...input} placeholder={label} className="form-control" type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;