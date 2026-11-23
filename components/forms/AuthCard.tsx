"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { memberships } from "@/data/site";

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-[#080B14]/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/50 focus:ring-2 focus:ring-cyan-200/20";

type Mode = "login" | "register";

export function AuthCard({ mode }: { mode: Mode }) {
  const params = useSearchParams();
  const requestedRole = params.get("role");
  const startingRole = memberships.some((item) => item.role === requestedRole)
    ? requestedRole!
    : "builder";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(startingRole);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (mode === "register" && name.trim().length < 2) {
      nextErrors.name = "Add the name people should use in the studio.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      nextErrors.password = "Use at least 8 characters, with a letter and a number.";
    }
    if (mode === "register" && confirm !== password) {
      nextErrors.confirm = "Those passwords do not match.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setReady(true);
  }

  if (ready) {
    return (
      <GlassCard>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
          Form checked
        </p>
        <h2 className="mt-3 font-display text-3xl text-white">
          {mode === "register" ? `Welcome in, ${name.trim()}.` : "You can come through."}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Authentication is not connected yet, so this did not create a server account or store
          your password. The form is valid. The community pages are open while that work waits.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/community">Enter the community</Button>
          <Button href="/" variant="secondary">
            Back home
          </Button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {mode === "register" ? (
          <div>
            <label htmlFor="auth-name" className="mb-2 block text-sm text-slate-200">
              Name
            </label>
            <input
              id="auth-name"
              value={name}
              onChange={(input) => setName(input.target.value)}
              className={fieldClass}
              autoComplete="name"
            />
            {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
          </div>
        ) : null}
        <div>
          <label htmlFor="auth-email" className="mb-2 block text-sm text-slate-200">
            Email
          </label>
          <input
            id="auth-email"
            type="email"
            value={email}
            onChange={(input) => setEmail(input.target.value)}
            className={fieldClass}
            autoComplete="email"
          />
          {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email}</p> : null}
        </div>
        {mode === "register" ? (
          <div>
            <label htmlFor="auth-role" className="mb-2 block text-sm text-slate-200">
              How you want to show up
            </label>
            <select
              id="auth-role"
              value={role}
              onChange={(input) => setRole(input.target.value)}
              className={fieldClass}
            >
              {memberships.map((item) => (
                <option key={item.role} value={item.role} className="bg-[#0c1222]">
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div>
          <label htmlFor="auth-password" className="mb-2 block text-sm text-slate-200">
            Password
          </label>
          <div className="relative">
            <input
              id="auth-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(input) => setPassword(input.target.value)}
              className={`${fieldClass} pr-12`}
              autoComplete={mode === "register" ? "new-password" : "current-password"}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((value) => !value)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password ? (
            <p className="mt-2 text-sm text-rose-300">{errors.password}</p>
          ) : null}
        </div>
        {mode === "register" ? (
          <div>
            <label htmlFor="auth-confirm" className="mb-2 block text-sm text-slate-200">
              Confirm password
            </label>
            <input
              id="auth-confirm"
              type={showPassword ? "text" : "password"}
              value={confirm}
              onChange={(input) => setConfirm(input.target.value)}
              className={fieldClass}
              autoComplete="new-password"
            />
            {errors.confirm ? (
              <p className="mt-2 text-sm text-rose-300">{errors.confirm}</p>
            ) : null}
          </div>
        ) : null}
        <Button type="submit" className="w-full">
          {mode === "register" ? "Create my preview profile" : "Continue"}
        </Button>
        <p className="text-sm text-slate-400">
          {mode === "register" ? (
            <>
              Already have a seat?{" "}
              <Link href="/login" className="font-semibold text-cyan-100 hover:text-white">
                Login
              </Link>
            </>
          ) : (
            <>
              New here?{" "}
              <Link href="/register" className="font-semibold text-cyan-100 hover:text-white">
                Register
              </Link>
            </>
          )}
        </p>
      </form>
    </GlassCard>
  );
}
