import {GET_MEDIA} from "./types";
import {GET_MEDIA_RETURN} from "./types";
import axios from "axios";
import { NASA_SEARCH_API_URL } from "./api";

export default function mediaAllSearch(postData) {
    return function(dispatch)  {
      dispatch({ type: GET_MEDIA });
      console.log("action");
      console.log(postData);
      axios
        .get(NASA_SEARCH_API_URL +postData)
        .then(res => {
          dispatch({
            type: GET_MEDIA_RETURN,
            mediaAll: res.data
          });
          console.log(res.data);
        })
  
        .catch(error => {
          dispatch({
            type: GET_MEDIA,
            mediaAll: error.data
          });
          alert(error);
        });
    };
  }
  