import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 150 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RTG Navigator Logo"
      fill="none"
      height="24"
      width="auto"
    >
      <text
        fontFamily="sans-serif"
        fontSize="32"
        fontWeight="bold"
        y="30"
        fill="currentColor"
        className="text-foreground"
      >
        R
      </text>
      <text
        fontFamily="sans-serif"
        fontSize="32"
        fontWeight="bold"
        x="25"
        y="30"
        className="text-red-600"
        fill="currentColor"
      >
        TG
      </text>
      <path
        d="M15 35 L50 8 L140 8"
        stroke="black"
        strokeWidth="3"
        fill="none"
        className="stroke-current text-foreground"
      />
    </svg>
  );
}
