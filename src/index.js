import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import lightsApiMiddleware from './middleware/lightsApi.js'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const defaultState = {
  modalVisibility: {
    visibility: false,
    currentLight: {
      lightId: null
    }
  }
}

const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(
    lightsApiMiddleware,
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

store.subscribe(() => {
  // console.log(store.getState());
});

registerServiceWorker();
