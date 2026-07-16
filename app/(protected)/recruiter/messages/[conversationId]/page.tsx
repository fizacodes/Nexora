import { getConversation } from "@/app/actions/message/getConversation";
import MessageForm from "./MessageForm";

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

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow">

        {/* Header */}
        <div className="border-b p-6">
          <h1 className="text-2xl font-bold">
            {conversation.candidate.user.name}
          </h1>

          <p className="text-gray-500">
            {conversation.job.title}
          </p>
        </div>

        {/* Messages */}
        <div className="p-6 space-y-4 min-h-[500px]">
          {conversation.messages.length === 0 ? (
            <p className="text-gray-500">No messages yet.</p>
          ) : (
            conversation.messages.map((message) => (
              <div
                key={message.id}
                className="border rounded-lg p-3"
              >
                <strong>{message.sender.name}</strong>

                <p className="mt-1">{message.content}</p>
              </div>
            ))
          )}
        </div>

        {/* Message Form */}
        <div className="border-t p-6">
          <MessageForm
            conversationId={conversation.id}
          />
        </div>

      </div>
    </div>
  );
}