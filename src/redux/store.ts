import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import languageReducer from "./langue/languageReducer";
import { actionLog } from "./middleware/actionLog";
import recommendProductsReducer from "./recommandProducts/recommendProductsReducer";
import { productDetailSlice } from "./productDetail/slice";
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { productSearchSlice } from "./productSearch/slice";
const rootReucer=combineReducers({
    languageReducer,
    recommendProductsReducer,
    productDetail:productDetailSlice.reducer,
    productSearch:productSearchSlice.reducer
})

// const store=createStore(rootReucer,applyMiddleware(thunk,actionLog));
const store=configureStore({
    reducer:rootReucer,
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),actionLog],
    devTools:true
})

export type RootState=ReturnType<typeof store.getState>;

export default store;