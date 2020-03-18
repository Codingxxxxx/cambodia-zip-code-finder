import {activeMode, dev, prod} from './app.config';

let baseAPIGateway = '';
if (activeMode === 'dev') {
   const {host, port} = dev.api;
   baseAPIGateway = `${host}:${port}`;
} else if (activeMode === 'prod') {
   const {host, port} = prod.api;
   if (!port) {
      baseAPIGateway = `${host}`;
   } else {
      baseAPIGateway = `${host}:${port}`
   }
}

export const API_URL = {
   GET_ALL_PROVINCE: `${baseAPIGateway}/province/all`,
   GET_DISTRICT: `${baseAPIGateway}/province/district`,
   GET_COMMUNE: `${baseAPIGateway}/province/district/commune/search`,
   SEARCH_COMMUNES: `${baseAPIGateway}/province/district/commune`,
   CHECK_CONNECTION: `${baseAPIGateway}/check-connection`
};
