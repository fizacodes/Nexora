"use client";

import { useTransition } from "react";
import { logout } from "@/app/actions/logout";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          await logout();
        })
      }
      disabled={isPending}
      className="rounded-md bg-accent px-4 py-2 text-background hover:bg-green-200 disabled:opacity-50"
    >
      {isPending ? "Logging out..." : "Logout"}
    </button>
  );
}