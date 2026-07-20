"use client";

import { useTransition } from "react";
import { markNotificationsAsRead } from "@/app/actions/candidate/markNotificationsAsRead";
import BackButton from "../components/BackButton";

type NotificationPageClientProps = {
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
  }>;
};

export default function NotificationPageClient({
  notifications,
}: NotificationPageClientProps) {
  const [isPending, startTransition] = useTransition();

  const handleMarkAsRead = () => {
    startTransition(async () => {
      await markNotificationsAsRead();
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 text-black sm:py-8">
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="rounded-xl bg-white p-5 shadow sm:p-8">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Back Button */}
            <div className="self-start">
              <BackButton />
            </div>

            {/* Heading */}
            <h1 className="text-center text-2xl font-bold sm:text-xl">
              Notifications
            </h1>

            {/* Button */}
            <button
              onClick={handleMarkAsRead}
              disabled={isPending}
              className=" rounded-lg bg-accent px-2 py-3 text-sm font-semibold text-background transition hover:bg-green-300 disabled:opacity-60 sm:w-auto"
            >
              {isPending ? "Updating..." : "Mark all as read"}
            </button>
          </div>

          {/* Notifications */}
          {notifications.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 py-8 text-center">
              <p className="text-gray-500">No notifications yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`rounded-xl border p-3 transition sm:p-2 ${
                    notification.isRead
                      ? "bg-white"
                      : "border-green-200 bg-green-50"
                  }`}
                >
                  <h2 className="text-lg font-semibold">
                    {notification.title}
                  </h2>

                  <p className="mt-1 text-sm leading-7 text-gray-700 sm:text-base">
                    {notification.message}
                  </p>

                  <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                    {notification.createdAt.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}