import {GET_MEDIA_DETAIL} from "./types";
import {GET_MEDIA_DETAIL_RETURN} from "./types";
import axios from "axios";
import { NASA_SEARCH_API_URL } from "./api";

export default function mediaDetailSearch(postData) {
    return function(dispatch)  {
      dispatch({ type: GET_MEDIA_DETAIL });
      console.log("action");
      console.log(postData);
      axios
        .get(NASA_SEARCH_API_URL + "search?nasa_id="+postData)
        .then(res => {
          dispatch({
            type: GET_MEDIA_DETAIL_RETURN,
            mediaDetail: res.data
          });
          console.log(res.data);
        })
  
        .catch(error => {
          dispatch({
            type: GET_MEDIA_DETAIL,
            mediaDetail: error.data
          });
          alert(error);
        });
    };
  }
  