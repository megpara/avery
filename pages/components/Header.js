import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="/logo.png" />
      <div className={styles.icons}>
        <a href="mailto:avery@averyellisinteriors.com">
          <img className={styles.icon} src="/email_icon.png" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/avery-ellis-31b98210a/"
        >
          <img className={styles.icon} src="/linkedin2.png" />
        </a>
      </div>
      <div className={styles.headerText}>
        <div className={styles.title}>Avery Ellis Interiors</div>
      </div>
    </div>
  );
}
