import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_REQUEST:
      return { ...state, countries: payload };
    case GET_COUNTRIES_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { state };
  }
};
