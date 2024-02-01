import { combineReducers, legacy_createStore as createStore} from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { statusFilters } from './constants';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { addTask, addTasks, fetchTasks } from './operations';


export const taskSlice = createSlice({
  name: "tasks", 
  initialState: {
    items: [], 
    isLoading: false,
    error: null
  },

  // reducers: {
  //   addTask(state, action) {
  //     console.log(action.payload);
  //     state.push(action.payload);
  //   },
  //   deleteTask(state, action) {
  //     return state.filter((task) => task.id !== action.payload);
  //   }, 
  //   toggleCompleted(state, action) {
  //     return state.map((task) => {
  //       if (task.id !== action.payload) {
  //         return task;
  //       }
  //       return { ...task, completed: !task.completed };
  //     });
  //   }
  // }
  extraReducers(builder){

      builder
      .addCase(fetchTasks.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(fetchTasks.fulfilled, (state, action)=>{
        state.isLoading = false
        state.error = null
        state.items = action.payload
      })
    .addCase(fetchTasks.rejected, (state, action)=>{
      state.error = action.payload
    })
    .addCase(addTask.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(addTask.fulfilled, (state, action)=>{
      state.isLoading = false
      state.error = null
      state.items.push(action.payload)
    })
  .addCase(addTask.rejected, (state, action)=>{
    state.error = action.payload
  })
  }

  
});

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


// export const  {addTask, deleteTask, toggleCompleted} = taskSlice.actions
export const {setStatusFilter} = FiltersSlice.actions
export const filtersReducer= FiltersSlice.reducer
export const tasksReducer =  taskSlice.reducer

