import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCoinsById } from '../redux/coins';

const Lichild = ({
  id, icon, title, extraData,
}) => {
  const dispatch = useDispatch();

  const getId = (e) => {
    dispatch(getCoinsById(e.target.id));
  };

  return (
    <NavLink to="/details" onClick={getId}>
      <li id={id}>
        <img src={icon} alt="20px" width="10%" id={id} />
        <h1 id={id}>{title}</h1>
        <h2 id={id}>{extraData}</h2>
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
