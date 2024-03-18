"use client";

import styles from "./StarBackground.module.css";

// functional component creates a starry background effect on a webpage
// by generating stars with varying positions, sizes, and glowing effects using CSS styling.
const StarBackground = () => {
  const stars = [];

  for (let i = 0; i < 300; i++) {
    const left = `${Math.random() * 100}vw`;
    const top = `${Math.random() * 100}vh`;
    const width = `${Math.random() * 3 + 0.5}px`;
    const height = `${Math.random() * 3 + 0.5}px`;
    const shouldGlow = Math.random() < 0.4;

    stars.push({
      left,
      top,
      width,
      height,
      shouldGlow,
    });
  }

  return (
    <div className={`${styles.stars} fixed top-0 left-0 w-screen h-screen bg-black`}>
      {stars.map((star, index) => (
        <div
          key={index}
          className={`${styles.star} ${star.shouldGlow ? styles.glow : ""}`}
          style={{
            left: star.left,
            top: star.top,
            width: star.width,
            height: star.height,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
