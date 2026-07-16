"use client";

import { useTransition } from "react";
import { markNotificationsAsRead } from "@/app/actions/candidate/markNotificationsAsRead";

type NotificationPageClientProps = {
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
  }>;
};

export default function NotificationPageClient({ notifications }: NotificationPageClientProps) {
  const [isPending, startTransition] = useTransition();

  const handleMarkAsRead = () => {
    startTransition(async () => {
      await markNotificationsAsRead();
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <button
            onClick={handleMarkAsRead}
            disabled={isPending}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
          >
            {isPending ? "Updating..." : "Mark all as read"}
          </button>
        </div>

        {notifications.length === 0 ? (
          <p>No notifications yet.</p>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`border rounded-lg p-5 ${
                  notification.isRead ? "bg-white" : "bg-green-50"
                }`}
              >
                <h2 className="font-semibold text-lg">{notification.title}</h2>
                <p className="mt-2">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-3">
                  {notification.createdAt.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
