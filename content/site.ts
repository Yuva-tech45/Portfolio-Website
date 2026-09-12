/**
 * ─────────────────────────────────────────────────────────────────
 *  Site content — every word on the page lives in this one file.
 *
 *  Contact links: replace an `href: null` with a real URL to turn
 *  that row into a live link, e.g.
 *    { label: "LinkedIn", value: "in/your-handle", href: "https://linkedin.com/in/your-handle" }
 *  Rows left as `href: null` render as quiet “coming soon” entries,
 *  so nothing on the page is ever a broken link.
 *
 *  Resume: drop `resume.pdf` into the /public folder and set
 *  `nav.resumeHref` (and the Resume contact row) to "/resume.pdf".
 *  While it is null, the Resume button gently leads to the
 *  contact section instead.
 * ─────────────────────────────────────────────────────────────────
 */

export type ContactItem = {
  label: string;
  value: string;
  href: string | null;
};

export const site = {
  name: "Yuvasree Prakash",
  wordmark: "YP",
  location: "Chennai, India",
  description:
    "Yuvasree Prakash — second-year Computer Science student at VIT Chennai, Web Developer Intern at Mirai Innovations and Frontend Developer at RSN One, exploring how software, design and product thinking come together.",

  nav: {
    links: [
      { label: "Story", href: "#story" },
      { label: "Experience", href: "#experience" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Contact", href: "#contact" },
    ],
    resumeHref: "/resume.pdf" as string | null,
  },

  hero: {
    status: "Currently learning, building and evolving",
    headingLead: "Building my way from ideas to",
    headingEmphasis: "meaningful digital experiences.",
    copy: "I’m Yuvasree Prakash, a second-year Computer Science student at VIT Chennai — currently a Web Developer Intern at Mirai Innovations and a Frontend Developer at RSN One, exploring how software, design and product thinking come together.",
    primaryCta: { label: "Explore My Journey", href: "#story" },
    secondaryCta: { label: "Connect With Me", href: "#contact" },
  },

  journey: {
    eyebrow: "My story",
    heading: "From foundations to real-world craft.",
    sub: "Three chapters in — a story still being written.",
    chapters: [
      {
        numeral: "I",
        title: "Building the foundation",
        tint: "lavender",
        body: "I started at VIT Chennai with the fundamentals — programming, data structures and the habit of thinking in systems. The deeper I went, the more curious I became about what separates software that simply works from software that feels considered.",
      },
      {
        numeral: "II",
        title: "Discovering frontend and product thinking",
        tint: "blush",
        body: "Exploring different corners of technology, I kept returning to the same meeting point — where software, design and product thinking overlap. Frontend development became my way in: the place where logic turns into something people can see, feel and use.",
      },
      {
        numeral: "III",
        title: "Learning through real-world experience",
        tint: "sage",
        body: "Two roles moved learning out of the classroom. At Mirai Innovations I took a website that existed as a basic HTML concept and made it functional, refining it round after round on the founder’s feedback. At RSN One the picture keeps widening — interfaces, app design, email experiences, testing, research into customer behaviour, launch support. Good software, I’m learning, is more than clean code: it’s understanding users, testing assumptions and caring about the whole experience.",
      },
    ],
  },

  experience: {
    eyebrow: "Current experience",
    heading: "Where the learning gets real.",
    roles: [
      {
        role: "Web Developer Intern",
        company: "Mirai Innovations",
        period: "Aug 2026 — Present",
        timeline: null as string | null,
        summary:
          "Mirai’s website began as a basic HTML file — a static sketch of how the site was supposed to look. My work has been to bring that concept to life: making it functional and usable, then improving it continuously through the founder’s direct feedback.",
        contributionsLabel: "I’ve been working on",
        contributions: [
          "Turning the static HTML concept into a functional website",
          "Building out the interactions and functionality the site needed",
          "Iterative refinements shaped by rounds of founder feedback",
          "Ongoing improvement and maintenance of the website",
        ],
        note: "The design concept wasn’t mine — it already existed as a basic HTML file. The meaningful part has been bringing it to life as a working website, and making it a little better with every round of feedback.",
      },
      {
        role: "Frontend Developer",
        company: "RSN One",
        period: "May 2026 — Present",
        timeline:
          "Intern: May 2026 — Aug 2026 · Part-time employee: Aug 2026 — Present",
        summary:
          "At RSN One my work has grown well beyond landing pages — into interface work, the frontend of the company’s app, email and brand experiences, testing, research into customer behaviour and launch support. It’s where I’m learning how the pieces of a real product come together, iterating with direct input from clients and founders.",
        contributionsLabel: "I’ve contributed to",
        contributions: [
          "Landing-page concepts and premium visual direction",
          "AI Concierge interface ideas and broader interface concepts",
          "Membership and order digital experiences",
          "Dark and light HTML email templates and brand imagery",
          "Next.js, TypeScript and Tailwind CSS across the web experiences",
          "Frontend of the company’s app, including app design and testing",
          "QA across the website and the customer, supplier and admin portals",
          "Research into customer behaviour that supports company and product decisions",
          "Product-discovery ideas, launch and social-platform support",
          "AI-assisted design and development workflows",
        ],
        note: "Much of this work is collaborative and iterative — shaped by feedback, refined in rounds, and not always shipped as-is. That’s exactly where the learning is.",
      },
    ],
    campus: {
      label: "Beyond the internships",
      line: "On campus, I keep the same curiosity pointed at research, projects and software built with other students.",
      clubs: [
        {
          name: "Business Innovation Community (BiC)",
          detail: "Software Department",
        },
        { name: "Tech Researchers Club", detail: "R&D and Projects" },
        { name: "Zero Bugs Club (ZBC)", detail: "Technical Team" },
      ],
    },
  },

  capabilities: {
    eyebrow: "What I bring",
    heading: "Fewer buzzwords, more intent.",
    intro:
      "Not an exhaustive list of tools — an honest snapshot of how I think and work right now.",
    groups: [
      {
        title: "Web Development",
        description:
          "Turning static concepts into working websites — building the functionality they need, then improving and maintaining them over time.",
        tools: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Frontend Development",
        description:
          "Building responsive, accessible interfaces — with growing attention to the small details that make an experience feel finished.",
        tools: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Programming Foundations",
        description:
          "A computer-science base I keep strengthening: problem-solving, data structures and the fundamentals behind every good abstraction.",
        tools: ["Python", "C++", "SQL"],
      },
      {
        title: "Product & Interface Thinking",
        description:
          "Asking who something is for and how it should feel — then letting research, testing and honest feedback guide what gets built.",
        tools: [],
      },
      {
        title: "AI-Assisted Workflows",
        description:
          "Working thoughtfully with AI tools across design and development — to explore faster, question assumptions and raise the bar.",
        tools: [],
      },
      {
        title: "Continuous Learning",
        description:
          "Treating every review, refactor and piece of feedback as course material — and keeping the habit of building small and often.",
        tools: ["Git", "GitHub"],
      },
    ],
  },

  future: {
    eyebrow: "Where I’m going",
    statementLead: "I want to become a software engineer who can",
    statementEmphasis: "carry an idea the whole way",
    statementRest: "— from understanding the problem, to building it well, to caring how it lands.",
    body: "That means going deeper into engineering fundamentals, shipping more of what I imagine, staying close to design and to users, and letting real feedback — not assumptions — shape what I build next. I’m early in the journey, and that’s the exciting part.",
  },

  contact: {
    eyebrow: "Contact",
    headingLead: "Let’s create something",
    headingEmphasis: "meaningful.",
    copy: "Whether it’s an internship conversation, a product idea or a question about something I’ve built — my inbox is always open.",
    items: [
      {
        label: "Email",
        value: "yuvasreeprakash2458@gmail.com",
        href: "mailto:yuvasreeprakash2458@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/yuvasreeprakash",
        href: "https://www.linkedin.com/in/yuvasreeprakash",
      },
      {
        label: "GitHub",
        value: "github.com/Yuva-tech45",
        href: "https://github.com/Yuva-tech45",
      },
      { label: "Resume", value: "Download PDF", href: "/resume.pdf" },
    ] as ContactItem[],
  },

  footer: {
    line: "Designed and built by Yuvasree Prakash — with Next.js, Tailwind CSS and a lot of curiosity.",
  },
};
