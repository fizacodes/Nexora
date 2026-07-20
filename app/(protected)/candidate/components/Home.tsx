// "use client";

// import { useState } from "react";
// import { MapPin } from "lucide-react";
// import Link from "next/link";
// import SearchBar from "./SearchBar";

// export default function CandidateHomePage({ jobs = [] }: any) {
//   const [selectedJob, setSelectedJob] = useState(jobs[0] || null);



//   return (
//   <div className="h-screen flex flex-col bg-gray-200">


// <div className="p-4 border-b bg-background items-center  flex flex-col gap-3">

//   {/* Title row */}
//   <div className="flex items-center justify-between">
//     <h2 className="text-3xl text-center font-bold text-accent">
//       Latest Jobs
//     </h2>
//   </div>
//      <p>See the latest job here</p>
//   {/* Search bar */}
//   <div className="flex gap-2 max-w-[400px] bg-white text-gray-600  rounded-lg shadow-sm">

//     {/* Job title input */}
//   <SearchBar/>

//   </div>

// </div>
//         <div className="flex flex-1 overflow-hidden pt-6 px-4 gap-4">
//       {/* LEFT SIDE - JOB LIST */}
//     <div className="w-[40%] bg-white rounded-xl overflow-y-auto">

        

//         {jobs.length === 0 ? (
//           <div className="p-4 text-gray-600">No jobs available.</div>
//         ) : (
//           jobs.map((job: any) => (
//             <div
//               key={job.id}
//               onClick={() => setSelectedJob(job)}
//               className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition ${
//                 selectedJob?.id === job.id ? "bg-gray-100" : ""
//               }`}
//             >
//               <h3 className="font-semibold text-background">
//                 {job.title}
//               </h3>

//               <p className="text-sm text-gray-600">{job.company}</p>

//               <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
//                 <MapPin size={12} />
//                 {job.location}
//               </div>

//               <span className="text-xs bg-accent text-background px-2 py-1 rounded mt-2 inline-block">
//                 {job.type}
//               </span>
//             </div>
//           ))
//         )}
//       </div>

//       {/* RIGHT SIDE - JOB DETAILS */}
//      <div className="flex-1 p-8 overflow-y-auto">

//         {!selectedJob ? (
//           <p className="text-gray-600">Select a job to view details</p>
//         ) : (
//           <div className="bg-white p-6 rounded-xl shadow-sm">

//             <h1 className="text-2xl font-bold text-background">
//               {selectedJob.title}
//             </h1>

//             <p className="text-gray-600 mt-1">
//               {selectedJob.company}
//             </p>

//             <div className="flex items-center gap-2 text-gray-500 mt-2">
//               <MapPin size={16} />
//               {selectedJob.location}
//             </div>

//             <span className="inline-block mt-3 text-xs bg-accent text-background px-3 py-1 rounded">
//               {selectedJob.type}
//             </span>

//             <hr className="my-5" />

//             <h2 className="font-semibold text-lg mb-2 text-background">
//               Job Description
//             </h2>

//             <div className="text-gray-700 leading-7 whitespace-pre-wrap">
//   {selectedJob.description}
// </div>

//           <Link href={`/candidate/jobs/${selectedJob.id}/apply`}>
//   <button className="mt-6 bg-accent text-background px-6 py-2 rounded hover:opacity-90">
//     Apply Now
//   </button>
// </Link>

//           </div>
//         )}
//    </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

export default function CandidateHomePage({ jobs = [] }: any) {
  const [selectedJob, setSelectedJob] = useState(jobs[0] || null);

  const router = useRouter();

  return (
   <div className="h-screen bg-gray-200 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="border-b py-4 bg-background">
        <div className="mx-auto w-full  px-4 py-6">

          <div className="flex flex-col  text-black items-center gap-4">

            <h2 className="text-center text-2xl font-bold text-accent sm:text-3xl">
              Latest Jobs
            </h2>

            <p className="text-center text-sm text-gray-300 sm:text-base">
              See the latest jobs here
            </p>

            <div className="w-full p-2 max-w-lg rounded-lg bg-white shadow-sm">
              <SearchBar />
            </div>

          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex w-full flex-1 overflow-hidden gap-5 p-4">

        {/* ===========================
            MOBILE LAYOUT
            =========================== */}

        <div className="w-full md:hidden">        {jobs.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <p className="text-gray-500">No jobs available.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job: any) => (
              <div
                key={job.id}
                onClick={() =>
                  router.push(`/candidate/jobs/${job.id}`)
                }
                className="cursor-pointer rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md active:scale-[0.99]"
              >
                <h3 className="text-lg font-semibold text-background">
                  {job.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {job.company}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={15} />
                  <span>{job.location}</span>
                </div>

                <span className="mt-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-background">
                  {job.type}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===========================
          TABLET & DESKTOP LAYOUT
          =========================== */}

      <div className="hidden w-full md:flex gap-5">        {/* Left Side - Job List */}
  <div className="basis-[42%] xl:basis-[38%] flex-shrink-0 rounded-xl bg-white shadow-sm overflow-hidden">

        <div className="h-full overflow-y-auto">

            {jobs.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No jobs available.
              </div>
            ) : (
              jobs.map((job: any) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`cursor-pointer border-b p-5 transition hover:bg-gray-50 ${
                    selectedJob?.id === job.id
                      ? "border-l-4 border-l-accent bg-gray-100"
                      : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-background">
                    {job.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {job.company}
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={15} />
                    <span>{job.location}</span>
                  </div>

                  <span className="mt-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-background">
                    {job.type}
                  </span>
                </div>
              ))
            )}

          </div>

        </div>

        {/* Right Side - Job Details */}
       {/* Right Side - Job Details */}
<div className="flex-1">
  {!selectedJob ? (
    <div className="flex h-full items-center justify-center rounded-xl bg-white p-8 shadow-sm">
      <p className="text-lg text-gray-500">
        Select a job to view details.
      </p>
    </div>
  ) : (
    <div className="rounded-xl bg-white p-6 shadow-sm lg:p-8">
      <h1 className="text-2xl font-bold text-background lg:text-3xl">
        {selectedJob.title}
      </h1>

      <p className="mt-2 text-base text-gray-600">
        {selectedJob.company}
      </p>

      <div className="mt-3 flex items-center gap-2 text-gray-500">
        <MapPin size={16} />
        <span>{selectedJob.location}</span>
      </div>

      <div className="mt-4">
        <span className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background">
          {selectedJob.type}
        </span>
      </div>

      <hr className="my-6" />

      <h2 className="mb-4 text-xl font-semibold text-background">
        Job Description
      </h2>

      <div className="max-h-[420px] overflow-y-auto whitespace-pre-wrap break-words leading-7 text-gray-700 pr-2">
        {selectedJob.description}
      </div>

      <div className="mt-8">
        <Link href={`/candidate/jobs/${selectedJob.id}/apply`}>
          <button className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  )}
</div>
      </div>
    </div>
    </div>
  )}
