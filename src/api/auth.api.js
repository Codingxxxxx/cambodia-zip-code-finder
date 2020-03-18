import {API_URL} from './../api.config';
import Axios from 'axios';

export function checkServerConnection() {
   return new Promise((resolve, reject) => {
      Axios.post(API_URL.CHECK_CONNECTION).then((response) => {
         resolve(response.data);
      }).catch((error) => {
         reject(error);
      });
   });
}