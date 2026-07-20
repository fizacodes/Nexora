"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { messageSchema } from "@/lib/validators/MessageSchema";
import { revalidatePath } from "next/cache";

export async function sendMessage(
  prevState: any,
  formData: FormData
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const parsed = messageSchema.safeParse({
    conversationId: formData.get("conversationId"),
    content: formData.get("content"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { conversationId, content } = parsed.data;

  const conversation = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
    include: {
      recruiter: true,
      candidate: true,
    },
  });

  if (!conversation) {
    throw new Error("Conversation not found.");
  }

  // Check whether the current user belongs to this conversation
  const isRecruiter =
    conversation.recruiter.userId === session.user.id;

  const isCandidate =
    conversation.candidate.userId === session.user.id;

  if (!isRecruiter && !isCandidate) {
    throw new Error("Unauthorized");
  }

  // Create message
  await prisma.message.create({
    data: {
      conversationId,
      senderId: session.user.id,
      content,
    },
  });

  // Notify the other participant
  await prisma.notification.create({
    data: {
      userId: isRecruiter
        ? conversation.candidate.userId
        : conversation.recruiter.userId,

      title: "New Message",

      message: content,

      type: "MESSAGE",
    },
  });

  // Refresh both possible pages
  revalidatePath(`/recruiter/messages/${conversationId}`);
  revalidatePath(`/candidate/messages/${conversationId}`);

  return {
    success: true,
    errors: {},
  };
}