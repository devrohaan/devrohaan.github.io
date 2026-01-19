import { useState, useEffect } from "react";
//import NebulaBackground from "./components/NebulaBackground";
import SkyBackground from "./components/SkyBackground";
import Profile from "./components/profile/Profile";

const getInitialTheme = () => {
  const hour = new Date().getHours();
  const isDark = hour >= 19 || hour < 7;
  return isDark;
};

export default function App() {
  // initial from time
  const [dark, setDark] = useState(getInitialTheme());

  // track if user manually changed theme
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  // Auto theme only if user hasn't overridden
  useEffect(() => {
    if (manualOverride) return;

    const interval = setInterval(() => {
      setDark(getInitialTheme());
    }, 60000);

    return () => clearInterval(interval);
  }, [manualOverride]);

  // Toggle handler
  const toggleDark = () => {
    setDark((prev) => !prev);
    setManualOverride(true); // stop auto mode
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <SkyBackground isNight={dark} />
      {/*<NebulaBackground />*/}
      <Profile dark={dark} toggleDark={toggleDark} />
    </div>
  );
}
