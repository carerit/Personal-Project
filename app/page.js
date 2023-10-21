"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

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
    if (selectedBreed) {
      const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
      getDogImage(url);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Select from the Drop Menu</h1>
        <div className="w-50 ">
          <div className="d-flex input-group w-100 py-5">
            <select
              className="breeds form-select text-capitalize"
              aria-label="Default select example"
              onChange={handleBreedChange}
            >
              <option value="">Select a breed...</option>
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
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <img
            className={styles.centeredDogImage}
            src={dogImage}
            alt="Dog"
            style={{ display: dogImage ? "block" : "none" }}
          />
        )}
      </div>
    </>
  );
}
