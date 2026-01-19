import { motion } from "framer-motion";

export default function SkyBackground({ isNight }) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Pre-generate stars
  const stars = Array.from({ length: 50 }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height * 0.65,
    size: Math.random() * 3 + 1.5,
    opacity: Math.random() * 0.8 + 0.3,
  }));

  // Arc math for sun / moon
  const arcX = (p) => p * (width + 300) - 150;
  const arcY = (p) => height * 0.32 - Math.sin(p * Math.PI) * (height * 0.45);

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: -1,
        background: isNight
          ? "linear-gradient(to bottom, #040014, #0b0030)"
          : "linear-gradient(to bottom, #7ecbff, #eaf7ff)",
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Sun */}
      {!isNight && (
        <motion.div
          style={{
            position: "absolute",
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "#FFD93D",
            boxShadow: "0 0 60px #FFD93D",
          }}
          animate={{
            left: [arcX(0), arcX(0.5), arcX(1)],
            top: [arcY(0), arcY(0.5), arcY(1)],
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Moon */}
      {isNight && (
        <motion.div
          style={{
            position: "absolute",
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "#f5f3ce",
            boxShadow: "0 0 40px #ffffffaa",
          }}
          animate={{
            left: [arcX(0), arcX(0.5), arcX(1)],
            top: [arcY(0), arcY(0.5), arcY(1)],
          }}
          transition={{
            duration: 110,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Stars */}
      {isNight &&
        stars.map((star, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              background: "white",
              boxShadow: `0 0 ${star.size * 2}px white`,
            }}
            animate={{ opacity: [star.opacity, 0.2, star.opacity] }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </motion.div>
  );
}
