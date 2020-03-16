import Axios from 'axios';
import {API_URL} from '../api.config';

export function getAllProvinces() {
   return new Promise((resolve, reject) => {
      Axios.post(API_URL.GET_ALL_PROVINCE).then((response) => {
         resolve(response.data);
      }).catch((error) => {
         reject(error);
      });
   });
}

export function getAllDistrictsOfProvince(provinceId) {
   return new Promise((resolve, reject) => {
      const requestBody = {
         provinceId
      };
      Axios.post(API_URL.GET_DISTRICT, requestBody).then((response) => {
         resolve(response.data);
      }).catch((error) => {
         reject(error);
      });
   });
}

export function searchCommunes(communeName) {
   return new Promise((resolve, reject) => {
      const requestBody = {
         communeName
      };
      Axios.post(API_URL.GET_COMMUNE, requestBody).then((response) => {
         resolve(response.data);
      }).catch((error) => {
         reject(error);
      });
   });
}

export function searchCommunesByDistrictId(districtId) {
   return new Promise((resolve, reject) => {
      const requestBody = {
         districtId
      };
      Axios.post(API_URL.SEARCH_COMMUNES, requestBody).then((response) => {
         resolve(response.data);
      }).catch((error) => {
         reject(error);
      })
   });
}