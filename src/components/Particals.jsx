"use client";
import React, { useEffect } from "react";

const Particals = () => {
  useEffect(() => {
    function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");
      const xPos = Math.random() * window.innerWidth;
      const yPos = Math.random() * window.innerHeight;
      star.style.left = `${xPos}px`;
      star.style.top = `${yPos}px`;
      document.body.appendChild(star);

      const blinkDelay = Math.random() * 1000 + 500; // Random delay for blinking

      setTimeout(() => {
        star.style.opacity = "1";
        setTimeout(() => {
          star.style.opacity = "0.5";
          // Delay before removing the star element
        }, Math.random() * 200 + 1000); // Duration for the star to remain visible
      }, blinkDelay); // Delay before the star appears initially
    }

    function createStarryNight() {
      for (let i = 0; i < 50; i++) {
        createStar();
      }
    }

    // Start the starry night effect when the window loads
    window.onload = createStarryNight;
  });

  return (
    <>
      <div className="starry-night"></div>
    </>
  );
};

export default Particals;
