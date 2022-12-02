import React from 'react';
import { render } from '@testing-library/react';
import Lichild from '../components/liElementsitemsDetails';

describe('Unit test', () => {
  it('Should render details of coins and compare with Snapshot', () => {
    const { asFragment } = render(<Lichild
      icon=""
      symbol=""
      rank=""
      price=""
      priceBtc=""
      volume=""
      marketCap=""
      availableSupple=""
      priceChange1h=""
      priceChange1d=""
      priceChange1w=""
      websiteUrl=""
      exp={[]}
    />);
    expect(asFragment(<Lichild
      icon=""
      symbol=""
      rank={455}
      price={45}
      priceBtc={456}
      volume={15}
      marketCap={214}
      availableSupple={121}
      priceChange1h={45}
      priceChange1d={454}
      priceChange1w={77546}
      websiteUrl=""
      exp={[]}
    />)).toMatchSnapshot();
  });
});
