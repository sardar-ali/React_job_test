import {
  DOGBREEDS_FETCHING_SUCCESS,
  DOGBREEDS_FETCHING_FAILURE,
} from "./dogBreedTypes";

const initialState = {
  listOfDogBreeds: [],
  isData: false,
};

export const dogBreedReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DOGBREEDS_FETCHING_SUCCESS:
      return {
        listOfDogBreeds: payload,
        isData: true,
      };
    case DOGBREEDS_FETCHING_FAILURE:
      return {
        error: payload,
        isData: false,
      };
    default:
      return {
        state,
      };
  }
};
