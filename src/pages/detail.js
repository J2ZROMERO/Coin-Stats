import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Header from '../components/headerDetail';
import Lichild from '../components/liElementsitemsDetails';
import { getStateAfterClick } from '../redux/coins';

const Details = () => {
  const dataCoins = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStateAfterClick());
  }, [dispatch]);

  return (
    <>
      { dataCoins.coins[0].coins.map((x) => <Header key={x.id} name={x.name} />) }
      <section>
        {dataCoins.coins[0].coins.map((x) => (
          <Lichild
            key={x.id}
            icon={x.icon}
            symbol={x.symbol}
            rank={x.rank}
            price={x.price}
            priceBtc={x.priceBtc}
            volume={x.volume}
            marketCap={x.marketCap}
            availableSupple={x.availableSupple}
            priceChange1h={x.priceChange1h}
            priceChange1d={x.priceChange1d}
            priceChange1w={x.priceChange1w}
            websiteUrl={x.websiteUrl}
            exp={x.exp}
          />
        ))}
      </section>
    </>
  );
};
export default Details;
