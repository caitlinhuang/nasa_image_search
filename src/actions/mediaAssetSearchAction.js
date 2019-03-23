import {GET_MEDIA_URL} from "./types";
import {GET_MEDIA_URL_RETURN} from "./types";
import axios from "axios";
import { NASA_ASSET_URL } from "./api";

export default function mediaSearch(postData) {
    return function(dispatch)  {
      dispatch({ type: GET_MEDIA_URL });
      console.log("action");
      console.log(postData);
      axios
        .get(NASA_ASSET_URL + postData)
  
        .then(res => {
          dispatch({
            type: GET_MEDIA_URL_RETURN,
            mediaData: res.data
          });
          console.log(res.data);
        })
  
        .catch(error => {
          dispatch({
            type: GET_MEDIA_URL,
            mediaData: error.data
          });
          alert(error);
        });
    };
  }
  