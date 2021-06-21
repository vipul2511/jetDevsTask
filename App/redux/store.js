import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['RandomUserDataReducer'],
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareEnhancer = applyMiddleware(thunk);
export const initStore = () =>
  createStore(persistedReducer, {}, middlewareEnhancer);
export const initPersistor = (store) => persistStore(store);