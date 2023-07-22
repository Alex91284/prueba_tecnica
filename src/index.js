import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/store'
import { HashRouter } from 'react-router-dom';
import { Nav } from './components/Nav'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <Nav/>
      <App />
    </Provider>
  </HashRouter>
);
