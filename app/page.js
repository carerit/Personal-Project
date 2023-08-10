"use client";

import styles from "./page.module.css";
import React, { useRef, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const dogBoxRef = useRef(null);

  useEffect(() => {
    const button = document.querySelector(".btn-primary");

    button.addEventListener("click", function () {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          dogBoxRef.current.style.backgroundImage = `url(${response.data.message})`;
        })
        .catch((error) => console.log(error));
    });
  }, []);

  return (
    <div className="container">
      <div className={styles.tap}>
        <button type="button" className="btn btn-primary">
          Fetch!
        </button>
        <h3 className={styles.headerText}>
          Change dog images by clicking the button!
        </h3>
      </div>
      <div ref={dogBoxRef} className={styles.dogBox}></div>
    </div>
  );
}
// const [dogImage, setDogImage] = useState(
//   "https://dog.ceo/img/dog-api-logo.svg"
// );

// function getRandomImage() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((data) => {
//       setDogImage(data.message);
//     })
//     .catch((error) => console.error("Error fetching random image:", error));
// }

// return (
//   <div className={styles.centeredDiv}>
//     <Button onClick={getRandomImage}>Click for a random image</Button>

//     <img id="dogImage" src={dogImage} alt="Random Dog" />
//   </div>
// );
