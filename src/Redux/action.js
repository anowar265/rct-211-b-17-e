import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  UPDATE_COUNTRY_REQUEST,
  UPDATE_COUNTRY_FAILURE,
  UPDATE_COUNTRY_SUCCESS,
} from "./actionTypes";

export const getCountryRequest = () => {
  return { type: GET_COUNTRIES_REQUEST };
};

export const getCountryFailure = () => ({
  type: GET_COUNTRIES_FAILURE,
});

export const getCountrySuccess = (payload) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload,
});

export const updateCountryRequest = () => {
  return { type: UPDATE_COUNTRY_REQUEST };
};

export const updateCountryFailure = () => ({
  type: UPDATE_COUNTRY_FAILURE,
});

export const updateCountrySuccess = (payload) => ({
  type: UPDATE_COUNTRY_SUCCESS,
  payload,
});
