import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import back from '../../assets/back.png';
import gear from '../../assets/gear.png';
import mic from '../../assets/mic.png';
import '../styles/headerDetails.css';

const Header = ({ name }) => (
  <header>
    <ul className="ulHeaderDetail">
      <li className="backTextDetail">

        <NavLink to="/home">
          <img src={back} alt="20px" className="iconosMainDetail" />
        </NavLink>

      </li>
      <li className="headerTitleDetail">{ name }</li>
      <li className="micConDetail">
        <img src={mic} alt="20px" className="iconosMainDetail" />
        {' '}
        <img src={gear} alt="20px" className="iconosMainDetail" />
      </li>

    </ul>
  </header>

);
export default Header;
Header.propTypes = {
  name: PropTypes.string.isRequired,
};
