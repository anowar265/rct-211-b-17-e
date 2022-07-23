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
  isLoading: false,
  isError: false,
};

export const reducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_REQUEST:
      return { ...store, isLoading: true };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...store,
        countries: payload,
        isLoading: false,
      };
    case GET_COUNTRIES_FAILURE:
      return {
        ...store,
        isError: true,
      };

    case UPDATE_COUNTRY_REQUEST:
      return { ...store, isLoading: true };

    case UPDATE_COUNTRY_SUCCESS:
      let newCountries = store.countries.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...store,
        countries: newCountries,
        isLoading: false,
      };
    case UPDATE_COUNTRY_FAILURE:
      return {
        ...store,
        isError: true,
      };

    default:
      return { ...store };
  }
};
