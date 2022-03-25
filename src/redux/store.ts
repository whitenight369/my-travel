import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import languageReducer from "./langue/languageReducer";
import { actionLog } from "./middleware/actionLog";
import recommendProductsReducer from "./recommandProducts/recommendProductsReducer";
import { productDetailSlice } from "./productDetail/slice";
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { productSearchSlice } from "./productSearch/slice";
import {userSlice} from './user/slice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:"root",
    storage,
    whitelist:["user"]
}


const rootReucer=combineReducers({
    languageReducer,
    recommendProductsReducer,
    productDetail:productDetailSlice.reducer,
    productSearch:productSearchSlice.reducer,
    user:userSlice.reducer
})

const persistedReducer=persistReducer(persistConfig,rootReucer)

// const store=createStore(rootReucer,applyMiddleware(thunk,actionLog));
const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),actionLog],
    devTools:true
})

const persistor=persistStore(store)

export type RootState=ReturnType<typeof store.getState>;

export default {store,persistor};