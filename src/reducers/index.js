/*
FileName: index.js
Author: Caitlin Huang
Description:  The rootReducer that combines all the reducer implementaions.
*/

import { combineReducers } from "redux";
import mediaAssetSearchReducer from "./mediaAssetSearchReducer"
import mediaDetailSearchReducer from "./mediaDetailSearchReducer"
import mediaSearchReducer from "./mediaSearchReducer";

export default combineReducers({
    images : mediaSearchReducer,
    image : mediaAssetSearchReducer,
    imageDetail : mediaDetailSearchReducer
});
