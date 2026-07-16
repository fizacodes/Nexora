"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { getOrCreateConversation } from "@/app/actions/message/getOrCreateConversation";

interface Props {
  jobId: string;
  candidateProfileId: string;
}

export default function MessageCandidateButton({
  jobId,
  candidateProfileId,
}: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      try {
        const conversation = await getOrCreateConversation(
          jobId,
          candidateProfileId
        );

        router.push(`/recruiter/messages/${conversation.id}`);
      } catch (error) {
        console.error(error);
        alert("Failed to start conversation.");
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      className="bg-accent hover:opacity-90 disabled:opacity-50 text-white font-medium px-5 py-2 rounded-lg transition"
    >
      {pending ? "Opening..." : "Message Candidate"}
    </button>
  );
}