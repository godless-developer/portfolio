"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursorGlow = document.getElementById("cursor-glow");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-glow"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 10,
          transform: "translate(-50%, -50%)",
          filter: "blur(40px)",
          opacity: 0.6,
          transition: "top 0.2s ease-out, left 0.2s ease-out",
          width: "240px",
          height: "240px",
        }}
      >
        <svg viewBox="0 0 100 100" width="240" height="240">
          <circle cx="50" cy="50" r="45" fill="#AE2D00" />
        </svg>
      </div>
    </>
  );
}
