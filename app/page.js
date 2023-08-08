'use client'

import styles from "./page.module.css";
import Link from "next/link";
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
    <div className={styles.centeredDiv}>
      <button onClick={getRandomImage}>Click for a random image</button>
      <br />
      <br />
      <img id="dogImage" src={dogImage} alt="Random Dog" />
    </div>
  );
}
