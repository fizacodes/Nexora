import Link from "next/link";

export default function EmployerNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/recruiter" className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-accent">
            Nexora
          </span>
          <span className="rounded-full bg-accent px-2 py-1 text-xs font-semibold text-background">
            Employer
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/recruiter"
            className="text-sm font-medium text-white transition hover:text-accent"
          >
            Home
          </Link>

          <Link
            href="/recruiter/jobs"
            className="text-sm font-medium text-white transition hover:text-accent"
          >
            My Jobs
          </Link>

          <Link
            href="/recruiter/candidates"
            className="text-sm font-medium text-white transition hover:text-accent"
          >
            Candidates
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium text-white transition hover:text-accent"
          >
            Pricing
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-white hover:text-accent md:block"
          >
            Sign In
          </Link>

          <Link
            href="/recruiter/jobs/create"
            className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:scale-105"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </header>
  );
}