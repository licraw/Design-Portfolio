# Portfolio media map

Every image in `public/images/projects/` with its source, what it demonstrates, and where it appears. Media slots that are still empty are listed per project under **Still needed**.

Figure rendering: `src/components/work/Figure.tsx` exposes `<Figure>` and `<FigureRow>` to MDX. Both check that the file exists in `public/` before rendering, so a missing asset produces nothing rather than a broken image. Aspect ratio is read from the file header (`src/components/work/imageSize.ts`) so figures reserve the right space without hardcoded dimensions. Remote YouTube/Vimeo URLs are rendered as 16:9 embeds.

---

## 1. Soft Arcade Synth Lab

Source: Figma `IepLZXDspQ6ma22kDlQVWx` — *Soft Arcade Synth Lab*.

| File | Figma node | Demonstrates | Placement |
| --- | --- | --- | --- |
| `synth-lab-desktop-drum-challenge.png` | `106:3015` — Final/Desktop, Challenge 0 | Full product at 16:9; drum step sequencer | Frontmatter `images[0]` → project card + page hero |
| `synth-lab-desktop-lesson-active.png` | `32:5` — Final/Desktop, Lesson active | The whole instrument: transport, four lanes, focused editor, dual-label filter control | Opening figure, "What it is" |
| `synth-lab-exploration-parameter-labels.png` | `20:4` — Exploration D | Three label options side by side with the rejected/selected verdicts | "How should an unfamiliar parameter read?" |
| `synth-lab-exploration-knobs-vs-sliders.png` | `20:57` — Exploration E | Knob vs horizontal slider vs vertical fader | "Sliders, not knobs" |
| `synth-lab-adsr-envelope-states.png` | `39:84` — ADSR Envelope component set | Envelope as one shape; agent-changed state shows the prior curve dashed | "One deliberate exception" |
| `synth-lab-exploration-track-workspace.png` | `18:2` — Exploration B | Three ways to fit four synths on one screen | "Fitting four synths on one screen" |
| `synth-lab-parameter-slider-states.png` | `26:74` — Parameter Slider component set | Six component states, incl. highlighted and agent-changed | "Built on the design system" |
| `synth-lab-responsive-narrow-834.png` | `60:2` — Narrow 834 | Coach rail relocating at 834px | Responsive `FigureRow` |
| `synth-lab-responsive-mobile-390.png` | `65:416` — Mobile 390 (2× export) | Track lanes becoming a selector at 390px | Responsive `FigureRow` |
| `synth-lab-exploration-agent-presence.png` | `19:2` — Exploration C | Chat panel vs inline cards vs inline + collapsed log | "Agentic interface" |
| `synth-lab-agent-action-card-states.png` | `29:114` — Agent Action Card component set | Applied / working / error, with hear-before, hear-after and undo | "Agentic interface" |
| `synth-lab-desktop-agent-change.png` | `55:1043` — Final/Desktop, Agent change applied | An agent change in situ: card in the editor, controls marked, activity in the transport | "Agentic interface" |

Deliberately excluded: page `12 — Design Review` (`83:4`) is the strongest decision artifact but is text-dense at 1600×2327 and unreadable at portfolio scale — its content was written into the copy instead. Pages `01`, `02`, `03`, `10`, `11` were not used.

**Still needed:** screenshots or a recording of the *implemented* product. Every Synth Lab image is currently a design frame, captioned as such. A capture of the running app — especially the agent interaction — would substantiate the "it became real software" claim directly.

---

## 2. Soft Arcade Design System V1

Source: Figma `PtTVVeJV510W5GMowTEbMu` — *Soft Arcade Design System V1*.

| File | Figma node | Demonstrates | Placement |
| --- | --- | --- | --- |
| `design-system-current-product-desktop.png` | `111:8` — Current Product, portal row | Two unretouched production screens; the language that already existed | Frontmatter `images[0]` + opening figure |
| `design-system-audit-themes.png` | `26:99` — Audit root | Eight themes, each tagged consistent / inconsistent / partial / deferred | "The audit came first" |
| `design-system-foundations-typography.png` | `88:8` — Foundations, Typography | Semantic type ramp | "Foundations" |
| `design-system-foundations-color.png` | `86:2` — Foundations, Color | Semantic tokens over primitives | "Foundations" |
| `design-system-component-button-states.png` | `101:39` — Components, Button | Variants and states as system-owned rather than per-game CSS | "Components with their states" |
| `design-system-pattern-game-page-shell.png` | `64:45` — Patterns, Game Page Shell | A composition documented as a pattern, not forced into a component | "Patterns" |
| `design-system-production-validation.png` | `109:48` — System Reference, Production Validation | Reconstructions checked against production, with remaining differences | "Checked against production" |
| `design-system-foundations-responsive.png` | `62:77` — Foundations, Responsive | Breakpoint treatment | Exported, not currently placed — spare |

