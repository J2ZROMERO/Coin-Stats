import React from 'react';
import PropTypes from 'prop-types';
import '../styles/liElementsDetails.css';

const Lichild = ({
  icon,
  symbol,
  rank,
  price,
  priceBtc,
  volume,
  marketCap,
  availableSupple,
  priceChange1h,
  priceChange1d,
  priceChange1w,
  websiteUrl,
  exp,
}) => (
  <ul className="detailsCoin">
    <li className="detailsSubtitle">
      <img src={icon} alt="10px" className="detailsIconSubtitle" />
      <div className="principalDetails">
        <div className="detailSub subExtra">
          Symbol:
          <h1>{symbol }</h1>
        </div>

        <div className="detailSub subExtra">
          Rank:
          <h1>{rank }</h1>
          {' '}

        </div>

        <a className="visit" href={websiteUrl}>Visit WebSite</a>
      </div>
    </li>
    <li />
    <li />
    <li>
      {' '}
      <div className="moreDetails">
        <h1>price:          </h1>
        {' '}
        <h2>{price }</h2>
      </div>
      {' '}
    </li>
    <li>
      {' '}
      <div className="moreDetails">
        <h1>priceBtc:       </h1>
        {' '}
        <h2>{priceBtc }</h2>
        {' '}
      </div>
    </li>
    <li>
      {' '}
      <div className="moreDetails">
        <h1>volume:         </h1>
        {' '}
        <h2>{volume }</h2>
        {' '}
      </div>
    </li>
    <li>
      {' '}
      <div className="moreDetails">
        <h1>marketCap:      </h1>
        {' '}
        <h2>{marketCap }</h2>
      </div>

      {' '}
    </li>
    <li>
      {' '}
      <div className="moreDetails">
        <h1>availableSupple:</h1>
        {' '}
        <h2>{availableSupple}</h2>
      </div>
      {' '}
    </li>
    <li>
      {' '}
      <div className="moreDetails">
        <h1>priceChange1h:  </h1>
        {' '}
        <h2>{priceChange1h }</h2>
      </div>
      {' '}
    </li>
    <li>
      {' '}
      <div className="moreDetails">
        <h1>priceChange1d:  </h1>
        {' '}
        <h2>{priceChange1d }</h2>
      </div>
      {' '}
    </li>
    <li>
      {' '}
      <div className="moreDetails">
        <h1>priceChange1w:  </h1>
        {' '}
        <h2>{priceChange1w }</h2>
      </div>
      {' '}
    </li>

    <li className="links">
      <h1>See More</h1>
      {' '}
      {exp.map((x) => <a key={x} href={x}>{x}</a>)}

    </li>
  </ul>
);

export default Lichild;

Lichild.propTypes = {
  icon: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceBtc: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  availableSupple: PropTypes.number.isRequired,
  priceChange1h: PropTypes.number.isRequired,
  priceChange1d: PropTypes.number.isRequired,
  priceChange1w: PropTypes.number.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,

};
