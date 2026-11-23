import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-200 to-violet-400 font-display text-sm font-bold text-ink shadow-[0_10px_30px_-12px_rgba(125,211,252,0.95)]">
        C2
      </span>
      <span className="font-display text-[13px] font-semibold tracking-[0.14em] text-white sm:text-sm">
        CODE 2 CHILL
      </span>
    </Link>
  );
}
