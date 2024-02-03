import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducerSlice/userSlice'
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: ()=>[logger]
});

export const persistor = persistStore(store)