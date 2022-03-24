import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import languageReducer from "./langue/languageReducer";
import { actionLog } from "./middleware/actionLog";
import recommendProductsReducer from "./recommandProducts/recommendProductsReducer";
import { productDetailSlice } from "./productDetail/slice";
import {combineReducers} from '@reduxjs/toolkit';
const rootReucer=combineReducers({
    languageReducer,
    recommendProductsReducer,
    productDetail:productDetailSlice.reducer
})

const store=createStore(rootReucer,applyMiddleware(thunk,actionLog));

export type RootState=ReturnType<typeof store.getState>;

export default store;