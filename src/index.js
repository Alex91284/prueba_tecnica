import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/store'
import { HashRouter } from 'react-router-dom';
import Menu from './components/Menu'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <Menu/>
      <App />
    </Provider>
  </HashRouter>
);
