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
| 1 | Soft Arcade Synth Lab | `soft-arcade-synth-lab` | Product Design + Design Engineering; flagship browser music tool | No public URL confirmed | 12 Figma artifacts exported. Missing: captures of the implemented product |
| 2 | Soft Arcade Design System V1 | `soft-arcade-design-system` | Design Systems; audit, foundations, components, patterns, and Synth Lab application | No public URL confirmed | 8 Figma artifacts exported; complete |
| 3 | PaintPDX Redesign & Rebuild | `paintpdx-redesign` | Product Design + Frontend Development; preserve character while modernizing | [paintpdx.com](https://paintpdx.com) | 7 assets: live captures (desktop + mobile) and design-file artifacts. No faithful before state found |
| 4 | Clean Strength — Label Design | `clean-strength-labels` | Visual Design / Packaging; multi-product label system | None confirmed | Three label assets supplied; complete |
| 5 | Fender Product Gallery | `fender-product-gallery` | Interaction Design + Frontend Engineering; production realization of design direction | No public product URL confirmed | YouTube walkthrough embed supplied; complete |
| 6 | Fender Play — First Song Onboarding | `fender-play-first-song` | Motion + Interaction Engineering; filling motion gaps between static states | No public product URL confirmed | YouTube walkthrough embed supplied; complete |

See [portfolio-media-map.md](portfolio-media-map.md) for per-file sources and placement. Media slots render nothing until the asset exists in `public/`, so no fake or broken imagery is shown.

## Identity and external links

- Liam Crawshaw
- Design Engineer + Frontend Engineer
- Portland, Oregon (`America/Los_Angeles` is retained separately for the template clock)
- [GitHub](https://github.com/licraw)
- [LinkedIn](https://www.linkedin.com/in/liam-crawshaw)
- [Email](mailto:ltcrawshaw@gmail.com)

## Remaining source-material needs

- Set `NEXT_PUBLIC_BASE_URL` when Liam’s stable production domain is known.
- Supply a portrait if the About-page avatar is enabled in the future.
- Add verified employment dates and any additional resume history Liam wants public.
- Add verified project timeframes only if the final design needs dates.
- Add Synth Lab and Soft Arcade URLs; add Synth Lab GitHub only if the repository is public.
- Confirm PaintPDX implementation technologies.
- Add safe public URLs for Fender work where applicable.
- Supply the Clean Strength label exports (paths in the media map).
- Grant Figma edit access to `lgvvX3QlXKGbBYnwb3ZCJY` if it holds pre-redesign PaintPDX material.

## Template behavior for the next agent

Projects are discovered from `src/app/work/projects/*.mdx` and sorted by the explicit numeric `order` frontmatter field. `publishedAt` remains supported for future content but is intentionally omitted from these projects so the interface does not present invented dates. `subtitle` holds each project’s role/category and appears above the project title. Empty `images` arrays render no project carousel or hero media. The footer’s required Once UI attribution remains intact.
