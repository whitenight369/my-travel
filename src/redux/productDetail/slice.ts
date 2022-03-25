import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductDetailState{
    loading:boolean;
    error:null|string;
    data:any;
}
const initialState:ProductDetailState={
    loading:true,
    error:null,
    data:null
}


export const getProductDetail=createAsyncThunk(
    "productDetail/getProductDetail",
    async (touristRouteId:string,thunkAPI)=>{
        const {data}=await axios.get(`https://console-mock.apipost.cn/app/mock/project/bda5e1f9-5f62-4812-89b4-10dabd7e32b0/mytravel/getPath`);
        return  data;
    }
)


export const productDetailSlice=createSlice({
    name:"productDetail",
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [getProductDetail.pending.type] :(state)=>{
            // return {...state,loading:true}
            // 因为有immer这个包 所以避免上面的那种写法;
            state.loading=true;
        },
        [getProductDetail.fulfilled.type]:(state,action)=>{
            state.data=action.payload;
            state.loading=false;
            state.error=null;
        },
        [getProductDetail.rejected.type]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})