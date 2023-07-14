import PropTypes from "prop-types";

const Input = ({
  id,
  name,
  type,
  value,
  className,
  labelText,
  placeholder,
  handleChange,
}) => {
  return (
    <>
      <div className="form-row">
        {labelText && (
          <label htmlFor={name} className="form-label">
            {labelText}
          </label>
        )}
        <input
        id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${className ? className : "form-input"}`}
          autoComplete="false"
        />
      </div>
    </>
  );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.any,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
};

export default Input;
