import React from "react";
import PropTypes from "prop-types";

const FieldErrorComponent = ({ field }) => {
  return field && <small className="form-text text-danger">{field}</small> || null;
};

FieldErrorComponent.propTypes = {
  field: PropTypes.string.isRequired
};

export default FieldErrorComponent;
