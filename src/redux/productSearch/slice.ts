import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
    loading:boolean;
    error:null|string;
    data:any;
    pagination:any;
}
const initialState:ProductSearchState ={
    loading:true,
    error:null,
    data:null,
    pagination:null
}


export const searchProduct=createAsyncThunk(
    "productSearch/searchProduct",
    async (
        paramaters:{
            keywords:string;
            nextPage:number|string;
            pageSize:number|string;
        },thunkAPI)=>{
        let url1=`https://console-mock.apipost.cn/app/mock/project/bda5e1f9-5f62-4812-89b4-10dabd7e32b0//mytravel/search`;
        // if (paramaters.keywords) {
        //     url += `&keyword=${paramaters.keywords}`;
        //   }
          const response = await axios.get(url1);
          console.log("response",response);
          
          return {
            data: response.data,
            // pagination: JSON.parse(response.headers["x-pagination"]),
          };
    }
)


export const productSearchSlice=createSlice({
    name:"productSearch",
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [searchProduct.pending.type] :(state)=>{
            // return {...state,loading:true}
            // 因为有immer这个包 所以避免上面的那种写法;
            state.loading=true;
        },
        [searchProduct.fulfilled.type]:(state,action)=>{
            // console.log("datatdas",action)
            state.data=action.payload.data;
            state.pagination=action.payload.pagination;
            state.loading=false;
            state.error=null;
        },
        [searchProduct.rejected.type]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})