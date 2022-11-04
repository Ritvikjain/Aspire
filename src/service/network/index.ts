import axios from "axios";
import Config from '../../constants/config';


const postApi = (url: string, params: any) => {
  return fetch(`${Config.apis.baseUrl}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((response) => response.json());
}

export {
  postApi,
}