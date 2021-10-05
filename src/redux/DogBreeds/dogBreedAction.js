import axios from "axios";
import {
  DOGBREEDS_FETCHING_SUCCESS,
  DOGBREEDS_FETCHING_FAILURE,
  DOGIMAGES_FETCHING_SUCCESS,
  DOGIMAGES_FETCHING_FAILURE,
} from "./dogBreedTypes";

// Action for getting DogsBreeds
export const getAllDogBreeds = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://dog.ceo/api/breeds/list/all`);
    dispatch({
      type: DOGBREEDS_FETCHING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DOGBREEDS_FETCHING_FAILURE,
      payload: error.message,
    });
  }
};

//Action for getting DogImages
export const getImages = (name) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${name}/images`
    );
    dispatch({
      type: DOGIMAGES_FETCHING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DOGIMAGES_FETCHING_FAILURE,
      payload: error.message,
    });
  }
};
