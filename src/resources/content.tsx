import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Liam",
  lastName: "Crawshaw",
  name: "Liam Crawshaw",
  role: "Design Engineer + Frontend Engineer",
  // TODO: Replace with a real portrait when one is available.
  avatar: "/images/avatar-placeholder.svg",
  email: "ltcrawshaw@gmail.com",
  location: "America/Los_Angeles",
  locationLabel: "Portland, Oregon",
  languages: [],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <>Newsletter signup is not currently available.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/licraw",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/liam-crawshaw",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  // TODO: Replace with a portfolio-specific social sharing image.
  image: "/images/og/home-placeholder.svg",
  label: "Home",
  title: `${person.name} — ${person.role}`,
  description:
    "Liam Crawshaw designs and builds interactive products at the intersection of design, engineering, and creative technology.",
  headline: (
    <>
      Liam Crawshaw
      <br />
      <Text as="span" onBackground="neutral-weak">
        Design Engineer + Frontend Engineer
      </Text>
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Soft Arcade Synth Lab</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/soft-arcade-synth-lab",
  },
  subline: (
    <>
      I design and build interactive products at the intersection of design, engineering, and
      creative technology.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About — ${person.name}`,
  description: "I’m a Portland-based design engineer and frontend engineer.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a Portland-based design engineer and frontend engineer who has spent most of my career
        working at the intersection of design and code.
        <br />
        <br />
        In product teams, I’ve traditionally been the engineer who understands the design language,
        works comfortably in Figma, and cares about carrying design intent all the way through
        implementation. I’ve worked closely with product designers throughout my career, learning
        from them, filling in the interaction details that emerge between static designs and working
        software, and extending established systems when new states or components are needed.
        <br />
        <br />
        That relationship with design started much earlier. I began in tech building WordPress
        sites, where solving a problem might mean writing code, opening GIMP to edit an asset, or
        designing an icon myself. Over time, that gave me the confidence to take on more direct
        design work — including product labels and ecommerce design for Clean Strength, the redesign
        of PaintPDX, the Soft Arcade design system, and most recently Soft Arcade Synth Lab.
        <br />
        <br />
        Music and audio technology were also what originally pulled me toward software. Today I’m
        especially interested in creative tools, audio products, interaction design, design systems,
        and emerging ways AI can work alongside people without making the interface disappear.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Fender Musical Instruments Corporation",
        timeframe: "Mar 2022 – Apr 2026",
        role: "Software Engineer / Full Stack Engineer",
        achievements: [
          "Built production experiences for musicians across Fender Play and Fender’s multi-brand ecommerce platform, working closely with product and design teams on interaction, motion, responsive UI, accessibility, frontend architecture, and performance.",
          "Selected work includes the Fender Product Gallery and Fender Play First Song onboarding experience.",
        ],
        images: [],
      },
      {
        company: "Independent Design & Development",
        timeframe: "2018 – Present",
        role: "",
        achievements: [
          "Design and development work spanning Soft Arcade, Synth Lab, PaintPDX, Clean Strength, and other independent projects.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Selected areas",
    skills: [
      {
        title: "Design",
        description: (
          <>
            Figma, interaction design, design systems, component libraries, prototyping, responsive
            design, accessibility, and visual design.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Engineering",
        description: (
          <>
            React, TypeScript, Next.js, CSS, animation, frontend performance, browser APIs, and
            production UI systems.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Creative technology",
        description: (
          <>Tone.js, Web Audio, browser-based music tools, WebMCP, and agentic interfaces.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Writing — ${person.name}`,
  description: `Writing by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Selected work — ${person.name}`,
  description:
    "Product design, design engineering, frontend engineering, and visual design work by Liam Crawshaw.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery — ${person.name}`,
  description: `A future image gallery by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
