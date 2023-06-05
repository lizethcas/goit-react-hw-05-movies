import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BackLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

BackLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element,
};
export default BackLink;
