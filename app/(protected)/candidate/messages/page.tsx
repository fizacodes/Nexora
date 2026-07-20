import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCandidateConversations } from "@/app/actions/message/getCandidateConversation";

export default async function CandidateMessagesPage() {
  const conversations =
    await getCandidateConversations();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow">

        {/* Header */}
<div className="border-b px-6 py-5 flex items-center gap-4">

  <Link
    href="/candidate"
    className="rounded-full p-2 hover:bg-gray-100 transition"
  >
    <ArrowLeft className="h-5 w-5 text-gray-700" />
  </Link>

  <div>
    <h1 className="text-2xl font-bold text-black">
      Messages
    </h1>

    <p className="mt-1 text-gray-500">
      View and continue your conversations.
    </p>
  </div>

</div>

        {/* Conversation List */}
        <div>

          {conversations.length === 0 ? (
            <div className="py-20 text-center">

              <div className="text-6xl">
                💬
              </div>

              <h2 className="mt-4 text-xl font-semibold text-black">
                No conversations yet
              </h2>

              <p className="text-gray-500 mt-2">
                Conversations with recruiters will appear here.
              </p>

            </div>
          ) : (
            conversations.map((conversation) => (
              <Link
                key={conversation.id}
                href={`/candidate/messages/${conversation.id}`}
              >
                <div className="border-b hover:bg-gray-50 transition p-6 cursor-pointer">

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="font-semibold text-lg text-black">
                        {conversation.recruiter.user.name}
                      </h2>

                      <p className="text-gray-500 text-sm">
                        {conversation.job.title}
                      </p>

                    </div>

                  </div>

                  <p className="mt-3 text-gray-600 line-clamp-1">

                    {conversation.messages[0]?.content ??
                      "No messages yet"}

                  </p>

                </div>
              </Link>
            ))
          )}

        </div>

      </div>
    </div>
  );
}