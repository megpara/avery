import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerColumn}>
        <div className={styles.footerTitle}>Interior design</div>
        <div className={styles.footerText}>Bryan-College Station, TX</div>
        <div className={styles.footerText}>
          Design | Remodel | Furnishings | Decoration
        </div>
      </div>
      <div className={styles.footerColumn} />
      <div className={`${styles.footerColumn} ${styles.footerColumnRight}`}>
        <div className={styles.footerTitle}>Get in touch</div>
        <a href="mailto:avery3ellis@gmail.com">
          <div className={styles.footerText}>E: avery3ellis@gmail.com</div>
        </a>
      </div>
    </div>
  );
}
