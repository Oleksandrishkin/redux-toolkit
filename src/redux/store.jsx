import { configureStore, legacy_createStore as createStore} from "@reduxjs/toolkit"
import {tasksReducer, filtersReducer} from './slice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";



 
export const store = configureStore({
reducer: {
  tasks: tasksReducer,
  filers: filtersReducer
}
  }
);
