import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const reduceSlice = createSlice({
    name: "info",

    initialState: {
        infos: [],
        users:[],
        roles:[],
        categories:[],
    },
    reducers: {
        setInfo:(state,action) => {
            
            state.infos = action.payload;  
        },
        setUser:(state,action) => {
            
            state.users = action.payload;  
        },
        setRole:(state,action) => {
            
            state.roles = action.payload;  
        },
        setCategory:(state,action) => {
            
            state.categories = action.payload;  
        }
    },
});

export const { setInfo } = reduceSlice.actions;
export const { setUser  } = reduceSlice.actions;
export const { setRole, setCategory } = reduceSlice.actions;
export default reduceSlice.reducer;

export const getInfo = () => (dispatch) => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };
      
    axios.get( 
    'http://localhost:3000/content',
    config
    ).then((c)=>{
        console.log("soy c" , c)
        dispatch(setInfo(c.data));
    }).catch((err)=>{
        console.error(err);
    });
    
}

export const getUsers = () => (dispatch) => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };
      
    axios.get( 
    'http://localhost:3000/user',
    config
    ).then((c)=>{
        console.log("soy c" , c)
        dispatch(setUser(c.data));
    }).catch((err)=>{
        console.error(err);
    });
    
}

export const getRoles = () => (dispatch) => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };
      
    axios.get( 
    'http://localhost:3000/user/roles',
    config
    ).then((c)=>{
        console.log("soy c" , c)
        dispatch(setRole(c.data));
    }).catch((err)=>{
        console.error(err);
    });
    
}

export const getCategories = () => (dispatch) => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };
      
    axios.get( 
    'http://localhost:3000/content/category',
    config
    ).then((c)=>{
        console.log("soy c" , c)
        dispatch(setCategory(c.data));
    }).catch((err)=>{
        console.error(err);
    });
    
}