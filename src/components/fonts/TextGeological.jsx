import PropTypes from "prop-types";

const TextGeological = ({
  children,
  size = 3,
  color = "#333",
  weight = 100,
  className = "",
}) => {
  return (
    <div
      className={className}
      style={{ fontSize: `${size}rem`, color, fontWeight: `${weight}` }}
    >
      {children}
    </div>
  );
};

TextGeological.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.number,
  className: PropTypes.string,
};
export default TextGeological;
