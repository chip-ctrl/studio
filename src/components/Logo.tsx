import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 150 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RTG Resto Tech Group Logo"
      fill="none"
      height="24"
      width="auto"
    >
      <text
        fontFamily="Montserrat, sans-serif"
        fontSize="36"
        fontWeight="bold"
        y="30"
        fill="currentColor"
        className="text-foreground"
      >
        R
      </text>
      <text
        fontFamily="Montserrat, sans-serif"
        fontSize="36"
        fontWeight="bold"
        x="25"
        y="30"
        fill="hsl(var(--primary))"
      >
        TG
      </text>
      <path
        d="M15 35 L75 1 L140 35"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        transform="translate(-5, -3)"
      >
        <animate attributeName="d" from="M15 35 L40 15 L140 15" to="M15 35 L75 1 L140 35" dur="0.5s" fill="freeze" />
      </path>
    </svg>
  );
}
