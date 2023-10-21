"use client";

import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {
  const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

  const [dogImage, setDogImage] = useState(
    "https://dog.ceo/img/dog-api-logo.svg"
  );

  function getRandomImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      })
      .catch((error) => console.error("Error fetching random image:", error));
  }

  const [list, setList] = useState("https://dog.ceo/api/breeds/list/all");

  function populateList() {
    fetch(BREEDS_URL)
      .then((response) => response.json())
      .then((data) => {
        const dogList = Object.keys(data.message);
        const newList = dogList.map((dog) => {
          return `  <option value="${dog}">${dog}</option>`;
        });
        setList(newList);
      });
  }

  return (
    <>
      <div>
        {/* <div className={styles.tap}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={getRandomImage}
          >
            Click for a random image
          </button>
          <h3 className={styles.headerText}>
            Change dog images by clicking the button!
          </h3>
          <div className={styles.dogBox}>
            <img id="dogImage" src={dogImage} alt="Random Dog" />
          </div>
        </div> */}

        <div className="container">
          <header>
            <h1>Dog Viewer</h1>
            <select className="breeds" id="list"></select>
          </header>
        </div>
        <div className="img-container">
          <div className="container">
            <div className="spinner">🐶</div>
            <img
              src="https://res.cloudinary.com/codeg0d/image/upload/v1586691732/dog_ilxfeh.jpg"
              className="dog-img show"
              alt="friendly and intimate - man's best friend"
            />
          </div>
        </div>
      </div>
    </>
  );
}
