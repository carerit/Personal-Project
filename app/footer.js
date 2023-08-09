import styles from "./page.module.css";

export default function FooterBar() {
  return (
    <div class="footer">
      <p>
        copyright &copy;{" "}
        <a
          href="https://gossamer-comet-pie.glitch.me/#home"
          target="_blank"
          class={styles.noUnderline}
        >
          Kevin Li
        </a>{" "}
      </p>
    </div>
  );
}
