import React from 'react';
import PropTypes from 'prop-types';

const Lichild = ({
  id,
  icon,
  name,
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
  <ul>
    <li>
      {' '}
      <h1>id:             </h1>
      {' '}
      <h2>{id }</h2>
    </li>
    <li>
      {' '}
      <h1>icon:           </h1>
      {' '}
      <h2>{icon }</h2>
    </li>
    <li>
      {' '}
      <h1>name:           </h1>
      {' '}
      <h2>{name }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>Symbol:         </h1>
      {' '}
      <h2>{symbol }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>rank:           </h1>
      {' '}
      <h2>{rank }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>price:          </h1>
      {' '}
      <h2>{price }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>priceBtc:       </h1>
      {' '}
      <h2>{priceBtc }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>volume:         </h1>
      {' '}
      <h2>{volume }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>marketCap:      </h1>
      {' '}
      <h2>{marketCap }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>availableSupple:</h1>
      {' '}
      <h2>{availableSupple}</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>priceChange1h:  </h1>
      {' '}
      <h2>{priceChange1h }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>priceChange1d:  </h1>
      {' '}
      <h2>{priceChange1d }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>priceChange1w:  </h1>
      {' '}
      <h2>{priceChange1w }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>websiteUrl:     </h1>
      {' '}
      <h2>{websiteUrl }</h2>
      {' '}
    </li>
    <li>
      {' '}
      <h1>exp             </h1>
      {' '}
      <li className="links">
        {' '}
        {exp.map((x) => <a key={x} href={x}>{x}</a>)}
      </li>
    </li>
  </ul>
);

export default Lichild;

Lichild.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
