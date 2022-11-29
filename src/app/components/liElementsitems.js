import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Lichild = ({ title, extraData }) => (
  <li>
    {' '}
    <button type="button">
      <NavLink to="/details">ir a details </NavLink>
      ;
    </button>
    <img src="dasdasddasda" alt="20px" />
    <h1>{title}</h1>
    <h2>
      {extraData}
    </h2>
  </li>
);

export default Lichild;

Lichild.propTypes = {
  title: PropTypes.number.isRequired,
  extraData: PropTypes.string.isRequired,

};
