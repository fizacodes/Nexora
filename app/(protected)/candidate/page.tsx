import CandidateHomePage from "./components/Home";
import CandidateNavbar from "./components/Navbar";
import { getJobs } from "@/app/actions/candidate/getJobs";

export default async function CandidatePage() {
  const jobs = await getJobs();

  return (
    <div>
     <CandidateNavbar/>
     <CandidateHomePage jobs={jobs}/>
    </div>
  );
}