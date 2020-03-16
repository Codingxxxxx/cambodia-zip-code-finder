import {searchCommunesByDistrictId, searchCommunes} from './../api/province.api';
import {SEARCH_COMMUNE_BY_DISTRICT, SEARCH_COMMUNE_BY_TEXT} from './../reducer/action.type';

export function fetchCommunes(districtId) {
   return (dispatch) => {
      searchCommunesByDistrictId(districtId).then((responseJson) => {
         dispatch({type: SEARCH_COMMUNE_BY_DISTRICT, communes: responseJson});
      });
 
   };
}

export function searchCommuneByName(text) {
   return (dispatch) => {
      searchCommunes(text).then((responseJson) => {
         dispatch({type: SEARCH_COMMUNE_BY_TEXT, communes: responseJson});
      });
   };
}