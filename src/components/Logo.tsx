import React from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-auto", className)}
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RTG Resto Tech Group Logo"
      fill="none"
    >
      <text
        x="0"
        y="30"
        fontFamily="Montserrat, sans-serif"
        fontSize="34"
        fontWeight="bold"
        fill="currentColor"
        className="text-foreground"
      >
        R
      </text>
      <text
        x="24"
        y="30"
        fontFamily="Montserrat, sans-serif"
        fontSize="34"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        T
      </text>
      <text
        x="45"
        y="30"
        fontFamily="Montserrat, sans-serif"
        fontSize="34"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        G
      </text>
      <path
        d="M 12 35 L 35 15 L 100 15"
        stroke="currentColor"
        className="text-foreground"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
