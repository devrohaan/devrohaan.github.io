import { ChatCircleDots } from "phosphor-react";
import { useState, useEffect } from "react";
import styles from "./Profile.module.css";

export default function InfoBubble() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBubble(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={styles.speechWrapper}
      onMouseEnter={() => setShowBubble(true)}
      onMouseLeave={() => setShowBubble(false)}
      onClick={() => setShowBubble(!showBubble)}
    >
      <ChatCircleDots size={32} weight="fill" />

      {/* Bubble */}
      <div
        className={[styles.speechBubble, showBubble && styles.show]
          .filter(Boolean)
          .join(" ")}
      >
        Also, when I'm not coding, I'm the go-to tech support for family and
        friends.
      </div>
    </div>
  );
}
