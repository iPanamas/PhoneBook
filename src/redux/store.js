import { setupListeners } from '@reduxjs/toolkit/dist/query';

// Redux persist
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// RTK Query API
import { phoneBookApi } from 'services/phoneBook';

// Auth slice
import { authSlice } from 'redux/auth/authSlice';

// Contact slice
import { filterSlice } from 'redux/contacts/contactSlice';

// Redux-store-configure
import { configureStore } from '@reduxjs/toolkit';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  phoneBookApi.middleware,
];

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
