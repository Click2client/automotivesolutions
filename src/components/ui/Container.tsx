import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-[clamp(20px,5vw,72px)] ${className}`}>
      {children}
    </div>
  );
}
