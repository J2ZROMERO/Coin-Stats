import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Lichild from '../components/liElementsitems';

describe(' Testing', () => {
  test('Should render details of coins and compare with Snapshot', () => {
    const renderheader = render(
      <Provider store={store}>
        <BrowserRouter>
          <Lichild id="" icon="" title="" extraData="" />
        </BrowserRouter>
      </Provider>,
    );
    expect(renderheader).toMatchSnapshot();
  });
});
