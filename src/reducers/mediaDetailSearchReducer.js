/*
FileName: mediaDetailSearchReducer.js
Author: Caitlin Huang
Description:  The reducer for the search action that returns the details for the selected media.
*/
import {GET_MEDIA_DETAIL } from "../actions/types";
import {GET_MEDIA_DETAIL_RETURN } from "../actions/types";

const initialState = {
  imageDetail: []
};

export default function(state = initialState, action) {
    console.log("Reducer");
    console.log(action.imageData);
  switch (action.type) {
    case GET_MEDIA_DETAIL:
    return {
      ...state,
      isFetching: true
    };

    case  GET_MEDIA_DETAIL_RETURN:
      console.log("reducer"+action.mediaDetail)
      return {
        ...state,
        isFetching: false,
        imageDetail: action.mediaDetail.collection.items,
        error: action.error
      };
    default:
      return state;
  }
}