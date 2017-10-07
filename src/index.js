import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar';
import reducers from './reducers';
import UserDetail from './components/user_detail'

const PUREACH_API_AUTHORIZATION= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1hdSIsImV4cCI6MTUwNzQ0MjIwN30.ABhiwqMygdv6QCffwPnpoa-64EgJ4CAPsL4QuhFd5Rc';
const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <UserDetail />
  </Provider>
  , document.querySelector('.container'));
