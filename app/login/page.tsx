import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthLayout } from "@/components/forms/AuthLayout";
import { AuthCard } from "@/components/forms/AuthCard";
import { FormFallback } from "@/components/forms/FormFallback";

export const metadata = {
  title: "Login · CODE 2 CHILL",
  description: "Sign in to access your CODE 2 CHILL project boards and reserved seats.",
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AuthLayout
          eyebrow="STUDIO ACCESS"
          title="Welcome back to the room."
          lede="Check in for Friday build nights, claim project issues, and review your seat reservations."
          points={[
            "Track your seat reservations across workshops and build nights",
            "Pick up assigned issues on Harbor, Lumen Notes, and Northwind",
            "Access the study circle reading archive and critique notes",
          ]}
        >
          <Suspense fallback={<FormFallback />}>
            <AuthCard mode="login" />
          </Suspense>
        </AuthLayout>
      </main>
      <Footer />
    </>
  );
}

