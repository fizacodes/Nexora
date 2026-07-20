"use client";

import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const inputRef =
    useRef<HTMLInputElement>(null);

  const [state, formAction, pending] =
    useActionState(sendMessage, initialState);

  useEffect(() => {
    if (state.success) {
      inputRef.current!.value = "";
      router.refresh();
      inputRef.current?.focus();
    }
  }, [state.success, router]);

  return (
   <form action={formAction} className="flex items-center gap-3">
  <input
    type="hidden"
    name="conversationId"
    value={conversationId}
  />

  <input
    ref={inputRef}
    type="text"
    name="content"
    placeholder="Type your message..."
    className="flex-1 rounded-full border text-black border-gray-300 bg-gray-50 px-5 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
  />

  <button
    type="submit"
    disabled={pending}
    className="rounded-full bg-accent px-6 py-3 font-medium text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {pending ? "Sending..." : "Send"}
  </button>
</form>
  );
}