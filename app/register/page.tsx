import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthLayout } from "@/components/forms/AuthLayout";
import { AuthCard } from "@/components/forms/AuthCard";
import { FormFallback } from "@/components/forms/FormFallback";

export const metadata = {
  title: "Join the Studio · CODE 2 CHILL",
  description: "Register to join CODE 2 CHILL as a builder, mentor, or collaborator.",
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AuthLayout
          eyebrow="JOIN CODE 2 CHILL"
          title="Pull up a chair."
          lede="Join an engineering collective that values finished software, constructive code reviews, and getting a full night's sleep."
          points={[
            "Beginner setup lanes on Friday build nights with paired mentors",
            "Immediate contribution access to active open-source studio projects",
            "No 48-hour sprints or burnout theater—lights out at 10:00 PM",
          ]}
        >
          <Suspense fallback={<FormFallback />}>
            <AuthCard mode="register" />
          </Suspense>
        </AuthLayout>
      </main>
      <Footer />
    </>
  );
}

