import NavbarClient from "./NavbarClient";
import { getUnreadNotificationCount } from "@/app/actions/candidate/getUnreadNotificationCount";

export default async function CandidateNavbar() {
  const unreadCount = await getUnreadNotificationCount();

  return <NavbarClient unreadCount={unreadCount} />;
}