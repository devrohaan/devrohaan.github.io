import styles from "./Profile.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Rohan Bagwe
    </footer>
  );
}
