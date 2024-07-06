import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth.js';

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const authPersistedReducer = persistReducer(persistConfig, authReducer);
  
  export const store = configureStore({
    reducer: {auth: authPersistedReducer},
  });
  
  export const persistor = persistStore(store);