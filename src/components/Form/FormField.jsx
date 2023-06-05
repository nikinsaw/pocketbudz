import PropTypes from "prop-types";
import "./FormField.styles.css";

const FormField = ({ label, type, id, onChange }) => {
  return (
    <div className="formField">
      <label className="formField__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="formField__input"
        type={type}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
