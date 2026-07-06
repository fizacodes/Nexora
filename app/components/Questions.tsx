"use client"
import { useState } from 'react';
export default function Questions() {
    type FAQ={
        question:string,
        answer:string
    }
    const [active,setActive]=useState<number |null>(null)
     const faqs :FAQ[] = [
    {
      question: "How do I apply for a job?",
      answer:
        "Create an account, complete your profile, upload your resume, and browse available job listings. Once you find a suitable position, click the Apply Now button and submit your application directly through the platform.",
    },
    {
      question: "Is the platform free for job seekers?",
      answer:
        "Yes. Job seekers can create an account, search for jobs, upload resumes, and apply for opportunities at no cost. Our goal is to make job searching simple and accessible for everyone.",
    },
    {
      question: "How can employers post jobs?",
      answer:
        "Employers can register a company account, complete their company profile, and create job postings through the employer dashboard. Once approved, job listings become visible to qualified candidates on the platform.",
    },
    {
      question: "Can I track my applications?",
      answer:
        "After applying for a job, you can view and monitor your applications from your dashboard. The application status will update as employers review candidates and move through the hiring process.",
    },
  ];
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-black">
          Frequently Asked Questions
        </h1>

        <p className="text-center text-gray-700 mt-4">
          Find answers to common questions about our hiring platform.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <h3 className="font-bold text-[14px] text-black">
                  {faq.question}
                </h3>

                {active === index ? (
  <span className="text-2xl font-bold text-background bg-accent rounded-full px-3">
    -
  </span>
) : (
  <span className="text-2xl font-bold text-black bg-gray-200 rounded-full px-3">
    +
  </span>
)}
              </div>

              {active === index && (
                <p className="mt-4 text-[14px] text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
