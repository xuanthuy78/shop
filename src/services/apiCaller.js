import axios from "axios";
import * as Config from "./../constants/Config";

export function NoAuth(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body
  }).catch(function(error) {
    console.log(error);
  });
}

export function call(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    data: body
  }).catch(function(error) {
    console.log(error);
  });
}
