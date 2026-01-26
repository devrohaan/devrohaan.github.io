import styles from "./Profile.module.css";
import { MoonStars, Sun, LinkedinLogo } from "phosphor-react";
import ProfilePicTransparent from "../../assets/profile-transparent.png";
import ProfilePic from "../../assets/profile.png";
import MailBoxLogo from "../../assets/mailbox.svg?react";
import GithubLogo from "../../assets/github.svg?react";
import ActionButtons from "./ActionButtons";
import InfoBubble from "./InfoBubble";
import Footer from "./Footer";

export default function Profile({ dark, toggleDark }) {
  return (
    <section id="rohaan" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div style={{ position: "relative" }}>
          <img
            src={ProfilePicTransparent}
            className={styles.rohaan}
            alt="Profile picture of Rohan Bagwe"
          />
          <InfoBubble dark={dark} />
        </div>
        <div>
          {dark ? (
            <Sun onClick={toggleDark} color="#ffd93d" size={32} weight="fill" />
          ) : (
            <MoonStars onClick={toggleDark} size={32} weight="fill" />
          )}
        </div>
      </div>
      <div className={styles.info}>
        <h1>Rohan Bagwe</h1>
        <h2>Full Stack Engineer</h2>
        <p className={styles.description}>
          Over 10 years of experience building scalable products across
          startups, enterprises, and freelance projects.
          <br />
          <br />
          I've contributed across the entire product lifecycle — from idea and
          system architecture to development, deployment, and performance
          optimization — with a focus on building scalable, high-performance
          systems and leveraging AI-driven approaches to improve efficiency.
        </p>

        {/* Action Buttons */}
        <ActionButtons />

        <span>
          <a href="https://www.linkedin.com/in/rohaanbagwe/" target="_blank">
            <LinkedinLogo
              onClick={toggleDark}
              color={dark ? "#fff" : "#222"}
              size={50}
              weight="fill"
            />
          </a>
          <a href="https://github.com/devrohaan" target="_blank">
            <GithubLogo
              onClick={toggleDark}
              color={dark ? "#fff" : "#222"}
              weight="fill"
            />
          </a>
          <a href="mailto:bagwer@tcd.ie" target="_blank">
            <MailBoxLogo
              onClick={toggleDark}
              color={dark ? "#fff" : "#222"}
              weight="fill"
            />
          </a>
        </span>
        <Footer />
      </div>
    </section>
  );
}
