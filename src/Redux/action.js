import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  UPDATE_COUNTRY_REQUEST,
  UPDATE_COUNTRY_FAILURE,
  UPDATE_COUNTRY_SUCCESS,
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

export const updateCountryRequest = (payload) => {
  return { type: GET_COUNTRIES_REQUEST, payload };
};

export const updateCountryFailure = () => ({
  type: GET_COUNTRIES_FAILURE,
});

export const updateCountrySuccess = () => ({
  type: GET_COUNTRIES_SUCCESS,
});
