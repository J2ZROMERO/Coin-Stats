import coinssSlice,{ getCoinsData } from '../redux/coins';

describe('Testing defined reducers', () => {
  
  it('Should details page to be defined', () => {
    expect(coinssSlice([], getCoinsData())).toBeDefined();
  });
});