import { createSlice } from "@reduxjs/toolkit";

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

export const productDetailSlice=createSlice({
    name:"productDetail",
    initialState,
    reducers:{
        fetchStart :(state)=>{
            // return {...state,loading:true}
            // 因为有immer这个包 所以避免上面的那种写法;
            state.loading=true;
        },
        fetchSuccess:(state,action)=>{
            state.data=action.payload;
            state.loading=false;
            state.error=null;
        },
        fetchFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})