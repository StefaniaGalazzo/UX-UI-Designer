import React from "react";

export default function CircularText({ className }) {
  return (
    <svg
      viewBox="0 0 103 103"
      xmlns="http://www.w3.org/2000/svg"
      fill="#4739de"
      className={className}
    >
      <path
        fill="transparent"
        id="circlePath"
        d="   M 13, 51   a 40,40 0 1,1 80,0   40,40 0 1,1 -80,0   
    "
      />
      <text>
        <textPath href="#circlePath">Stefania Galazzo</textPath>
      </text>
    </svg>
  );
}
