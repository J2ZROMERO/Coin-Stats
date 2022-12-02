import React from 'react';
import { render } from '@testing-library/react';
import  headerMain from '../components/headerMain';

describe('Unit test', () => {
  it('Should render details of coins and compare with Snapshot', () => {
    const { asFragment } = render(<headerMain />);
    expect(asFragment(<headerMain />)).toMatchSnapshot();
  });
});

