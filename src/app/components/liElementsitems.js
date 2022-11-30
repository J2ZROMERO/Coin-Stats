import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Lichild = ({ icon, title, extraData }) => (
  <li>
    <button type="button">
      <NavLink to="/details">ir a details </NavLink>
    </button>
    <img src={icon} alt="20px" width="10%" />
    <h1>{title}</h1>
    <h2>{extraData}</h2>
  </li>
);

export default Lichild;

Lichild.propTypes = {
  title: PropTypes.string.isRequired,
  extraData: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,

};
