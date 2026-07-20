import React from "react";

export default function Contact() {
  const support = [
    "How it works",
    "Features",
    "Pricing",
    "Downloads",
  ];

  const links = [
    "About",
    "Services",
    "Blog",
    "Contact",
  ];

  const terms = [
    "FAQS",
    "Terms and Conditions",
    "Privacy Policy",
    "Help Center",
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full  px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <h1 className="text-4xl font-semibold tracking-wide text-background md:text-5xl lg:text-7xl">
            Let's Contact
          </h1>

          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-4xl text-background">
            ↗
          </span>
        </div>

        {/* Footer */}
   <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Logo */}
  <div className="max-w-[350px]">
            <div className="flex items-center">
              <span className="-rotate-[10deg] text-3xl font-black text-accent">
                N
              </span>

              <h1 className="cursor-pointer text-2xl font-bold tracking-tight text-background transition-colors duration-300 hover:text-accent">
                exora
              </h1>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Onboard your own talent pool to Nexora, invite them to projects,
              sign contracts and kick off the projects more than ever.
            </p>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-black">Support</h3>

            <div className="mt-5 space-y-3">
              {support.map((item) => (
                <p
                  key={item}
                  className="cursor-pointer text-sm text-gray-600 transition hover:text-accent"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-black">Useful Links</h3>

            <div className="mt-5 space-y-3">
              {links.map((item) => (
                <p
                  key={item}
                  className="cursor-pointer text-sm text-gray-600 transition hover:text-accent"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div>
            <h3 className="font-bold text-black">Terms</h3>

            <div className="mt-5 space-y-3">
              {terms.map((item) => (
                <p
                  key={item}
                  className="cursor-pointer text-sm text-gray-600 transition hover:text-accent"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}