"use client";

import { useState } from "react";

export default function JobDescription({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const [description, setDescription] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
    onChange(e.target.value);
  }

  return (
    <textarea
      value={description}
      onChange={handleChange}
      rows={12}
      placeholder="Describe the role, responsibilities, qualifications, benefits, and any other important details..."
      className="w-full rounded-xl border border-gray-300 p-4 text-base outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
    />
  );
}