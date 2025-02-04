import React from 'react';
import ReactDOM from 'react-dom/client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import router from './Routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
    </Provider>
);


