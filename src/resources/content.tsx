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
  description: `${person.name} is a Portland-based design engineer and frontend engineer.`,
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
        Liam Crawshaw is a Portland-based frontend engineer and design engineer working across
        product interfaces, design systems, ecommerce, and creative technology. His background is
        primarily in software engineering, with years of experience collaborating closely with
        product and design teams and increasingly owning design, prototyping, interaction, and
        systems work.
        <br />
        <br />
        Music and audio technology were an important part of his path into software and remain a
        focus of his independent product work.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Fender Musical Instruments Corporation",
        timeframe: "TODO: Add verified dates",
        role: "Frontend Engineer",
        achievements: [
          "Built production frontend experiences across Fender products and multi-brand ecommerce storefronts in collaboration with product and design teams.",
          "Work represented in this portfolio includes Fender Product Gallery and Fender Play’s First Song onboarding experience.",
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
    title: "Selected technical areas",
    skills: [
      {
        title: "Product and systems",
        description: (
          <>Figma, design systems, prototyping, accessibility, and interaction design.</>
        ),
        tags: [{ name: "Figma", icon: "figma" }],
        images: [],
      },
      {
        title: "Frontend engineering",
        description: (
          <>React, TypeScript, Next.js, CSS, frontend performance, animation, and browser APIs.</>
        ),
        tags: [{ name: "React" }, { name: "TypeScript" }, { name: "Next.js", icon: "nextjs" }],
        images: [],
      },
      {
        title: "Creative technology",
        description: <>Tone.js, Web Audio, and browser-based music tools.</>,
        tags: [{ name: "Tone.js" }, { name: "Web Audio" }],
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
