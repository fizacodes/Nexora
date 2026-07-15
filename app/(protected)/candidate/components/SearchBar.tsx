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

    if (query.trim()) {
      params.set("query", query);
    }

    if (location.trim()) {
      params.set("location", location);
    }

    router.push(`/candidate?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 max-w-[400px] bg-white rounded-lg shadow-sm">

      <input
        type="text"
        placeholder="Job title, keywords"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-3 py-2 outline-none text-sm"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 px-3 py-2 outline-none text-sm border-l"
      />

      <button
        onClick={handleSearch}
        className="bg-accent text-background px-5 py-2 rounded-md text-sm font-medium hover:opacity-90"
      >
        Search
      </button>

    </div>
  );
}