**Still needed:** nothing blocking.

---

## 3. PaintPDX Redesign & Rebuild

Two sources: the live site captured through Figma code-to-canvas into scratch file `6v1KIEQpkztzUqB5Zf2ots`, and the redesign design file `fZynXGuJ9MaKTkHy5E40ye`.

| File | Source | Demonstrates | Placement |
| --- | --- | --- | --- |
| `paintpdx-homepage-hero-desktop.jpg` | Live capture, node `6:2` (16:9 crop frame) | Header, nav and hero of the built site | Frontmatter `images[0]` + opening figure |
| `paintpdx-services-section.jpg` | Live capture, node `2:146` (2×) | Photographic service cards with the interior/exterior toggle | "The built site" |
| `paintpdx-about-section.jpg` | Live capture, node `2:101` (2×) | Credibility block and statistic cards | "The built site" |
| `paintpdx-homepage-mobile.jpg` | Live site rendered in a 390px viewport, Chrome | Mobile nav and hero | Responsive `FigureRow` |
| `paintpdx-services-mobile.jpg` | Live site rendered in a 390px viewport, Chrome | Service card and toggle surviving the small screen | Responsive `FigureRow` |
| `paintpdx-style-guide.png` | Design file, node `49801:176` | Type ramp and green scale defined before layout | "Designed before it was built" |
| `paintpdx-mobile-menu-design.png` | Design file, node `58841:96` | Mobile menu design, estimate action kept reachable | "Responsive" |

Removed after review: a full-page homepage capture. It carried dead space from the reCAPTCHA badge in its bounding box and repeated what the hero and section shots already show.

**Before state — not shown, deliberately.** No faithful pre-redesign capture could be sourced:

- Wayback has snapshots of the old WordPress site (the page weight drops from ~64KB on `20250123032841` to ~7.6KB on `20250215065244`, which brackets the rebuild), but the archived snapshots no longer render with their stylesheets — they load as unstyled HTML and would misrepresent the old design.
- Figma file `lgvvX3QlXKGbBYnwb3ZCJY` ("Portland Painting & Restoration", Jan 2025) may hold pre-redesign material but returns "no edit access" over MCP. **If Liam grants edit access to that file, it is the most likely source of a real before state.**
- No original-site assets exist in this repository.

The case study says plainly that the before state is not shown rather than reconstructing one.

---

## 4. Fender Product Gallery

**Awaiting supplied media.** The page opens with a figure pointing at:

```
public/images/projects/fender-product-gallery/fender-product-gallery.mp4
```

Drop the MP4 at exactly that path and it appears at the top of the case study with no other change. Until then the figure renders nothing — there is no broken player and no placeholder.

No Fender imagery was scraped or invented.

**Still needed:** the product gallery MP4. A 16:9 poster frame at `fender-product-gallery-poster.jpg` would also improve the unplayed state (pass it via the figure's `poster` prop).

---

## 5. Fender Play — First Song Onboarding

| Source | Demonstrates | Placement |
| --- | --- | --- |
| `https://www.youtube.com/embed/FnE3qncJIqo` (supplied by Liam) | The onboarding motion in production | Sole media; first element on the page, above all copy |

Rendered as a 16:9 embed through `Figure`. Per instruction this is the only media on the page — no static substitutes.

**Still needed:** nothing.

---

## 6. Clean Strength — Label Design

**Awaiting supplied media.** The page references:

```
public/images/projects/clean-strength/clean-strength-label-01.jpg
public/images/projects/clean-strength/clean-strength-label-02.jpg
public/images/projects/clean-strength/clean-strength-labels-applied.jpg
```

The first two render as a two-up row, the third full width. Any that are missing are skipped. Filenames can be changed in `src/app/work/projects/clean-strength-labels.mdx` if the real exports are named differently.

**Still needed:** label exports and/or product photography. Until then this project has no card image on the homepage, which is why its card currently shows text only.

---

## Cross-project notes

- Formats: PNG for flat UI artifacts, JPEG for photography-heavy PaintPDX captures. Nothing is exported at full Figma resolution; wide artifacts land at 1200–2200px, mobile frames at 2×.
- Alt text is written per figure and describes what the artifact shows, not just its subject.
- Projects without a card image (`fender-product-gallery`, `fender-play-first-song`, `clean-strength-labels`) render no carousel at all — `ProjectCard` skips it for an empty `images` array instead of leaving an empty band.
