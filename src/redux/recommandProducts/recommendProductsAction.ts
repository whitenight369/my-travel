import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const FETCH_RECOMMEND_PRODUCTS_START = 
    "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 
    "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推荐信息api调用失败

    interface FetchRecommendProductStartAction {
        type: typeof FETCH_RECOMMEND_PRODUCTS_START
    }
    
    interface FetchRecommendProductSuccessAction {
        type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: any,
    }
    
    interface FetchRecommendProductFailAction {
        type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: any
    }
    
    export type RecommendProductAction =
      | FetchRecommendProductStartAction
      | FetchRecommendProductSuccessAction
      | FetchRecommendProductFailAction; 
    
    export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
      return {
        type: FETCH_RECOMMEND_PRODUCTS_START,
      };
    };
    
    export const fetchRecommendProductSuccessActionCreator = (data: any) : FetchRecommendProductSuccessAction => {
        return {
            type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
            payload: data
        }
    }
    
    export const fetchRecommendProductFailActionCreator = (error: any):FetchRecommendProductFailAction => {
        return {
            type: FETCH_RECOMMEND_PRODUCTS_FAIL,
            payload: error
        }
    }

export const giveMeDataActionCreator=():ThunkAction<
    void,
    RootState,
    unknown,
    RecommendProductAction
>=>async (dispatch,getState)=>{
    dispatch(fetchRecommendProductStartActionCreator());
    try {
      const { data } = await axios("https://console-mock.apipost.cn/app/mock/project/bda5e1f9-5f62-4812-89b4-10dabd7e32b0//mytravel/list");
      // console.log("data",data);
      dispatch(fetchRecommendProductSuccessActionCreator(data.list1))
    } catch (error) {
        dispatch(fetchRecommendProductFailActionCreator(error));
    }
}