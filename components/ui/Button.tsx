import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const styles = {
  primary:
    "bg-gradient-to-r from-cyan-200 via-sky-200 to-violet-300 text-ink shadow-[0_12px_40px_-16px_rgba(125,211,252,0.9)] hover:brightness-110",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:border-cyan-200/40 hover:bg-white/[0.08]",
  ghost: "text-cyan-100 hover:bg-white/[0.06] hover:text-white",
} as const;

type Variant = keyof typeof styles;

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkProps = Common & {
  href: string;
  external?: boolean;
};

type ButtonProps = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

function classes(variant: Variant, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B14] disabled:cursor-not-allowed disabled:opacity-50",
    styles[variant],
    className,
  );
}

function isLinkProps(props: LinkProps | ButtonProps): props is LinkProps {
  return "href" in props && typeof props.href === "string" && props.href.length > 0;
}

export function Button(props: LinkProps | ButtonProps) {
  const variant = props.variant ?? "primary";
  const className = classes(variant, props.className);

  if (isLinkProps(props)) {
    const external =
      props.external ||
      props.href.startsWith("http") ||
      props.href.startsWith("mailto:");

    if (external) {
      return (
        <a
          href={props.href}
          className={className}
          target={props.href.startsWith("http") ? "_blank" : undefined}
          rel={props.href.startsWith("http") ? "noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled, children } = props;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
