"use client";

import { useTransition } from "react";
import { updateApplicationStatus } from "@/app/actions/recruiter/updateApplicationStatus";
import { ApplicationStatus } from "@/generated/prisma/enums";

interface Props {
  applicationId: string;
  currentStatus: ApplicationStatus;
}

export default function ApplicationStatusForm({
  applicationId,
  currentStatus,
}: Props) {
  const [pending, startTransition] = useTransition();

  return (
    <div>
    <select
      defaultValue={currentStatus}
      disabled={pending}
      className="border rounded-md p-2"
      onChange={(e) => {
        startTransition(async () => {
          await updateApplicationStatus(
            applicationId,
            e.target.value as ApplicationStatus
          );
        });
      }}
    >
      {Object.values(ApplicationStatus).map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
    </div>
  );
}