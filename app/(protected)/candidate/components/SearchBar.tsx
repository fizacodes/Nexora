"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(
    searchParams.get("query") ?? ""
  );

  const [location, setLocation] = useState(
    searchParams.get("location") ?? ""
  );

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (query.trim()) params.set("query", query);
    if (location.trim()) params.set("location", location);

    router.push(`/candidate?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap sm:flex-nowrap items-center bg-white rounded-xl shadow-lg border border-gray-200 p-2 gap-2">
        {/* Job Input */}
        <input
          type="text"
          placeholder="Job title, keywords"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
        />

        <div className="hidden sm:block w-px self-stretch bg-gray-200" />

        {/* Location Input */}
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
        />

        {/* Button */}
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-background transition hover:opacity-90 active:scale-95"
        >
          Search
        </button>
      </div>
    </div>
  );
}