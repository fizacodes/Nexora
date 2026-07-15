import CandidateHomePage from "./components/Home";
import CandidateNavbar from "./components/Navbar";
import { getJobs } from "@/app/actions/candidate/getJobs";

type Props = {
  searchParams: Promise<{
    query?: string;
    location?: string;
  }>;
};

export default async function CandidatePage({
  searchParams,
}: Props) {
  const { query, location } = await searchParams;

  const jobs = await getJobs(query, location);

  return (
    <div>
      <CandidateNavbar />
      <CandidateHomePage jobs={jobs} />
    </div>
  );
}