import { combineReducers, legacy_createStore as createStore} from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { statusFilters } from './constants';
import { configureStore, createSlice } from '@reduxjs/toolkit';


export const taskSlice = createSlice({
  name: "tasks", 
  initialState: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],

reducers: {
  addTask(state, action){
state.push(action.payload)
  },
  deleteTask( state, action){
    state.filter((task)=>task.id !== action.payload)
  }, 
  toggleCompleted(state, action){
    state.map((task) => {
        
      if (task.id !== action.payload) {
        return task;
      }
      return { ...task, completed: !task.completed };
    });
  }

}
})



export const FiltersSlice = createSlice({
  name: "filters",
  initialState:{
    status: statusFilters.activell,
  },
  reducers:{
    setStatusFilter(state, action){
      state.status = action.payload
    }
  }
})


export const  {addTask, deleteTask, toggleCompleted} = taskSlice.actions
export const {setStatusFilter} = FiltersSlice.actions
export const filtersReducer= FiltersSlice.reducer
export const tasksReducer =  taskSlice.reducer