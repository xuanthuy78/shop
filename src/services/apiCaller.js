import axios from "axios";
import * as Config from "./../constants/Config";

export default function callApi(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body
  }).catch(function(error) {
    console.log(error);
  });
}
