import axios from 'axios';

/*
Example is from:
https://alligator.io/react/axios-react/
*/
export const getMarker = axios.create({
  baseURL: `http://localhost:3000/marker`
});
