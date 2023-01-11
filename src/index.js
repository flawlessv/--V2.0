import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'normalize.css'
import './assets/css/base.css'
import App from '@/App';
import Loading from './base-ui/Loading';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
      </Provider >
  </HashRouter>
);

