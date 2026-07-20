import BackButton from "../components/BackButton";
import JobForm from "./JobForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-10">

      <BackButton/>
      <h1 className="text-background text-center font-bold text-5xl">Create Job</h1>
      <JobForm />
    </div>
  );
}