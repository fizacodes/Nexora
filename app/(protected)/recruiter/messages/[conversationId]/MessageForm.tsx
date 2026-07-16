"use client";

import { useActionState } from "react";
import { sendMessage } from "@/app/actions/message/message";

interface Props {
  conversationId: string;
}

const initialState = {
  success: false,
  errors: {},
};

export default function MessageForm({
  conversationId,
}: Props) {
  const [state, formAction, pending] = useActionState(
    sendMessage,
    initialState
  );

  return (
    <form
      action={formAction}
      className="flex gap-3 mt-6"
    >
      <input
        type="hidden"
        name="conversationId"
        value={conversationId}
      />

      <input
        type="text"
        name="content"
        placeholder="Type your message..."
        className="flex-1 border rounded-lg px-4 py-3"
      />

      <button
        disabled={pending}
        className="bg-accent text-white px-6 rounded-lg"
      >
        {pending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}