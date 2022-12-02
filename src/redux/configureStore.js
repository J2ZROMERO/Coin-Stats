import { configureStore } from '@reduxjs/toolkit';
import coinssSlice from './coins';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();
const Store = configureStore({
  reducer: {
    coins: coinssSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
