import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import App from './App';
import './styles/App.css';
import './styles/headerDetails.css';
import './styles/headerMain.css';
import './styles/home.css';
import './styles/index.css';
import './styles/liElementsDetails.css';
import './styles/lielementMain.css';
import './styles/generalStyles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
