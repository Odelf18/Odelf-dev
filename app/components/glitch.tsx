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
          will-change: transform;
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

        /* Respect users who prefer reduced motion. */
        @media (prefers-reduced-motion: reduce) {
          .glitch-wrapper {
            animation: none !important;
          }
        }

        @keyframes glitch-anim-slow {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch-anim-medium {
          0%,
          100% {
            transform: translate(0);
          }
          10% {
            transform: translate(-1px, 1px);
          }
          20% {
            transform: translate(1px, -1px);
          }
          30% {
            transform: translate(-1px, -1px);
          }
          40% {
            transform: translate(1px, 1px);
          }
          50% {
            transform: translate(0);
          }
        }

        @keyframes glitch-anim-fast {
          0%,
          100% {
            transform: translate(0);
          }
          5% {
            transform: translate(-1px, 1px);
          }
          10% {
            transform: translate(1px, -1px);
          }
          15% {
            transform: translate(-1px, -1px);
          }
          20% {
            transform: translate(1px, 1px);
          }
          25% {
            transform: translate(0);
          }
        }
      `}</style>
    </>
  );
};
