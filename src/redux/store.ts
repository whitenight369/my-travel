import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import languageReducer from "./langue/languageReducer";
import { actionLog } from "./middleware/actionLog";
import recommendProductsReducer from "./recommandProducts/recommendProductsReducer";

const rootReucer=combineReducers({
    languageReducer,
    recommendProductsReducer
})

const store=createStore(rootReucer,applyMiddleware(thunk,actionLog));

export type RootState=ReturnType<typeof store.getState>;

export default store;