import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} from "./actionTypes";

export const getCountryRequest = (payload) => {
  return { type: GET_COUNTRIES_REQUEST, payload };
};

export const getCountryFailure = () => ({
  type: GET_COUNTRIES_FAILURE,
});

export const getCountrySuccess = () => ({
  type: GET_COUNTRIES_SUCCESS,
});
