import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            {site.tagline} A technology studio for people who want the work to be
            good and the night to end.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            {site.studio}
            <br />
            {site.hours}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Community
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.slice(4).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/login" className="text-sm text-slate-300 hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="text-sm text-slate-300 hover:text-white">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Studio notes
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Session notes and the next build night. No weekly drip of recycled advice.
          </p>
          <NewsletterForm />
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex text-sm text-cyan-100 hover:text-white"
          >
            {site.email}
          </a>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CODE 2 CHILL. All rights reserved.</p>
          <Link href="/community#conduct" className="hover:text-slate-300">
            Community conduct
          </Link>
        </Container>
      </div>
    </footer>
  );
}
