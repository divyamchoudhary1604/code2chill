"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080b14]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActiveRoute(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-[13px] font-medium text-slate-300 transition hover:bg-white/6 hover:text-white",
                  active && "bg-white/7 text-cyan-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/login" variant="ghost">
            Login
          </Button>
          <Button href="/register">Join</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white transition hover:bg-white/6 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[#080b14]/95 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = isActiveRoute(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5",
                    active && "bg-white/6 text-cyan-100",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-3 grid grid-cols-2 gap-3" onClick={closeMenu}>
              <Button href="/login" variant="secondary">
                Login
              </Button>
              <Button href="/register">Join</Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}