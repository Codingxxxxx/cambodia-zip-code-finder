import {SEARCH_COMMUNE_BY_DISTRICT, SEARCH_COMMUNE_BY_TEXT} from './action.type';
import {searchCommunesByDistrictId} from './../api/province.api';

const defaultValues = {
   communes: []
};

export function reducer(state = defaultValues, action) {
   const newState = {...state};
   switch (action.type) {
      case SEARCH_COMMUNE_BY_DISTRICT:
      case SEARCH_COMMUNE_BY_TEXT:
         newState.communes = action.communes;
         break;
      default:
         break;
   }
   return newState;
}