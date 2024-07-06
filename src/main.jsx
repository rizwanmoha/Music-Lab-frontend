import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'tailwindcss/tailwind.css';
// import store from './store/index.js'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import {Provider} from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  //   <Provider store={store}>
  //   <App />
  //   </Provider>

  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
  ,
)
