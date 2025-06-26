import React from "react";

export function CloudDivider({ height = 100 }) {
  return (
    <svg
      viewBox="0 0 1200 50"
      preserveAspectRatio="none"
      style={{
        display: "block",
        width: "100%",
        height: `${height}px`,
        pointerEvents: "none",
      }}
    >
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b3531" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path
        d="M0,30 C150,0 350,60 600,30 C850,0 1050,60 1200,30 L1200,0 L0,0 Z"
        fill="url(#cloudGradient)"
      />
    </svg>
  );
}
