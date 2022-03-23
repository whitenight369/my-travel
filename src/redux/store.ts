import { createStore,combineReducers } from "redux";
import languageReducer from "./langue/languageReducer";
import recommendProductsReducer from "./recommandProducts/recommendProductsReducer";

const rootReucer=combineReducers({
    languageReducer,
    recommendProductsReducer
})

const store=createStore(rootReucer);

export type RootState=ReturnType<typeof store.getState>;

export default store;