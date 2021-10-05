import {
  DOGIMAGES_FETCHING_SUCCESS,
  DOGIMAGES_FETCHING_FAILURE,
} from "./dogBreedTypes";

export const dogImagesReducer = (
  state = {
    dogPicture: [],
    isImage: false,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case DOGIMAGES_FETCHING_SUCCESS:
      return {
        dogPicture: payload,
        isImage: true,
      };
    case DOGIMAGES_FETCHING_FAILURE:
      return {
        error: payload,
        isImage: false,
      };
    default:
      return {
        state,
      };
  }
};
