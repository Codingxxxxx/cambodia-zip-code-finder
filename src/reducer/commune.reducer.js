import {SEARCH_COMMUNE_BY_DISTRICT, SEARCH_COMMUNE_BY_TEXT, FETCHING_DATA, RECIEVED_DATA, FETCHED_DISTRICT, FETCHING_DISTRICT, FETCH_PROVINCE, STOP_FETCH_PROVINCE} from './action.type';

const defaultValues = {
   communes: [],
   isFetching: false,
   fetchingDistrict: false,
   fetchProvince: false
};

export function reducer(state = defaultValues, action) {
   const newState = {...state};
   switch (action.type) {
      case SEARCH_COMMUNE_BY_DISTRICT:
      case SEARCH_COMMUNE_BY_TEXT:
         newState.communes = action.payload.communes;
         break;
      case FETCHING_DATA:
         newState.isFetching = true;
         break;
      case RECIEVED_DATA:
         newState.isFetching = false
         break;
      case FETCHING_DISTRICT:
         newState.fetchingDistrict = true;
         break;
      case FETCHED_DISTRICT:
         newState.fetchingDistrict = false;
         break;
      case FETCH_PROVINCE:
         newState.fetchProvince = true;
         break;
      case STOP_FETCH_PROVINCE:
         newState.fetchProvince = false;
         break;
      default:
         break;
   }
   return newState;
}