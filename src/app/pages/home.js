import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Header from '../components/headerMain';
import Lichild from '../components/liElementsitems';
import { getCoinsData } from '../redux/coins';
import '../styles/home.css';

const HomePage = () => {
  const dataCoins = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoinsData());
  }, [dispatch]);

  return (
    <>
      <section className="PrincipalContent">

        <Header />
        <h1 className="coinstitle">CRYPTO COINS</h1>
        <ul className="showAllCoins">
          { dataCoins.coins.map(
            (c) => (
              c.coins.map((v) => (
                <Lichild
                  key={v.id}
                  id={v.id}
                  icon={v.icon}
                  title={v.name}
                  extraData={v.price === '' ? '' : (v.price).toString()}
                />
              ))

            ),
          ) }
        </ul>
      </section>
    </>
  );
};

export default HomePage;
