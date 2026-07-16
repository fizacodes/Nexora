"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { markNotificationsAsRead } from "@/app/actions/candidate/markNotificationsAsRead";

export default function MarkNotificationsRead() {
  const router = useRouter();

  useEffect(() => {
    async function mark() {
      await markNotificationsAsRead();
      router.refresh();
    }

    mark();
  }, [router]);

  return null;
}