"use client";

import React from "react";

interface GlitchFxProps {
  children: React.ReactNode;
  fillWidth?: boolean;
  speed?: "slow" | "medium" | "fast";
}

export const GlitchFx: React.FC<GlitchFxProps> = ({
  children,
  fillWidth = false,
  speed = "medium",
}) => {
  const speedClass = {
    slow: "glitch-slow",
    medium: "glitch-medium",
    fast: "glitch-fast",
  }[speed];

  return (
    <>
      <div className={`glitch-wrapper ${speedClass} ${fillWidth ? "w-full" : ""}`}>
        {children}
      </div>
      <style jsx global>{`
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }

        .glitch-wrapper.glitch-slow {
          animation: glitch-anim-slow 4s infinite;
        }

        .glitch-wrapper.glitch-medium {
          animation: glitch-anim-medium 3s infinite;
        }

        .glitch-wrapper.glitch-fast {
          animation: glitch-anim-fast 2s infinite;
        }

        @keyframes glitch-anim-slow {
          0%,
          100% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          20% {
            transform: translate(-2px, 2px);
            filter: hue-rotate(90deg);
          }
          40% {
            transform: translate(-2px, -2px);
            filter: hue-rotate(180deg);
          }
          60% {
            transform: translate(2px, 2px);
            filter: hue-rotate(270deg);
          }
          80% {
            transform: translate(2px, -2px);
            filter: hue-rotate(360deg);
          }
        }

        @keyframes glitch-anim-medium {
          0%,
          100% {
            transform: translate(0);
            filter: hue-rotate(0deg) brightness(1);
          }
          10% {
            transform: translate(-1px, 1px);
            filter: hue-rotate(90deg) brightness(1.1);
          }
          20% {
            transform: translate(1px, -1px);
            filter: hue-rotate(180deg) brightness(0.9);
          }
          30% {
            transform: translate(-1px, -1px);
            filter: hue-rotate(270deg) brightness(1.05);
          }
          40% {
            transform: translate(1px, 1px);
            filter: hue-rotate(360deg) brightness(0.95);
          }
          50% {
            transform: translate(0);
            filter: hue-rotate(0deg) brightness(1);
          }
        }

        @keyframes glitch-anim-fast {
          0%,
          100% {
            transform: translate(0);
            filter: hue-rotate(0deg) brightness(1);
          }
          5% {
            transform: translate(-1px, 1px);
            filter: hue-rotate(90deg) brightness(1.1);
          }
          10% {
            transform: translate(1px, -1px);
            filter: hue-rotate(180deg) brightness(0.9);
          }
          15% {
            transform: translate(-1px, -1px);
            filter: hue-rotate(270deg) brightness(1.05);
          }
          20% {
            transform: translate(1px, 1px);
            filter: hue-rotate(360deg) brightness(0.95);
          }
          25% {
            transform: translate(0);
            filter: hue-rotate(0deg) brightness(1);
          }
        }
      `}</style>
    </>
  );
};
