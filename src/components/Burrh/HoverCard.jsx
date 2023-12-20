"use client";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 360,
  (x - window.innerWidth / 2) / 240,
  1.02,
];

const trans = (x, y, s) =>
  `perspective(900px) rotateX(${-x}deg) rotateY(${-y}deg)`;

const HoverCard = ({ children, backgroundColor, direction, left }) => {
  const [hovered, setIsHovered] = useState(false);
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 6000, friction: 1000 },
  }));

  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousePosition = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMousePosition);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  const calcTranslate = (
    coordinate,
    containerSize,
    itemSize
  ) => (coordinate / containerSize) * (containerSize - itemSize);

  const translateY =
    typeof window !== "undefined"
      ? calcTranslate(cursorCoords.y, window.innerHeight, 500)
      : 0;
  const translateX = cursorCoords.x - 300;

  const handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    set({ xys: calc(x, y) });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
    setIsHovered(false);
  };

  return (
    <animated.div
      className="  overflow-hidden rounded-xl border-[1px] border-white/10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: springProps.xys.to(trans) }}
    >
      <div
        className={`z-[1] relative bg-[#16181c7e]  h-full  rounded-xl shadow-xl md:flex ${direction} justify-between`}
      >
        {children}
        <div
          className={`absolute w-[500px] border-none  bottom-[50%] h-[500px] z-[-1] back ${
            hovered ? "opacity-95" : "opacity-0"
          } `}
          style={{
            transform: `translateX(${translateX - 100}px) translateY(${
              2 * translateY
            }px)`,
            background: backgroundColor,
            borderRadius: "100%",
            left: left,
            willChange: "transform",
            transition: "transform 0.2s cubic-bezier",
          }}
        ></div>
      </div>
    </animated.div>
  );
};

export default HoverCard;
