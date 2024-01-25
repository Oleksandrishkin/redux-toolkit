import { configureStore, legacy_createStore as createStore} from "@reduxjs/toolkit"
import {tasksReducer, filtersReducer} from './slice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  tasks: tasksReducer,
filters: filtersReducer
 })
const persistedTaskReducer = persistReducer(persistConfig, rootReducer)
 
export const store = createStore(persistedTaskReducer);

export const persistor = persistStore(store)