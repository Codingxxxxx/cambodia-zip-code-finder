import {SEARCH_COMMUNE_BY_DISTRICT, SEARCH_COMMUNE_BY_TEXT, FETCHING_DATA, RECIEVED_DATA} from './action.type';

const defaultValues = {
   communes: [],
   isFetching: false
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
      default:
         break;
   }
   return newState;
}