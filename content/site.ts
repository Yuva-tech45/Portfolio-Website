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
    "Yuvasree Prakash — Computer Science student at VIT Chennai and Frontend Developer Intern at RSN One / BuildX, exploring how software, design and product thinking come together.",

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
    copy: "I’m Yuvasree Prakash, a Computer Science student at VIT Chennai and a Frontend Developer Intern, exploring how software, design and product thinking come together.",
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
        body: "My internship at RSN One / BuildX moved learning out of the classroom. Real clients, honest feedback and real constraints are teaching me that good software is more than clean code — it’s understanding users, communicating clearly and refining until it feels right.",
      },
    ],
  },

  experience: {
    eyebrow: "Current experience",
    heading: "Where the learning gets real.",
    role: "Frontend Developer Intern",
    company: "RSN One / BuildX",
    period: "June 2026 — Present",
    summary:
      "At BuildX I get to work close to the product — shaping frontend concepts and premium interface directions, testing platforms, and iterating on ideas with direct input from clients and founders.",
    contributionsLabel: "I’ve contributed to",
    contributions: [
      "Frontend and landing-page concepts",
      "Premium interface and visual direction",
      "Next.js, TypeScript and Tailwind CSS exploration",
      "Lifestyle-based product-discovery ideas",
      "Responding to client and founder feedback",
      "QA testing of supplier and admin portals",
      "AI-assisted design and development workflows",
      "Responsive design, usability and performance thinking",
    ],
    note: "Much of this work is conceptual and iterative — shaped by feedback, refined in rounds, and not always shipped as-is. That’s exactly where the learning is.",
  },

  capabilities: {
    eyebrow: "What I bring",
    heading: "Fewer buzzwords, more intent.",
    intro:
      "Not an exhaustive list of tools — an honest snapshot of how I think and work right now.",
    groups: [
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
          "Asking who something is for and how it should feel — then letting those answers guide what gets built.",
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
