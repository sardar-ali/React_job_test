import { combineReducers } from "redux";
import { dogBreedReducer } from "./DogBreeds/dogBreedReducer";
import { dogImagesReducer } from "./DogBreeds/dogImagesReducer";

// combine all reduce in Rootreducer
export const rootReducer = combineReducers({
  dogBreed: dogBreedReducer,
  dogImages: dogImagesReducer,
});
