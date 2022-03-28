import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {checkout} from './../shoppingcart/slice';
interface OrderState{
    loading:boolean;
    error:null|string;
    currentOrder:any;
}
const initialState:OrderState={
    loading:false,
    error:null,
    currentOrder:null
}


export const placeOrder=createAsyncThunk(
    "order/placeOrder",
    async (parameters:{jwt:string,orderId:string},thunkAPI)=>{
        console.log("Dasdasdasda");
        
        const {data}=await axios.post(`https://console-mock.apipost.cn/app/mock/project/bda5e1f9-5f62-4812-89b4-10dabd7e32b0//placeOrder`,{
            headers:{
                Authorization:`${parameters.jwt}`,
                orderId:parameters.orderId
            }
        });
        console.log("data",data);
        return  data;
    }
)


export const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [placeOrder.pending.type] :(state)=>{
            // return {...state,loading:true}
            // 因为有immer这个包 所以避免上面的那种写法;
            state.loading=true;
        },
        [placeOrder.fulfilled.type]:(state,action)=>{
            console.log("placeordersuccess");
            
            state.currentOrder=[];
            state.loading=false;
            state.error=null;
        },
        [placeOrder.rejected.type]:(state,action)=>{
            // console.log("success");
            state.loading=false;
            state.error=action.payload;
        },
        [checkout.pending.type] :(state)=>{
            // return {...state,loading:true}
            // 因为有immer这个包 所以避免上面的那种写法;
            state.loading=true;
        },
        [checkout.fulfilled.type]:(state,action)=>{
            // console.log("checkout",action);
            // console.log("placeordersudasdasdas645465456ccess");
            state.currentOrder=action.payload;
            state.loading=false;
            state.error=null;
        },
        [checkout.rejected.type]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})