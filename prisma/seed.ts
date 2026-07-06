import { prisma } from "@/lib/prisma";

async function main() {
  // =========================
  // 1. CREATE RECRUITER USER
  // =========================
  const recruiter = await prisma.user.create({
    data: {
      name: "Tech Recruiter",
      email: "recruiter@nexoraa.com",
      role: "RECRUITER",
    },
  });

  // =========================
  // 2. CREATE JOBS
  // =========================
  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer (Next.js)",
        description: `
About the Role

Nexora Tech is looking for a passionate Frontend Developer with strong experience in React.js and Next.js. You will work closely with our product managers, UI/UX designers, and backend engineers to build scalable, high-performance web applications used by thousands of users.

As a member of our engineering team, you'll contribute to the entire product development lifecycle—from planning and architecture to implementation, testing, deployment, and continuous improvement.

Key Responsibilities

• Develop modern, responsive web applications using React.js and Next.js.
• Build reusable and maintainable UI components with TypeScript.
• Integrate frontend applications with REST APIs and backend services.
• Optimize applications for speed, accessibility, and SEO.
• Collaborate with designers to implement pixel-perfect user interfaces.
• Write clean, scalable, and well-documented code.
• Participate in code reviews and contribute to engineering best practices.
• Debug production issues and continuously improve application performance.
• Work in an Agile/Scrum development environment.

Required Qualifications

• Bachelor's degree in Computer Science or related field (or equivalent practical experience).
• 2+ years of professional experience with React.js.
• Strong knowledge of Next.js and modern JavaScript (ES6+).
• Experience with TypeScript.
• Solid understanding of HTML5, CSS3, and responsive design.
• Experience using Tailwind CSS.
• Familiarity with Git and GitHub workflows.
• Understanding of RESTful APIs.
• Good problem-solving and communication skills.

Preferred Qualifications

• Experience with Prisma ORM.
• Experience using PostgreSQL.
• Knowledge of NextAuth/Auth.js.
• Familiarity with Docker and CI/CD pipelines.
• Understanding of performance optimization and Core Web Vitals.

What We Offer

• Competitive salary.
• Fully remote work environment.
• Flexible working hours.
• Health and wellness benefits.
• Annual performance bonus.
• Paid vacation and public holidays.
• Learning and development budget.
• Modern development tools and equipment.
• Opportunity to work on real-world products with a talented engineering team.

Why Join Nexora Tech?

We believe great software is built by great people. At Nexora Tech, you'll have the opportunity to solve challenging problems, work with modern technologies, and grow your career alongside experienced engineers in a collaborative and supportive environment.

If you're passionate about building exceptional web experiences and continuously learning new technologies, we'd love to hear from you.
    `,
        company: "Nexora Tech",
        location: "Remote",
        type: "FULL_TIME",
        isRemote: true,
        salaryMin: 80000,
        salaryMax: 150000,
        recruiterId: recruiter.id,
      },
      {
        title: "Backend Developer (Node.js)",
        description: `
About the Role

Nexora Tech is looking for a passionate Frontend Developer with strong experience in React.js and Next.js. You will work closely with our product managers, UI/UX designers, and backend engineers to build scalable, high-performance web applications used by thousands of users.

As a member of our engineering team, you'll contribute to the entire product development lifecycle—from planning and architecture to implementation, testing, deployment, and continuous improvement.

Key Responsibilities

• Develop modern, responsive web applications using React.js and Next.js.
• Build reusable and maintainable UI components with TypeScript.
• Integrate frontend applications with REST APIs and backend services.
• Optimize applications for speed, accessibility, and SEO.
• Collaborate with designers to implement pixel-perfect user interfaces.
• Write clean, scalable, and well-documented code.
• Participate in code reviews and contribute to engineering best practices.
• Debug production issues and continuously improve application performance.
• Work in an Agile/Scrum development environment.

Required Qualifications

• Bachelor's degree in Computer Science or related field (or equivalent practical experience).
• 2+ years of professional experience with React.js.
• Strong knowledge of Next.js and modern JavaScript (ES6+).
• Experience with TypeScript.
• Solid understanding of HTML5, CSS3, and responsive design.
• Experience using Tailwind CSS.
• Familiarity with Git and GitHub workflows.
• Understanding of RESTful APIs.
• Good problem-solving and communication skills.

Preferred Qualifications

• Experience with Prisma ORM.
• Experience using PostgreSQL.
• Knowledge of NextAuth/Auth.js.
• Familiarity with Docker and CI/CD pipelines.
• Understanding of performance optimization and Core Web Vitals.

What We Offer

• Competitive salary.
• Fully remote work environment.
• Flexible working hours.
• Health and wellness benefits.
• Annual performance bonus.
• Paid vacation and public holidays.
• Learning and development budget.
• Modern development tools and equipment.
• Opportunity to work on real-world products with a talented engineering team.

Why Join Nexora Tech?

We believe great software is built by great people. At Nexora Tech, you'll have the opportunity to solve challenging problems, work with modern technologies, and grow your career alongside experienced engineers in a collaborative and supportive environment.

If you're passionate about building exceptional web experiences and continuously learning new technologies, we'd love to hear from you.
    `,
        company: "Nexora Tech",
        location: "Lahore",
        type: "FULL_TIME",
        isRemote: false,
        salaryMin: 90000,
        salaryMax: 180000,
        recruiterId: recruiter.id,
      },
      {
        title: "UI/UX Designer",
        description: `
About the Role

Nexora Tech is looking for a passionate Frontend Developer with strong experience in React.js and Next.js. You will work closely with our product managers, UI/UX designers, and backend engineers to build scalable, high-performance web applications used by thousands of users.

As a member of our engineering team, you'll contribute to the entire product development lifecycle—from planning and architecture to implementation, testing, deployment, and continuous improvement.

Key Responsibilities

• Develop modern, responsive web applications using React.js and Next.js.
• Build reusable and maintainable UI components with TypeScript.
• Integrate frontend applications with REST APIs and backend services.
• Optimize applications for speed, accessibility, and SEO.
• Collaborate with designers to implement pixel-perfect user interfaces.
• Write clean, scalable, and well-documented code.
• Participate in code reviews and contribute to engineering best practices.
• Debug production issues and continuously improve application performance.
• Work in an Agile/Scrum development environment.

Required Qualifications

• Bachelor's degree in Computer Science or related field (or equivalent practical experience).
• 2+ years of professional experience with React.js.
• Strong knowledge of Next.js and modern JavaScript (ES6+).
• Experience with TypeScript.
• Solid understanding of HTML5, CSS3, and responsive design.
• Experience using Tailwind CSS.
• Familiarity with Git and GitHub workflows.
• Understanding of RESTful APIs.
• Good problem-solving and communication skills.

Preferred Qualifications

• Experience with Prisma ORM.
• Experience using PostgreSQL.
• Knowledge of NextAuth/Auth.js.
• Familiarity with Docker and CI/CD pipelines.
• Understanding of performance optimization and Core Web Vitals.

What We Offer

• Competitive salary.
• Fully remote work environment.
• Flexible working hours.
• Health and wellness benefits.
• Annual performance bonus.
• Paid vacation and public holidays.
• Learning and development budget.
• Modern development tools and equipment.
• Opportunity to work on real-world products with a talented engineering team.

Why Join Nexora Tech?

We believe great software is built by great people. At Nexora Tech, you'll have the opportunity to solve challenging problems, work with modern technologies, and grow your career alongside experienced engineers in a collaborative and supportive environment.

If you're passionate about building exceptional web experiences and continuously learning new technologies, we'd love to hear from you.
    `,
        company: "Creative Studio",
        location: "Karachi",
        type: "PART_TIME",
        isRemote: true,
        salaryMin: 50000,
        salaryMax: 100000,
        recruiterId: recruiter.id,
      },
      {
        title: "Mobile App Developer",
        description: `
About the Role

Nexora Tech is looking for a passionate Frontend Developer with strong experience in React.js and Next.js. You will work closely with our product managers, UI/UX designers, and backend engineers to build scalable, high-performance web applications used by thousands of users.

As a member of our engineering team, you'll contribute to the entire product development lifecycle—from planning and architecture to implementation, testing, deployment, and continuous improvement.

Key Responsibilities

• Develop modern, responsive web applications using React.js and Next.js.
• Build reusable and maintainable UI components with TypeScript.
• Integrate frontend applications with REST APIs and backend services.
• Optimize applications for speed, accessibility, and SEO.
• Collaborate with designers to implement pixel-perfect user interfaces.
• Write clean, scalable, and well-documented code.
• Participate in code reviews and contribute to engineering best practices.
• Debug production issues and continuously improve application performance.
• Work in an Agile/Scrum development environment.

Required Qualifications

• Bachelor's degree in Computer Science or related field (or equivalent practical experience).
• 2+ years of professional experience with React.js.
• Strong knowledge of Next.js and modern JavaScript (ES6+).
• Experience with TypeScript.
• Solid understanding of HTML5, CSS3, and responsive design.
• Experience using Tailwind CSS.
• Familiarity with Git and GitHub workflows.
• Understanding of RESTful APIs.
• Good problem-solving and communication skills.

Preferred Qualifications

• Experience with Prisma ORM.
• Experience using PostgreSQL.
• Knowledge of NextAuth/Auth.js.
• Familiarity with Docker and CI/CD pipelines.
• Understanding of performance optimization and Core Web Vitals.

What We Offer

• Competitive salary.
• Fully remote work environment.
• Flexible working hours.
• Health and wellness benefits.
• Annual performance bonus.
• Paid vacation and public holidays.
• Learning and development budget.
• Modern development tools and equipment.
• Opportunity to work on real-world products with a talented engineering team.

Why Join Nexora Tech?

We believe great software is built by great people. At Nexora Tech, you'll have the opportunity to solve challenging problems, work with modern technologies, and grow your career alongside experienced engineers in a collaborative and supportive environment.

If you're passionate about building exceptional web experiences and continuously learning new technologies, we'd love to hear from you.
    `,
        company: "AppWorks",
        location: "Islamabad",
        type: "CONTRACT",
        isRemote: false,
        salaryMin: 120000,
        salaryMax: 200000,
        recruiterId: recruiter.id,
      },
      {
        title: "DevOps Engineer",
        description: `
About the Role

Nexora Tech is looking for a passionate Frontend Developer with strong experience in React.js and Next.js. You will work closely with our product managers, UI/UX designers, and backend engineers to build scalable, high-performance web applications used by thousands of users.

As a member of our engineering team, you'll contribute to the entire product development lifecycle—from planning and architecture to implementation, testing, deployment, and continuous improvement.

Key Responsibilities

• Develop modern, responsive web applications using React.js and Next.js.
• Build reusable and maintainable UI components with TypeScript.
• Integrate frontend applications with REST APIs and backend services.
• Optimize applications for speed, accessibility, and SEO.
• Collaborate with designers to implement pixel-perfect user interfaces.
• Write clean, scalable, and well-documented code.
• Participate in code reviews and contribute to engineering best practices.
• Debug production issues and continuously improve application performance.
• Work in an Agile/Scrum development environment.

Required Qualifications

• Bachelor's degree in Computer Science or related field (or equivalent practical experience).
• 2+ years of professional experience with React.js.
• Strong knowledge of Next.js and modern JavaScript (ES6+).
• Experience with TypeScript.
• Solid understanding of HTML5, CSS3, and responsive design.
• Experience using Tailwind CSS.
• Familiarity with Git and GitHub workflows.
• Understanding of RESTful APIs.
• Good problem-solving and communication skills.

Preferred Qualifications

• Experience with Prisma ORM.
• Experience using PostgreSQL.
• Knowledge of NextAuth/Auth.js.
• Familiarity with Docker and CI/CD pipelines.
• Understanding of performance optimization and Core Web Vitals.

What We Offer

• Competitive salary.
• Fully remote work environment.
• Flexible working hours.
• Health and wellness benefits.
• Annual performance bonus.
• Paid vacation and public holidays.
• Learning and development budget.
• Modern development tools and equipment.
• Opportunity to work on real-world products with a talented engineering team.

Why Join Nexora Tech?

We believe great software is built by great people. At Nexora Tech, you'll have the opportunity to solve challenging problems, work with modern technologies, and grow your career alongside experienced engineers in a collaborative and supportive environment.

If you're passionate about building exceptional web experiences and continuously learning new technologies, we'd love to hear from you.
    `,
        company: "CloudOps",
        location: "Remote",
        type: "FULL_TIME",
        isRemote: true,
        salaryMin: 150000,
        salaryMax: 300000,
        recruiterId: recruiter.id,
      },
    ],
  });

  console.log("✅ Recruiter + Jobs seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
