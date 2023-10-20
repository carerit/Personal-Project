"use client";

import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {

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

  return (
    <div className="container">
      <div className={styles.tap}>
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
      </div>
    </div>
  );
}
