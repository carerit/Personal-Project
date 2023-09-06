import styles from "./page.module.css";

export default function FooterBar() {
  return (
    <div className={styles.footer}>
      <p>
        copyright &copy;{" "}
        <a
          href="https://gossamer-comet-pie.glitch.me/#home"
          target="_blank"
          className={styles.noUnderline}
        >
          Kevin Li
        </a>{" "}
      </p>
    </div>
  );
}
