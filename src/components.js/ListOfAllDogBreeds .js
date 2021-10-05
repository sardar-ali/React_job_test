import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogBreeds, getImages } from "../redux/DogBreeds/dogBreedAction";
import ImageModal from "./ImageModal";
import "./Style.css";

const ListOfAllDogBreeds = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    modal: false,
  });
  const { modal } = state;

  const dogBreed = useSelector((state) => state.dogBreed);
  const { listOfDogBreeds, isData } = dogBreed;

  useEffect(() => {
    dispatch(getAllDogBreeds());
  }, []);

  const toggleModale = (dogBreedName) => {
    if (dogBreedName) {
      setState((currentState) => ({
        ...currentState,
        modal: !modal,
      }));
      dispatch(getImages(dogBreedName));
    } else {
      setState((currentState) => ({
        ...currentState,
        modal: !modal,
      }));
      dispatch(getAllDogBreeds());
    }
  };

  return (
    <>
      <h2 className='heading'> WELCOME TO PRISM MARKETING MANAGEMENT </h2>
      <div className='d-flex flex-wrap mr-2'>
        {isData &&
          Object.keys(listOfDogBreeds.message).map((dogBreedName, index) => {
            return (
              <>
                <p
                  key={index}
                  onClick={() => toggleModale(dogBreedName)}
                  className='btn btn-info m-3 p-3'>
                  {dogBreedName}
                </p>
              </>
            );
          })}
      </div>
      <ImageModal modal={modal} toggleModale={toggleModale} />
    </>
  );
};

export default ListOfAllDogBreeds;
