import { configureStore } from "@reduxjs/toolkit"
import {tasksReducer, filtersReducer} from './slice'
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer
  },
});
