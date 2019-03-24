/*
FileName: mediaAssetSearchReducer.js
Author: Caitlin Huang
Description:  The reducer for the search action that returns a set of URLs for the selected media.
*/

import {GET_MEDIA_URL } from "../actions/types";
import {GET_MEDIA_URL_RETURN } from "../actions/types";

const initialState = {
  image: []
};

export default function(state = initialState, action) {
    console.log("Reducer");
    console.log(action.imageData);
  switch (action.type) {
    case GET_MEDIA_URL:
    return {
      ...state,
      isFetching: true
    };

    case  GET_MEDIA_URL_RETURN:
      return {
        ...state,
        isFetching: false,
        image: action.mediaData.collection.items,
        error: action.error
      };
    default:
      return state;
  }
}