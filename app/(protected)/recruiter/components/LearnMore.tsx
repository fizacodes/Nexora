import Link from 'next/link'
import React from 'react'

function LearnMore() {
  return (
   <section className="bg-gray-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    {/* Heading */}
    <div className="text-center">
      <span className="rounded-full bg-accent/15 px-4 py-2 text-sm font-semibold text-background">
        Why Choose Nexora
      </span>

      <h2 className="mt-6 text-4xl font-bold text-background md:text-5xl">
        Manage your hiring from start to finish
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
        Everything you need to attract, evaluate, and hire exceptional talent—
        all in one platform.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-16 grid gap-8 md:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-accent">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl">
          📢
        </div>

        <h3 className="mt-6 text-2xl font-bold text-background">
          Post a Job
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Get started with a free job post and reach qualified candidates in
          just a few minutes.
        </p>
        <Link href='/recruiter/job'>
        <button className="mt-8 rounded-xl bg-background px-5 py-3 font-semibold text-white transition hover:bg-background/90">
          Start Posting
        </button>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-accent">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl">
          👥
        </div>

        <h3 className="mt-6 text-2xl font-bold text-background">
          Find Quality Applicants
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Reach out with personalised messages, monitor every application, and
          move the best candidates through your hiring pipeline.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-accent">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl">
          🤝
        </div>

        <h3 className="mt-6 text-2xl font-bold text-background">
          Hire Confidently
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          From interview planning to hiring decisions, Nexora provides the
          tools and resources to help you make confident hiring choices.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default LearnMore
