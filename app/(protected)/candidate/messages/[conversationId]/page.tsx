import { getConversation } from "@/app/actions/message/getConversation";
import { getCurrentCandidate } from "@/lib/auth/getCurrentCandidate";
import MessageForm from "./MessageForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{
    conversationId: string;
  }>;
}

export default async function MessagePage({
  params,
}: Props) {
  const { conversationId } = await params;

  const conversation = await getConversation(conversationId);
  const candidate = await getCurrentCandidate();

  const currentUserId = candidate.userId;

  return (
    <div className="flex h-screen flex-col bg-gray-100">

     <header className="border-b bg-white shadow-sm">
  <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-4">

    <Link
      href="/candidate/messages"
      className="rounded-full p-2 hover:bg-gray-100 transition"
    >
      <ArrowLeft className="h-5 w-5 text-gray-700" />
    </Link>

    <div>
      <h1 className="text-lg font-semibold text-black">
        {conversation.candidate.user.name}
      </h1>

      <p className="text-sm text-gray-500">
        {conversation.job.title}
      </p>
    </div>

  </div>
</header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6">
          {conversation.messages.length === 0 ? (
            <div className="flex h-full flex-1 items-center justify-center text-gray-400">
              <div className="text-center">
                <p className="text-5xl">💬</p>
                <p className="mt-4 text-lg">
                  Start the conversation
                </p>
              </div>
            </div>
          ) : (
            conversation.messages.map((message) => {
              const isMine =
                message.senderId === currentUserId;

              return (
                <div
                  key={message.id}
                  className={`flex ${
                    isMine
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-md rounded-2xl px-4 py-3 shadow ${
                      isMine
                        ? "rounded-br-sm bg-accent text-background"
                        : "rounded-bl-sm bg-white text-black"
                    }`}
                  >
                    <p>{message.content}</p>

                    <p
                      className={`mt-2 text-right text-xs ${
                        isMine
                          ? "text-background/70"
                          : "text-gray-400"
                      }`}
                    >
                      {new Date(
                        message.createdAt
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      {/* Input */}
      <footer className="border-t bg-white shadow-md">
        <div className="mx-auto max-w-5xl p-4">
          <MessageForm conversationId={conversation.id} />
        </div>
      </footer>

    </div>
  );
}