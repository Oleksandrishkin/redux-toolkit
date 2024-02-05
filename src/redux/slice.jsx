import { combineReducers, legacy_createStore as createStore} from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { statusFilters } from './constants';
import { configureStore, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTask, addTasks, deleteTask, fetchTasks, toglleComplited } from './operations';


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
    
      .addCase(fetchTasks.fulfilled, (state, action)=>{
       
        state.items = action.payload
      })
   
    .addCase(addTask.fulfilled, (state, action)=>{
   
      state.items.push(action.payload)
    })
  
  .addCase(deleteTask.fulfilled, (state, action)=>{

   
    const idx = state.items.findIndex((item)=>item.id === action.payload.id) 
    state.items.splice(idx, 1)
  })

.addCase(toglleComplited.fulfilled, (state, action)=>{
  
 
  const idx = state.items.findIndex((item)=>item.id === action.payload.id) 
  state.items.splice(idx, 1, action.payload)
})
.addCase(toglleComplited.rejected, (state, action)=>{
state.error = action.payload
})

.addMatcher(isAnyOf(fetchTasks.pending, addTask.pending, deleteTask.pending, toglleComplited.pendin), (state) =>{
state.isLoading = true
})
.addMatcher(isAnyOf(fetchTasks.rejected, addTask.rejected, deleteTask.rejected, toglleComplited.rejected), (state, action)=>{
  state.error = action.payload
})
.addMatcher(isAnyOf(fetchTasks.fulfilled, addTask.fulfilled, deleteTask.fulfilled, toglleComplited.fulfilled),(state, action)=>{
  state.isLoading = false
  state.error = null
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

