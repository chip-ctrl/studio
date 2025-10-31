import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RTG Resto Tech Group Logo"
      fill="none"
      height="24"
      width="auto"
    >
      <text
        fontFamily="Montserrat, sans-serif"
        fontSize="34"
        fontWeight="bold"
        y="30"
        fill="currentColor"
        className="text-foreground"
      >
        R
      </text>
      <text
        fontFamily="Montserrat, sans-serif"
        fontSize="34"
        fontWeight="bold"
        x="24"
        y="30"
        fill="hsl(var(--primary))"
      >
        T
      </text>
      <text
        fontFamily="Montserrat, sans-serif"
        fontSize="34"
        fontWeight="bold"
        x="45"
        y="30"
        fill="hsl(var(--primary))"
      >
        G
      </text>
      <path
        d="M 12 35 L 35 15 L 100 15"
        stroke="currentColor"
        className="text-foreground"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
