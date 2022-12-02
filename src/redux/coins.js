import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GETTED_COINS = 'GETTED_COINS';

const initialState = [{
  coins: [{
    id: '',
    icon: '',
    name: '',
    symbol: '',
    rank: '',
    price: '',
    priceBtc: '',
    volume: '',
    marketCap: '',
    availableSupply: '',
    totalSupply: '',
    priceChange1h: '',
    priceChange1d: '',
    priceChange1w: '',
    websiteUrl: '',
    twitterUrl: '',
    exp: [],
  }],
}];

const apiUrl = 'https://api.coinstats.app/public/v1/coins';

export const getCoinsData = createAsyncThunk(
  GETTED_COINS, async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const newData = Object.keys(data).map(() => ({
      ...data,
    }));
    return newData;
  },

);

const coinssSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    getCoinsById(state, action) {
      const val = state[0].coins.filter((x) => x.id === action.payload);
      // initialState = [{ val }];
      return [{
        coins: val,
      }];
    },
    getStateAfterClick(state) {
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCoinsData.fulfilled, (_, action) => action.payload);
    builder.addCase(getCoinsData.rejected, (state) => {
      const newState = state; newState.status = 'failed';
    });
    builder.addCase(getCoinsData.pending, (_, action) => action.payload);
  },
});
export const { getCoinsById } = coinssSlice.actions;
export const { getStateAfterClick } = coinssSlice.actions;
export default coinssSlice.reducer;
