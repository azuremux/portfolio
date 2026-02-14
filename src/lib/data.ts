export const personalInfo = {
  name: "Azure Malm",
  title: "Head of Design",
  email: "azurem.ux@gmail.com",
  location: "Seattle, WA",
  linkedin: "https://linkedin.com/in/azure-malm",
  bio: "I lead design teams and shape product vision, combining hands-on design and engineering expertise with strategic leadership to deliver exceptional user experiences at scale.",
  extendedBio: [
    "My journey into design leadership started with a fascination for how people interact with technology. After earning my BA from Seattle Pacific University, I pursued a Master's in Learning & Technology at WGU, focused on integrating technology into the classroom. While the degree was in education, the skills I built there carry over every day: understanding how different people learn, communicating complex ideas clearly, and adapting my approach to meet people where they are. Those instincts now shape how I lead a design team and mentor designers with different strengths and working styles.",
    "A Google UX Design Certificate sharpened my design thinking toolkit, and I transitioned from UX Designer to UX Engineer, combining my love for visual design with hands-on front-end development.",
    "Today, as Head of Design, I split my time between leading a team of designers and doing hands-on design work myself. I approve all design output, drive product strategy, and make higher-level decisions that shape the user experience across our entire product suite, but I'm also still in Figma every day working on projects alongside my team. My background in both design and engineering gives me a unique lens for mentoring my team and ensuring we ship work that is both beautiful and technically sound.",
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "PCM Services LLC",
    role: "Head of Design",
    period: "Dec 2025 - Present",
    description:
      "Leading the design team and overseeing all design output across the company's product suite.",
    highlights: [
      "Managing and mentoring a team of designers across multiple product lines",
      "Approving all design work before release to ensure quality and consistency",
      "Driving higher-level product and design strategy decisions",
      "Establishing design standards and review processes across the organization",
    ],
  },
  {
    company: "PCM Services LLC",
    role: "UX Engineer",
    period: "Aug 2024 - Nov 2025",
    description:
      "Leading front-end development and design implementation for internal and client-facing applications.",
    highlights: [
      "Translating complex design systems into scalable React components",
      "Collaborating with product teams to refine UX flows",
      "Implementing accessible, responsive interfaces across platforms",
    ],
  },
  {
    company: "Hawx Smart Pest Control",
    role: "UX Engineer",
    period: "Aug 2023 - 2024",
    description:
      "Evolved from UX Designer to UX Engineer, owning both the design and front-end implementation of multiple internal tools.",
    highlights: [
      "Built and shipped production React Native and React web applications",
      "Designed and developed four major internal products end-to-end",
      "Established front-end component patterns and design system foundations",
    ],
  },
  {
    company: "Hawx Smart Pest Control",
    role: "UX Designer",
    period: "Sept 2022 - Aug 2023",
    description:
      "Owned the UX design process for internal sales and service tools, from research through high-fidelity prototypes.",
    highlights: [
      "Conducted user research and usability testing with field technicians and sales reps",
      "Created wireframes, prototypes, and design specifications in Figma",
      "Collaborated closely with engineering to ensure design fidelity",
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
  {
    institution: "Google",
    degree: "UX Design Professional Certificate",
    period: "2021 - 2022",
  },
  {
    institution: "Western Governors University",
    degree: "MS Learning & Technology",
    period: "2020 - 2021",
  },
  {
    institution: "Seattle Pacific University",
    degree: "BA",
    period: "2015 - 2020",
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Design",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Usability Testing",
      "Design Systems",
      "Information Architecture",
    ],
  },
  {
    category: "Development",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS/SCSS",
      "WordPress",
      "Webflow",
      "Wix",
    ],
  },
  {
    category: "Tools",
    skills: ["GitLab", "VS Code", "Notion", "ClickUp", "Monday"],
  },
];

export interface ProjectFeature {
  number: number;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  tech: string[];
  platforms: string[];
  problem: string;
  goal: string;
  description: string;
  designApproach: string;
  features: ProjectFeature[];
  heroPlaceholder: string;
  thumbnail?: string;
  screenshots: { label: string; description: string }[];
}

