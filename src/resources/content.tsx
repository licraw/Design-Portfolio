import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Liam",
  lastName: "Crawshaw",
  name: "Liam Crawshaw",
  role: "Design Engineer + Frontend Engineer",
  avatar: "/icon.svg",
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
  image: "/api/og/generate?title=Liam%20Crawshaw%20%E2%80%94%20Product%20Designer%20%2B%20Design%20Engineer",
  label: "Home",
  title: `${person.name} — Product Designer + Design Engineer`,
  description:
    "Portfolio of Liam Crawshaw, a product designer and design engineer creating ecommerce experiences, design systems, responsive interfaces, and creative technology.",
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
        I’m a Portland-based product designer and design engineer with eight years of experience
        carrying digital experiences from early definition through production. My engineering
        background shapes how I design: interaction states, responsive behavior, accessibility,
        performance, and implementation constraints are part of the design process rather than
        considerations added afterward.
        <br />
        <br />
        At Fender, I worked closely with product and design teams on production interaction, motion,
        responsive UI, accessibility, and ecommerce experiences. My role was often to carry design
        intent through the states and constraints that emerge in working software, extending
        established systems where the product needed it.
        <br />
        <br />
        Independent projects expanded that work into direct ownership of product definition, visual
        design, responsive systems, and Figma design. Synth Lab, the Soft Arcade design system,
        PaintPDX, and Clean Strength show that ownership across digital products, websites, and
        physical product formats.
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
