import MarkNotificationsRead from "./MarkNotificationRead";
import NotificationPageClient from "./NotificationPageClient";
import { getNotifications } from "@/app/actions/candidate/getNotification";

export default async function NotificationPage() {
  const notifications = await getNotifications();

  return (
    <>
      <MarkNotificationsRead />
      <NotificationPageClient notifications={notifications} />
    </>
  );
}