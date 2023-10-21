import styles from "../page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.centeredDiv}>
      <div className="container">
        <h1>About Pawsome</h1>
        <p className="lead">
          I made Pawsome to demonstrate how to use Next.js to build a simple web
          app that uses an API. This app uses he dogCEO API to get random dog
          images. It also allows me to exercise front end skills using react and
          next.js hosted on vercel.
        </p>
      </div>
    </div>
  );
}
