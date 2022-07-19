import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  UPDATE_COUNTRY_FAILURE,
  UPDATE_COUNTRY_REQUEST,
  UPDATE_COUNTRY_SUCCESS,
} from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: true,
  isError: false,
};

export const reducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_REQUEST:
      return { ...store, countries: payload };
    case GET_COUNTRIES_FAILURE:
      return {
        ...store,
        isError: false,
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...store,
        isLoading: false,
      };
    case UPDATE_COUNTRY_REQUEST:
      return { ...store, countries: payload };
    case UPDATE_COUNTRY_FAILURE:
      return {
        ...store,
        isError: false,
      };
    case UPDATE_COUNTRY_SUCCESS:
      return {
        ...store,
        isLoading: false,
      };
    default:
      return { ...store };
  }
};
