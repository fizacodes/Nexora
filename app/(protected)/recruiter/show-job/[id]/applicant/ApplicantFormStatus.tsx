"use client";

import { useTransition } from "react";
import { updateApplicationStatus } from "@/app/actions/recruiter/updateApplicationStatus";

const APPLICATION_STATUSES = [
  "APPLIED",
  "REVIEWING",
  "SHORTLISTED",
  "INTERVIEW",
  "OFFERED",
  "HIRED",
  "REJECTED",
  "WITHDRAWN",
] as const;

type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];

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
        className="rounded-md border p-2"
        onChange={(e) => {
          startTransition(async () => {
            await updateApplicationStatus(
              applicationId,
              e.target.value as ApplicationStatus
            );
          });
        }}
      >
        {APPLICATION_STATUSES.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}