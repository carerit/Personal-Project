import styles from "../page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.centeredDiv}>
      <div className="container">
        <h1>About Pawsome</h1>
        <p className="lead">
          I created Pawsome as a showcase for building a simple web application
          using Next.js. This application leverages the dogCEO API to fetch
          random dog images, while also providing an opportunity to hone my
          frontend development skills with React and Bootstrap. It&apos;s
          currently hosted on Vercel.
        </p>
      </div>
    </div>
  );
}
