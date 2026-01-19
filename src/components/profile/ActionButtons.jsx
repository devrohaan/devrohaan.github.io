import { FileText, CalendarCheck } from "phosphor-react";
import styles from "./Profile.module.css";

export default function ActionButtons() {
  return (
    <div className={styles.actionWrapper}>
      {/* Resume */}
      <a
        href="/Rohan_Bagwe_Resume.pdf"
        download="Rohan_Bagwe_Resume.pdf"
        className={styles.actionCard}
      >
        <div className={styles.actionIcon}>
          <FileText weight="duotone" size={50} />
        </div>
        <div>
          <h2>Resume</h2>
          <p className={styles.description}>Download my CV</p>
        </div>
      </a>

      {/* Schedule Call */}
      <a
        className={styles.actionCard}
        onClick={() => window.open("https://calendly.com/rohaanb", "_blank")}
      >
        <div className={styles.actionIcon}>
          <CalendarCheck weight="duotone" size={50} />
        </div>
        <div>
          <h2>Schedule a Call</h2>
          <p className={styles.description}>Book a quick meeting</p>
        </div>
      </a>
    </div>
  );
}
