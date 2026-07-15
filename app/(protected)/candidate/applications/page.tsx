import { getApplications } from "@/app/actions/candidate/getApplication";
import CandidateNavbar from "../components/Navbar";
import ApplicationList from "./ApplicationList";

export default async function ApplicationsPage() {
  const applications = await getApplications();

  return (
    <div className="min-h-screen bg-gray-100">
      <CandidateNavbar />

      <div className="max-w-6xl mx-auto py-8 px-4">

        <h1 className="text-3xl font-bold text-background">
          My Applications
        </h1>

        <p className="text-gray-600 mt-2">
          Track all the jobs you've applied for.
        </p>

        <ApplicationList applications={applications} />

      </div>
    </div>
  );
}