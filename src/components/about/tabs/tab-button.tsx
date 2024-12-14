"use client";

import { ReactNode, useRef } from "react";

export function TabButton({
  onClick,
  children,
}: {
  onClick: (width: number) => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => {
        if (!ref.current) return;
        onClick(ref.current.offsetWidth / 2);
      }}
    >
      {children}
    </button>
  );
}
