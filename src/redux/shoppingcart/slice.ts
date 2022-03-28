import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ShoppingCartState{
    loading:boolean;
    error:null|string;
    items:any[];
}
const initialState:ShoppingCartState={
    loading:true,
    error:null,
    items:[]
}


export const getShoppingCart=createAsyncThunk(
    "shoppingCart/getShoppingCart",
    async (jwt:string,thunkAPI)=>{
        // console.log("data",jwt)
        const {data}=await axios.get(`https://console-mock.apipost.cn/app/mock/project/bda5e1f9-5f62-4812-89b4-10dabd7e32b0/mytravel/shopping`);
        // console.log("data",data)
        return  data;
    }
)


export const addShoppingCartItem=createAsyncThunk(
    "shoppingCart/addShoppingCartItem",
    async (parameters:{jwt:string;touristRouteId:string},thunkAPI)=>{
        const {data}=await axios.post(`https://console-mock.apipost.cn/app/mock/project/bda5e1f9-5f62-4812-89b4-10dabd7e32b0/mytravel/getPath`,{
            touristRouteId:parameters.touristRouteId
        },{
            headers:{
                Authorization:`${parameters.jwt}`
            }
        });
        return  data.shoppCartItems;
    }
)

export const clearShoppingCartItem=createAsyncThunk(
    "shoppingCart/clearShoppingCartItem",
    async (parameters:{jwt:string;itemIds:any[]},thunkAPI)=>{
        return await axios.delete(`https://console-mock.apipost.cn/app/mock/project/bda5e1f9-5f62-4812-89b4-10dabd7e32b0/mytravel/getPath`,{
            headers:{
                Authorization:`${parameters.jwt}`
            }
        });
    }
)


export const shoppingCartSlice=createSlice({
    name:"shoppingCart",
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [getShoppingCart.pending.type] :(state)=>{
            // console.log("erordasda");
            // return {...state,loading:true}
            // 因为有immer这个包 所以避免上面的那种写法;
            state.loading=true;
        },
        [getShoppingCart.fulfilled.type]:(state,action)=>{
            // console.log("action",action); 
            state.items=action.payload;
            state.loading=false;
            state.error=null;
        },
        [getShoppingCart.rejected.type]:(state,action)=>{
            // console.log("eror");
            
            state.loading=false;
            state.error=action.payload;
        },
        [addShoppingCartItem.pending.type] :(state)=>{
            // return {...state,loading:true}
            // 因为有immer这个包 所以避免上面的那种写法;
            state.loading=true;
        },
        [addShoppingCartItem.fulfilled.type]:(state,action)=>{
            state.items=action.payload;
            state.loading=false;
            state.error=null;
        },
        [addShoppingCartItem.rejected.type]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        [clearShoppingCartItem.pending.type] :(state)=>{
            // return {...state,loading:true}
            // 因为有immer这个包 所以避免上面的那种写法;
            state.loading=true;
        },
        [clearShoppingCartItem.fulfilled.type]:(state)=>{
            state.items=[];
            state.loading=false;
            state.error=null;
        },
        [clearShoppingCartItem.rejected.type]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
    }
})