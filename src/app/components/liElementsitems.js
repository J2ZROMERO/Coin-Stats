import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCoinsById } from '../redux/coins';
import '../styles/lielementMain.css';

const Lichild = ({
  id, icon, title, extraData,
}) => {
  const dispatch = useDispatch();

  const getId = (e) => {
    dispatch(getCoinsById(e.target.id));
  };

  return (
    <NavLink to="/details" onClick={getId}>
      <li className="contentCoin" id={id}>
        <img className="coinsDimensions" src={icon} alt="20px" width="10%" id={id} />
        <h1 className="nameCoin" id={id}>{title}</h1>
        <h2 className="priceCoin" id={id}>
          Price:
          {' '}
          {extraData}
        </h2>
      </li>
    </NavLink>

  );
};

export default Lichild;

Lichild.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  extraData: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,

};
