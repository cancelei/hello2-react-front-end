import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import greetingReducer from './reducers/greetingReducer';
import App from './App';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
