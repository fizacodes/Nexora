import { getUnreadMessageCount } from "@/app/actions/message/getUnreadMessageCount";
import NavbarClient from "./NavbarClient";
import { getUnreadNotificationCount } from "@/app/actions/candidate/getUnreadNotificationCount";

export default async function CandidateNavbar() {
  const unreadCount = await getUnreadNotificationCount();
  const unreadMessages = await getUnreadMessageCount();

  return <NavbarClient unreadCount={unreadCount}  unreadMessages={unreadMessages}/>;
}