export const projects: Project[] = [
  {
    slug: "digital-technician",
    title: "Digital Technician",
    subtitle: "Internal Technician Tool",
    role: "Sole Designer & Front-End Engineer",
    tech: [
      "Figma",
      "React Native",
      "HTML",
      "CSS/SCSS",
      "JavaScript",
      "GitLab",
    ],
    platforms: ["Mobile"],
    thumbnail: "/projects/digital-technician/thumbnail.png",
    problem:
      "When I joined, Digital Technician was functional but still growing. Over time we added manager views, leaderboards, quote tracking, multi-photo capture, rescheduling, and NPS scoring, and the app outgrew its original design. The route list, map, and service checklist all struggled to display increasingly complex information, and the UI lacked consistency as new screens were layered on top of old ones.",
    goal: "Continuously evolve the app to support every service type Hawx offers (general pest, outdoor, termite, rodent, and more) while keeping the experience fast and intuitive for technicians working in the field, ultimately leading to a full redesign of every page.",
    description:
      "Digital Technician is the mobile app used by every Hawx Pest Control service technician to run their day. It handles the full appointment lifecycle: viewing daily routes, starting appointments, reviewing customer notes and concerns, completing a guided service checklist, logging chemical treatments, capturing photos, collecting signatures, and generating service tickets sent directly to the customer. I've worked on this app for over 3 years, first building out new features on the existing foundation, then leading a complete redesign of every page. I owned the redesign end-to-end, spending about 2 months on design in Figma before coding the majority of the front-end.",
    designApproach:
      "The full redesign focused on creating a scalable layout system that could handle all the features added over the years. The route view, map, and service checklist were all rethought to surface the right information at the right time: NPS scores, customer notes, color-coded statuses, and next-day route previews. Designed for one-handed use in the field, the interface prioritizes large touch targets, clear visual states, and minimal text input. Modals and navigation were standardized for consistency across every screen.",
    features: [
      {
        number: 1,
        title: "Daily Route & Map View",
        description:
          "Technicians see their full daily route with NPS scores, star ratings, and color-coded status badges. They can also preview the next day's route. The interactive map shows all assigned stops with numbered pins and a customer card preview for quick context.",
      },
      {
        number: 2,
        title: "Customer Concern Visibility",
        description:
          "When a tech starts an appointment, customer-reported concerns, door codes, special instructions, and past service history are surfaced immediately so they know exactly what to address before they begin.",
      },
      {
        number: 3,
        title: "Guided Service Checklist",
        description:
          "A step-by-step checklist guides techs through every required action for the appointment. The checklist adapts to the service type (general pest, outdoor, termite, rodent) and automatically adds steps for any customer add-ons.",
      },
      {
        number: 4,
        title: "Multi-Photo Documentation",
        description:
          "Techs can attach multiple photos and notes to each checklist item, documenting findings and treatment areas. Photos are organized by service category in a gallery for easy review.",
      },
      {
        number: 5,
        title: "Rescheduling & Cancellations",
        description:
          "Techs can reschedule, cancel, or schedule follow-up appointments directly in the app with a required reason, keeping the back office in sync without phone calls.",
      },
      {
        number: 6,
        title: "Manager View",
        description:
          "Managers can monitor their team's routes, check in on individual technicians, and track service completion across the day.",
      },
      {
        number: 7,
        title: "Quote Tracking",
        description:
          "If a customer is interested in an additional service type or add-on during a visit, the tech can create and track a quote on the spot, turning routine appointments into upsell opportunities.",
      },
      {
        number: 8,
        title: "Leaderboards & Points",
        description:
          "Techs earn points for completing appointments, with bonuses for running the route in order and for certain service types. Leaderboards show how they stack up, and NPS scores from customer reviews on Applause are tracked alongside performance.",
      },
    ],
    heroPlaceholder:
      "Digital Technician mobile app hero image — Guided checklist screen showing treatment steps with progress indicators and concern alerts",
    screenshots: [
      {
        label: "Guided Checklist",
        description:
          "Treatment checklist with step-by-step guidance, completion indicators, and expandable detail sections",
      },
      {
        label: "Concern Dashboard",
        description:
          "Customer concern visibility panel showing reported issues with priority flags and resolution tracking",
      },
      {
        label: "Photo Documentation",
        description:
          "Photo capture and annotation interface for logging treatment areas and service findings",
      },
    ],
  },
  {
    slug: "hawx-website",
    title: "Hawx Website",
    subtitle: "Website Redesign",
    role: "Sole Designer",
    tech: ["Figma", "Next.js", "React", "HTML", "CSS/SCSS", "JavaScript"],
    platforms: ["Desktop Web"],
    thumbnail: "/projects/hawx-website/thumbnail.png",
    problem:
      "The existing Hawx website was dated and needed a refresh. It had poor SEO, broken or incorrectly coded elements, and wasn't responsive across screen sizes. Information was hard to find and the overall experience didn't reflect the quality of the brand.",
    goal: "Redesign the entire Hawx web presence with a modern, user-focused design that improves how information is displayed, fixes responsiveness and SEO issues, and creates a scalable system for all page types.",
    description:
      "A comprehensive redesign of the Hawx Pest Control website, rethinking every page from homepage to location pages to the pest library. As the sole designer, I'm leading the full redesign: establishing a new visual language, building a cohesive design system, and reimagining how visitors find information and convert. The homepage, all location page types, and pest library are complete, with the rest of the site in progress.",
    designApproach:
      "The redesign takes a system-first approach. Rather than designing pages in isolation, I built a component library and design system in Figma that ensures consistency across the entire site. Every layout decision considers how to present information clearly for the visitor, with proper responsive behavior across all screen sizes and improved SEO structure throughout.",
    features: [
      {
        number: 1,
        title: "Design System",
        description:
          "A comprehensive component library built in Figma with consistent typography, color, spacing, and interaction patterns that scale across every page type.",
      },
      {
        number: 2,
        title: "Location Page Hierarchy",
        description:
          "A three-level location system: overview page showing all service areas, state-level pages listing branches, and individual branch/city pages with local details and CTAs.",
      },
      {
        number: 3,
        title: "Pest Library",
        description:
          "Redesigned pest information pages with better content structure, improved readability, and clear calls to action for visitors researching specific pest problems.",
      },
      {
        number: 4,
        title: "Responsive Design",
        description:
          "Fully responsive layouts that work correctly across all screen sizes, fixing the broken and inconsistent behavior of the old site.",
      },
      {
        number: 5,
        title: "SEO Improvements",
        description:
          "Proper heading structure, semantic markup, and page organization designed to improve search rankings and organic traffic.",
      },
    ],
    heroPlaceholder:
      "Hawx website redesign hero image — Desktop and mobile views of the new homepage design with modern layout and updated brand styling",
    screenshots: [
      {
        label: "Homepage Redesign",
        description:
          "New homepage design with hero section, service highlights, trust signals, and conversion-optimized layout",
      },
      {
        label: "Service Page",
        description:
          "Redesigned service detail page with clear offerings, visual hierarchy, and integrated lead capture",
      },
      {
        label: "Mobile Experience",
        description:
          "Mobile-optimized layouts showing responsive navigation, thumb-friendly CTAs, and streamlined content",
      },
    ],
  },
  {
    slug: "blackbird",
    title: "Blackbird",
    subtitle: "Door-to-Door Sales Tool",
    role: "UX Designer",
    tech: ["Figma", "React Native", "HTML", "CSS/SCSS", "JavaScript", "GitLab"],
    platforms: ["Tablet", "Mobile"],
    thumbnail: "/projects/blackbird/thumbnail.png",
    problem:
      "Door-to-door sales reps were relying on paper contracts and verbal explanations to sell pest control services. This led to customer confusion about service terms, incomplete sign-ups, and no way to track progress or manage territories digitally. The process lacked credibility and made it difficult to scale as the sales team grew.",
    goal: "Replace the paper-based sales process with a digital tool that takes a sales rep from walking up to a house all the way through creating a customer, signing the contract, and scheduling their first service, all on one device.",
    description:
      "Blackbird is an application built for Hawx Pest Control's door-to-door sales team, designed first for iPad and later adapted to mobile. It digitized the entire sales process, replacing paper contracts with a guided flow that walks customers through service selection, contract signing, and payment. I delivered the app within a 6-month timeline to meet a hard deadline before sales season. Originally built for Hawx, the app later expanded to support Terminix sales reps after the two companies partnered.",
    designApproach:
      "The design needed to serve two audiences at once: the sales rep running the interaction and the customer standing at their front door. Every screen was built to be easy to turn toward the customer while giving the rep quick access to the tools they need. The flow moves naturally from pitching the service to closing the deal, with clear visuals that build credibility and reduce friction at every step.",
    features: [
      {
        number: 1,
        title: "Full Sign-Up Flow",
        description:
          "A guided process that takes a customer from initial pitch through service selection, contract review, electronic signature, payment, and first service scheduling, all in one session.",
      },
      {
        number: 2,
        title: "Contract & E-Signature",
        description:
          "Digital contracts that replace paper forms with clear terms, pricing breakdowns, and smooth signature capture built for iPad. Customers can review and sign on the spot.",
      },
      {
        number: 3,
        title: "Sales Map & Pins",
        description:
          "An interactive map where reps can drop pins at every house they visit. Color-coded statuses (sold, come back later, never knock, pending) help them manage their territory and avoid revisiting dead ends.",
      },
      {
        number: 4,
        title: "Customer Tracking",
        description:
          "Tracks each customer's progress through key milestones: contract completion, welcome letter acknowledgment (via email or text), and whether they received their first service.",
      },
      {
        number: 5,
        title: "Upselling",
        description:
          "Tools for identifying and presenting upgrade opportunities to existing customers, helping reps grow revenue from the current customer base.",
      },
      {
        number: 6,
        title: "Leaderboard & Baseball Card",
        description:
          "A competitive leaderboard ranks reps by performance, and each rep gets a personal baseball card displaying their sales stats and achievements.",
      },
      {
        number: 7,
        title: "Multi-Brand Support",
        description:
          "After Hawx partnered with Terminix, the app was extended to support both brands, allowing Terminix door-to-door reps to use the same platform with their own branding.",
      },
    ],
    heroPlaceholder:
      "Blackbird iPad app hero image — Contract presentation screen showing clean service agreement layout with clear pricing tiers",
    screenshots: [
      {
        label: "Contract Flow",
        description:
          "Step-by-step contract presentation with progressive disclosure of service terms and pricing details",
      },
      {
        label: "Signature Capture",
        description:
          "Electronic signature screen with terms summary and natural iPad drawing input area",
      },
      {
        label: "Payment Screen",
        description:
          "Secure payment processing interface with multiple payment method options and confirmation",
      },
    ],
  },
  {
    slug: "pestrack",
    title: "PesTrack",
    subtitle: "Lead Generation Tool",
    role: "Sole Designer & Front-End Engineer",
    tech: [
      "Figma",
      "Next.js",
      "React",
      "JavaScript",
      "HTML",
      "CSS/SCSS",
      "GitLab",
    ],
    platforms: ["Mobile Web", "Desktop"],
    thumbnail: "/projects/pestrack/thumbnail.png",
    problem:
      "The existing lead capture form on the website was a simple short form that didn't collect enough data to qualify leads effectively. Potential customers would fill it out but the sales team had little context when calling them back, leading to longer calls and lower conversion rates.",
    goal: "Build a conversion-focused lead generation flow that captures detailed customer information - address, home type, pest issues, and contact details - so the sales team has everything they need before making the callback.",
    description:
      "PesTrack is a mobile-first lead generation tool built for Hawx Pest Control. It replaced a basic website form with a guided, step-by-step flow designed to capture richer lead data. Originally scoped to let customers fully sign up for service, the team pivoted to a lead-generation model where the flow creates a qualified lead and the customer receives a callback. Every screen was designed with no scrolling in mind, one question at a time, optimized for conversion on mobile devices.",
    designApproach:
      "The design philosophy was 'one thing at a time.' Every screen presents a single question with clear, tappable options, no scrolling required. The flow moves the customer naturally from checking their service area to selecting their pest issues, capturing their info along the way. Large touch targets, a persistent progress bar, and a phone number always visible keep the experience frictionless and conversion-focused.",
    features: [
      {
        number: 1,
        title: "No-Scroll Mobile Design",
        description:
          "Every screen fits within the viewport with no scrolling required. One question per screen with large, tappable options keeps the experience fast and focused on conversion.",
      },
      {
        number: 2,
        title: "Service Area Validation",
        description:
          "Customers enter their address upfront to confirm Hawx services their area before investing time in the rest of the flow. If they're in range, they see a confirmation and continue.",
      },
      {
        number: 3,
        title: "Pest & Home Profiling",
        description:
          "Visual pest selection with illustrated icons lets customers identify their issue quickly. Combined with home type and pest location data, the sales team gets a complete picture before the callback.",
      },
      {
        number: 4,
        title: "Qualified Lead Handoff",
        description:
          "The flow collects name, phone, email, address, home type, pest details, and ownership status, giving the sales team a fully qualified lead and a 10-minute callback promise.",
      },
    ],
    heroPlaceholder:
      "PesTrack responsive web app hero image — Mobile and desktop views showing the step-by-step lead capture flow with progress indicator",
    screenshots: [
      {
        label: "Mobile Form Flow",
        description:
          "Mobile-optimized step-by-step form with large touch targets, progress bar, and single-question-per-screen layout",
      },
      {
        label: "Desktop Experience",
        description:
          "Desktop version of the lead capture form showing responsive layout with side panel context and form progress",
      },
      {
        label: "Confirmation Screen",
        description:
          "Post-submission confirmation with next steps information and estimated contact timeline",
      },
    ],
  },
  {
    slug: "bluejay",
    title: "Bluejay",
    subtitle: "Internal Sales Tool",
    role: "Sole Designer & Front-End Engineer",
    thumbnail: "/projects/bluejay/thumbnail.png",
    tech: [
      "Figma",
      "React",
      "ReactDOM",
      "HTML",
      "CSS/SCSS",
      "JavaScript",
      "GitLab",
    ],
    platforms: ["Desktop Web", "Mobile"],
    problem:
      "The inside sales team was juggling between fragmented tools and a costly third-party platform to manage their sales process. There was no unified system for handling calls, looking up customers, and processing sales, resulting in inefficiency and high software costs.",
    goal: "Build an all-in-one internal sales tool that integrates directly with Five9's telephony platform, consolidating the entire sales workflow into a single application with both a rep-facing and customer-facing experience.",
    description:
      "Bluejay is a two-sided web-based sales tool built for Hawx Pest Control's inside sales team. On the internal side, reps look up customers, build service packages with customizable pricing and add-ons, and send a link for the customer to complete the sign-up on their own device. On the customer side, the link walks them through reviewing their plan, signing the service agreement via PandaDoc, and completing payment. Webhook-based progress tracking keeps the rep informed in real time as the customer moves through each step. The tool was later adapted to handle renewals, letting reps select services to renew, set new term lengths and pricing, and send the renewal through the same flow.",
    designApproach:
      "The design splits into two distinct experiences that work together. The internal side prioritizes speed and context: reps can look up a customer, see their existing appointments and inspection details, configure a full service package, and send a link in just a few steps. The customer side is mobile-optimized and minimal, guiding them through agreement signing and payment with no friction. A real-time progress indicator on the internal side shows exactly where the customer is in the flow and what actions remain, keeping the rep in control of the conversation.",
    features: [
      {
        number: 1,
        title: "Five9 Integration",
        description:
          "Deep integration with Five9's telephony platform for seamless call management, automatic call logging, and real-time agent status within the sales interface.",
      },
      {
        number: 2,
        title: "Customer Lookup",
        description:
          "Instant search and retrieval of customer records with appointment history, inspection details, and account information surfaced at the moment of need.",
      },
      {
        number: 3,
        title: "Custom Sales Flow",
        description:
          "A guided sign-up flow where reps select services, configure add-ons, set term lengths and pricing, and send a customer-facing link to complete the process.",
      },
      {
        number: 4,
        title: "Customer-Facing Link",
        description:
          "Generate and share a link with customers that walks them through reviewing their plan, signing the service agreement via PandaDoc, and completing payment on their own device.",
      },
      {
        number: 5,
        title: "Live Progress Tracking",
        description:
          "Webhook-based real-time visibility into where the customer is in the sign-up flow, with action item indicators so the rep knows exactly what step the customer is on.",
      },
      {
        number: 6,
        title: "Renewal Support",
        description:
          "The tool was adapted to handle renewals, letting reps view active services, select which to renew, choose new term lengths and pricing, and send the renewal through the same customer-facing flow.",
      },
    ],
    heroPlaceholder:
      "Bluejay web app hero image — Sales dashboard showing Five9 integration panel, active call details, and customer information sidebar",
    screenshots: [
      {
        label: "Sales Dashboard",
        description:
          "Main sales interface showing Five9 call controls, customer info panel, and guided sales flow steps",
      },
      {
        label: "Customer-Facing View",
        description:
          "The shareable customer link showing service details, pricing breakdown, and electronic agreement",
      },
      {
        label: "Scheduling Interface",
        description:
          "Service scheduling panel with available time slots, technician availability, and route optimization",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export interface BrandWork {
  title: string;
  description: string;
  type: "landing-page" | "lead-gen" | "marketing" | "branding" | "redesign" | "app" | "website";
}

export interface Brand {
  name: string;
  slug: string;
  description: string;
  work: BrandWork[];
}

export const brands: Brand[] = [
  {
    name: "Hawx",
    slug: "hawx",
    description:
      "Smart pest control company — designed and built multiple internal tools, led a full website redesign, and created ongoing marketing creatives.",
    work: [
      {
        title: "Website Redesign",
        description: "Full redesign of the Hawx public website — in progress",
        type: "website",
      },
      {
        title: "Blackbird",
        description: "iPad app for door-to-door sales team",
        type: "app",
      },
      {
        title: "Digital Technician",
        description: "Mobile app for field service technicians",
        type: "app",
      },
      {
        title: "PesTrack",
        description: "Responsive lead generation tool for the Hawx homepage",
        type: "lead-gen",
      },
      {
        title: "Bluejay",
        description: "Web-based internal sales tool with Five9 integration",
        type: "app",
      },
      {
        title: "Marketing Creatives",
        description: "Ongoing design of marketing materials and campaign assets",
        type: "marketing",
      },
    ],
  },
  {
    name: "Trusted Service Pros",
    slug: "trusted-service-pros",
    description:
      "Home services brand — established the brand identity from scratch and designed landing pages across multiple service verticals.",
    work: [
      {
        title: "Brand Identity",
        description: "Logo, color palette, typography, and brand guidelines",
        type: "branding",
      },
      {
        title: "Roofing Landing Page",
        description: "Service-specific landing page for roofing leads",
        type: "landing-page",
      },
      {
        title: "Siding Landing Page",
        description: "Service-specific landing page for siding leads",
        type: "landing-page",
      },
      {
        title: "Windows Landing Page",
        description: "Service-specific landing page for window replacement leads",
        type: "landing-page",
      },
      {
        title: "Lead Generation Flows",
        description: "Multi-step lead capture experiences",
        type: "lead-gen",
      },
      {
        title: "Marketing Creatives",
        description: "Ongoing design of marketing materials and campaign assets",
        type: "marketing",
      },
    ],
  },
  {
    name: "Canopy",
    slug: "canopy",
    description:
      "Home exteriors brand — designed landing pages for multiple service lines and created marketing materials.",
    work: [
      {
        title: "Roofing Landing Page",
        description: "Service-specific landing page for roofing leads",
        type: "landing-page",
      },
      {
        title: "Siding Landing Page",
        description: "Service-specific landing page for siding leads",
        type: "landing-page",
      },
      {
        title: "Windows Landing Page",
        description: "Service-specific landing page for window replacement leads",
        type: "landing-page",
      },
      {
        title: "Lead Generation Flows",
        description: "Multi-step lead capture experiences",
        type: "lead-gen",
      },
      {
        title: "Marketing Creatives",
        description: "Ongoing design of marketing materials and campaign assets",
        type: "marketing",
      },
    ],
  },
  {
    name: "AdviserMatch",
    slug: "advisermatch",
    description:
      "Financial adviser matching platform — designed landing pages, lead generation flows, and marketing creatives.",
    work: [
      {
        title: "Warm Transfer Landing Pages",
        description: "Landing pages for warm transfer lead campaigns",
        type: "landing-page",
      },
      {
        title: "Lead Generation Flows",
        description: "Multi-step lead capture experiences for financial adviser matching",
        type: "lead-gen",
      },
      {
        title: "Marketing Creatives",
        description: "Ongoing design of marketing materials and campaign assets",
        type: "marketing",
      },
    ],
  },
  {
    name: "PCM Encore",
    slug: "pcm-encore",
    description:
      "Financial advisory firm specializing in retirement planning, investing, and wealth management.",
    work: [
      {
        title: "Family Office Landing Page",
        description: "Landing page for family office services",
        type: "landing-page",
      },
      {
        title: "Private Wealth Management Landing Page",
        description: "Landing page for private wealth management services",
        type: "landing-page",
      },
      {
        title: "Lead Generation",
        description: "Lead generation campaigns and assets",
        type: "lead-gen",
      },
      {
        title: "Webinar Landing Pages",
        description: "Landing pages for webinar events and registrations",
        type: "landing-page",
      },
      {
        title: "Marketing Creatives",
        description: "Design of marketing materials and campaign assets",
        type: "marketing",
      },
    ],
  },
  {
    name: "YES Brands",
    slug: "yes-brands",
    description:
      "Youth enrichment services spanning multiple brands across gymnastics, baseball, basketball, and more.",
    work: [
      {
        title: "Ta Da Gymnastics Redesign",
        description: "Site redesign for the Ta Da Gymnastics brand",
        type: "redesign",
      },
    ],
  },
];
