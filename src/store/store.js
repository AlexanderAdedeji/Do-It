import {configureStore} from '@reduxjs/toolkit';
import ToDoReducers from './slices/todoSlice'



export const store = configureStore({
    reducer:{
todo:ToDoReducers,
    }
})




