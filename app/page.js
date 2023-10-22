"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { get } from "jquery";

export default function Home() {
  const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
  const random_dog_url = "https://dog.ceo/api/breeds/image/random";

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch the list of dog breeds when the component mounts
    fetch(BREEDS_URL)
      .then((res) => res.json())
      .then((data) => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
        setBreeds(breedsArray);
        getDogImage(random_dog_url);
      });
  }, []);

  const handleBreedChange = (e) => {
    const selectedBreed = e.target.value;
    setSelectedBreed(selectedBreed);
  };

  const getDogImage = (url) => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      });
  };

  const handleBreedConfirm = () => {
    if (selectedBreed !== "random") {
      const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
      getDogImage(url);
    } else {
      getDogImage(random_dog_url);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Select from the Drop Menu</h1>
        <div className="w-50">
          <div className="d-flex input-group w-100 py-5">
            <select
              className="breeds form-select text-capitalize"
              aria-label="Default select example"
              onChange={handleBreedChange}
            >
              <option key="random" value="random">
                Random...
              </option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>

            <button
              className="btn btn-outline-secondary"
              onClick={handleBreedConfirm}
              type="button"
            >
              Confirm
            </button>
          </div>
        </div>

        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className={styles.centeredDogDiv}>
            <Image
              layout="fill"
              objectFit="cover"
              src={dogImage}
              alt="Dog don't exist anymore :("
              className="rounded-3 border border-dark"
            />
          </div>
        )}
      </div>
    </>
  );
}
