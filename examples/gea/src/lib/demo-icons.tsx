import { JSX } from "react";

type IconProps = { className?: string };

function Svg({
  className,
  children,
}: IconProps & { children: JSX.Element }): JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconUser({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <>
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </>
    </Svg>
  );
}

export function IconX({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    </Svg>
  );
}

export function IconEye({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    </Svg>
  );
}

export function IconRefresh({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <>
        <path d="M21 12a9 9 0 1 1-2.6-6.3" />
        <path d="M21 3v6h-6" />
      </>
    </Svg>
  );
}

export function IconChevronDown({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function IconChevronUp({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <path d="m18 15-6-6-6 6" />
    </Svg>
  );
}

export function IconTarget({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </>
    </Svg>
  );
}

export function IconMegaphone({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <>
        <path d="m3 11 14-5v12L3 13v-2Z" />
        <path d="M7 13.5v3a2 2 0 0 0 2 2h1" />
      </>
    </Svg>
  );
}

export function IconMessage({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z" />
    </Svg>
  );
}

export function IconSend({ className }: IconProps): JSX.Element {
  return (
    <Svg className={className}>
      <path d="m22 2-7 20-4-9-9-4Z" />
    </Svg>
  );
}
