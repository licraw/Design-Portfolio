# Portfolio content map

## Information architecture

- `/` — Liam’s identity, positioning, featured Synth Lab link, and ordered project list.
- `/work` — all six portfolio projects.
- `/about` — concise introduction, verified Fender representation, and selected technical areas.
- `/blog` — disabled in route configuration; framework route and empty posts directory retained.
- `/gallery` — disabled in route configuration; framework route retained.
- Newsletter and calendar booking are disabled.

No project route is password protected.

## Project map

| Order | Project | Slug | Positioning | Available links | Assets |
| --- | --- | --- | --- | --- | --- |
| 1 | Soft Arcade Synth Lab | `soft-arcade-synth-lab` | Product Design + Design Engineering; flagship browser music tool | TODO: confirmed Synth Lab, Soft Arcade, and optionally public GitHub URLs | Missing product overview, controls, sequencer, mobile/touch, and agentic-interface captures |
| 2 | Soft Arcade Design System V1 | `soft-arcade-design-system` | Design Systems; audit, foundations, components, patterns, and Synth Lab application | TODO: confirmed Soft Arcade URL | Missing audit boards, foundations, components, patterns, and Synth Lab application examples |
| 3 | PaintPDX Redesign & Rebuild | `paintpdx-redesign` | Product Design + Frontend Development; preserve character while modernizing | [paintpdx.com](https://paintpdx.com) | Missing safe original-site captures, redesigned screens, and responsive implementation captures |
| 4 | Fender Product Gallery | `fender-product-gallery` | Frontend Engineering + Interaction Design; production realization of design direction | TODO: safe public product URLs | Missing responsive, sticky, carousel/masonry, 360-media, and loading-state captures |
| 5 | Fender Play — First Song Onboarding | `fender-play-first-song` | Motion + Interaction Engineering; filling motion gaps between static states | TODO: safe public product URL if applicable | Missing safe screen recording/video and representative static frames |
| 6 | Clean Strength — Label Design | `clean-strength-labels` | Visual Design / Packaging; concise image-led project | None confirmed | Missing final label exports and/or production photography |

Empty asset directories matching this map exist under `public/images/projects/`. Project frontmatter intentionally uses empty image arrays until real assets are supplied; no fake screenshots are shown.

## Identity and external links

- Liam Crawshaw
- Design Engineer + Frontend Engineer
- Portland, Oregon (`America/Los_Angeles` is retained separately for the template clock)
- [GitHub](https://github.com/licraw)
- [LinkedIn](https://www.linkedin.com/in/liam-crawshaw)
- [Email](mailto:ltcrawshaw@gmail.com)

## Remaining content TODOs

- Set `NEXT_PUBLIC_BASE_URL` when Liam’s stable production domain is known.
- Replace the neutral avatar and Open Graph placeholders with real assets.
- Add verified employment dates and any additional resume history Liam wants public.
- Add verified project timeframes only if the final design needs dates.
- Add Synth Lab and Soft Arcade URLs; add Synth Lab GitHub only if the repository is public.
- Confirm PaintPDX implementation technologies.
- Add safe public URLs for Fender work where applicable.
- Add real imagery listed in the project table.
- Refine case-study writing in the later content/design pass without changing the factual boundaries recorded here.

## Template behavior for the next agent

Projects are discovered from `src/app/work/projects/*.mdx` and sorted by the explicit numeric `order` frontmatter field. `publishedAt` remains supported for future content but is intentionally omitted from these projects so the interface does not present invented dates. `subtitle` holds each project’s role/category and appears above the project title. Empty `images` arrays render no project carousel or hero media. The footer’s required Once UI attribution remains intact.
