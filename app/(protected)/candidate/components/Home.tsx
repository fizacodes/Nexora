"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export default function CandidateHomePage({ jobs = [] }: any) {
  const [selectedJob, setSelectedJob] = useState(jobs[0] || null);

  return (
  <div className="h-screen flex flex-col bg-gray-200">


<div className="p-4 border-b bg-background items-center  flex flex-col gap-3">

  {/* Title row */}
  <div className="flex items-center justify-between">
    <h2 className="text-3xl text-center font-bold text-accent">
      Latest Jobs
    </h2>
  </div>
     <p>See the latest job here</p>
  {/* Search bar */}
  <div className="flex gap-2 max-w-[400px] bg-white text-gray-600  rounded-lg shadow-sm">

    {/* Job title input */}
    <input
      type="text"
      placeholder="Job title, keywords"
      className="flex-1 px-3   outline-none text-sm"
    />

    {/* Location input */}
    <input
      type="text"
      placeholder="Location"
      className="flex-1 px-3  outline-none text-sm border-l"
    />

    {/* Search button */}
    <button className="bg-accent text-background px-5 py-2 rounded-md text-sm font-medium hover:opacity-90">
      Search
    </button>

  </div>

</div>
        <div className="flex flex-1 overflow-hidden pt-6 px-4 gap-4">
      {/* LEFT SIDE - JOB LIST */}
    <div className="w-[40%] bg-white rounded-xl overflow-y-auto">

        

        {jobs.length === 0 ? (
          <div className="p-4 text-gray-600">No jobs available.</div>
        ) : (
          jobs.map((job: any) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition ${
                selectedJob?.id === job.id ? "bg-gray-100" : ""
              }`}
            >
              <h3 className="font-semibold text-background">
                {job.title}
              </h3>

              <p className="text-sm text-gray-600">{job.company}</p>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <MapPin size={12} />
                {job.location}
              </div>

              <span className="text-xs bg-accent text-background px-2 py-1 rounded mt-2 inline-block">
                {job.type}
              </span>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE - JOB DETAILS */}
     <div className="flex-1 p-8 overflow-y-auto">

        {!selectedJob ? (
          <p className="text-gray-600">Select a job to view details</p>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-sm">

            <h1 className="text-2xl font-bold text-background">
              {selectedJob.title}
            </h1>

            <p className="text-gray-600 mt-1">
              {selectedJob.company}
            </p>

            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <MapPin size={16} />
              {selectedJob.location}
            </div>

            <span className="inline-block mt-3 text-xs bg-accent text-background px-3 py-1 rounded">
              {selectedJob.type}
            </span>

            <hr className="my-5" />

            <h2 className="font-semibold text-lg mb-2 text-background">
              Job Description
            </h2>

            <div className="text-gray-700 leading-7 whitespace-pre-wrap">
  {selectedJob.description}
</div>

            <button className="mt-6 bg-accent text-background px-6 py-2 rounded hover:opacity-90">
              Apply Now
            </button>

          </div>
        )}
   </div>
      </div>
    </div>
  );
}