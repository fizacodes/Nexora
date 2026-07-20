// components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center mx-4 bg-accent  text-background gap-2 rounded-lg  px-3 py-2 hover:bg-gray-100"
    >
      <ArrowLeft className="h-5 w-5" />
      Back
    </button>
  );
}