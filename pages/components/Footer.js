import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="basis-1/2 md:text-left text-center">
        <div className={styles.footerTitle}>Interior design</div>
        <div className={styles.footerText}>Bryan-College Station, TX</div>
        <div className={styles.footerText}>
          Design | Remodel | Furnishings | Decoration
        </div>
      </div>
      <div className="basis-1/2 md:text-right text-center md:pt-0 pt-4">
        <div className={styles.footerTitle}>Get in touch</div>
        <a href="mailto:avery@averyellisinteriors.com">
          <div className={styles.footerText}>
            E: avery@averyellisinteriors.com
          </div>
        </a>
        <div className="flex md:justify-end justify-center pt-0.5">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/avery-ellis-31b98210a/"
          >
            <img className="w-[13px]" src="/linkedin2.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
