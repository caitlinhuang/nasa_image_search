/*
FileName: mediaSearchReducer.js
Author: Caitlin Huang
Description:  The reducer for the search action that returns a set of media that satisfy the combined search conditions.
*/
import {GET_MEDIA } from "../actions/types";
import {GET_MEDIA_RETURN } from "../actions/types";

const initialState = {
  images: []
};

export default function(state = initialState, action) {
    console.log("Reducer");
    console.log(action.imageData);
  switch (action.type) {
    case GET_MEDIA:
    return {
      ...state,
      isFetching: true
    };

    case  GET_MEDIA_RETURN:
      console.log("reducer"+action.mediaAll)
      return {
        ...state,
        isFetching: false,
        images: action.mediaAll.collection.items,
        error: action.error
      };
    default:
      return state;
  }
}