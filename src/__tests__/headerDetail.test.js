import React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import headerDetails from '../components/headerDetail';

describe('Unit test', () => {
  it('Should render details of coins and compare with Snapshot', () => {
    const { asFragment } = render(<headerDetails name="some" />);
    expect(asFragment(<headerDetails name="some" />)).toMatchSnapshot();
  });
});
