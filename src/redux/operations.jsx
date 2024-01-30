const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

axios.defaults.baseURL = 'https://65b92f2bb71048505a8a615f.mockapi.io/'

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async()=>{
    try{
const res = await axios.get('/tasks')
return res.data
    } catch (error) {

    }
})