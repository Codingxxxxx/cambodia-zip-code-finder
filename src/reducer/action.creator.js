import {searchCommunesByDistrictId, searchCommunes} from './../api/province.api';
import {SEARCH_COMMUNE_BY_DISTRICT, SEARCH_COMMUNE_BY_TEXT, RECIEVED_DATA, FETCHING_DATA} from './../reducer/action.type';

export function fetchCommunes(districtId) {
   return (dispatch) => {
      dispatch({type: FETCHING_DATA})
      searchCommunesByDistrictId(districtId).then((responseJson) => {
         dispatch({type: SEARCH_COMMUNE_BY_DISTRICT, payload: {communes: responseJson}});
         dispatch({type: RECIEVED_DATA});
      });
 
   };
}

export function searchCommuneByName(text) {
   return (dispatch) => {
      dispatch({type: FETCHING_DATA})
      searchCommunes(text).then((responseJson) => {
         dispatch({type: SEARCH_COMMUNE_BY_TEXT, payload: {communes: responseJson}});
         dispatch({type: RECIEVED_DATA});
      });
   };
}