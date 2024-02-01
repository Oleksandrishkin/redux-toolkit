import  { createAsyncThunk } from "@reduxjs/toolkit"

import axios from 'axios'

axios.defaults.baseURL = 'https://65b92f2bb71048505a8a615f.mockapi.io/'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async(_, thunkApi)=>{
    try{
const res = await axios.get('/tasks')
return res.data
    } catch (error) {
thunkApi.rejectWithValue('Упс Помилка')
    }
})

export const addTask = createAsyncThunk('tasks/addTask', async(text,  thunkApi)=>{
    try{
const res = await axios.post('/tasks', {text})
return res.data
    } catch (error) {
thunkApi.rejectWithValue('Упс Помилка')
    }
})



// tasks/fetchTasks/pending
//tasks/fetchTasks/fullfield
// tasks/fetchTasks/