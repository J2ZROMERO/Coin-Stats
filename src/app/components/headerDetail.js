import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li>

        <button type="button">
          <NavLink to="../">ir a home </NavLink>
          <img src="dasdasddasda" alt="20px" />

        </button>
      </li>
      <li>most views</li>
      <li>
        <img src="dasdasddasda" alt="20px" />
        {' '}
        <img src="dasdasddasda" alt="20px" />
      </li>

    </ul>
  </header>

);
export default Header;
