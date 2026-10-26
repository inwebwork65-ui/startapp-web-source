---
name: StartApp
description: Editorial near-black and warm-paper homepage for a Misiones software house; oversized Geist type, real photographs, hairline rules, one orange.
colors:
  ink: "#0A0A0A"
  graphite: "#111111"
  coal: "#1A1A1A"
  paper: "#F5F5F2"
  bone: "#E9E8E3"
  accent: "#F2542D"
  accent-ink: "#B8300F"
  slate: "#4A4A47"
  ash: "#6B6B66"
  fog: "#85857F"
  mist: "#A8A8A3"
typography:
  hero:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, min(8.2vw, 13svh), 9rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 7rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 4.2vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  section-y: "6rem"
  section-y-lg: "10rem"
  header: "5rem"
  control: "3.5rem"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "56px"
    padding: "0 28px"
  button-accent-hover:
    backgroundColor: "{colors.paper}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    height: "56px"
    padding: "0 28px"
  button-outline-light:
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    height: "56px"
    padding: "0 28px"
  header-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "44px"
    padding: "0 24px"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "56px"
  case-counter:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.meta}"
    padding: "10px 16px"
---

# Design System: StartApp

## Overview

**Creative North Star: "The Printed Annual Report"**

A long editorial homepage where oversized Geist type and real photographs carry credibility. Fields alternate between near-black ink and warm paper, with a single committed orange (taken from the logo mark) for the marquee, the closing call band and every action. There are no shadows, no glass, no gradients and no rounded corners; structure comes from hairline rules, scale contrast and whitespace.

The system is Spanish-language, Argentine-register and sober: it argues that StartApp builds and keeps running real systems by showing the products and the numbers at very large size, not by decorating. Density is generous; sections run 6rem to 10rem of vertical padding and headlines are allowed to take most of the width.

**Key Characteristics:**
- Alternating ink and paper fields; orange is the only chroma.
- Geist at weight 500 with tight negative tracking for display; Geist Mono only for data labels.
- Square corners everywhere (0px), 1px hairline rules, no shadows.
- Motion is reveal-driven: masked line rises, clip-path image reveals, scroll-drawn lines.
- The logo exists only as a white wordmark, so header and footer are always on ink.

## Colors

Two neutral fields, a warm mid-grey ladder, and one orange with a darker text-safe sibling.

### Primary
- **Signal Orange** (accent, #F2542D): the logo mark colour. Fills for the marquee band, closing call band, primary buttons, header CTA, the selected-service square, the timeline fill, focus outline, selection, caret. Text on it is always ink.
- **Burnt Orange** (accent-ink, #B8300F): the only orange permitted as text or a stroke on paper: required-field asterisks, error messages, invalid input border.

### Neutral
- **Ink** (#0A0A0A): dark field, body background, text on paper and on orange.
- **Graphite** (#111111) and **Coal** (#1A1A1A): declared dark step-ups for panels within ink fields.
- **Paper** (#F5F5F2): light field and text on ink; hairlines on ink are paper at 10 to 20% opacity.
- **Bone** (#E9E8E3): diagram panel and map backing on paper.
- **Slate** (#4A4A47): lead and body text on paper, form labels.
- **Ash** (#6B6B66): secondary text and definition-list terms on paper, placeholders.
- **Mist** (#A8A8A3): secondary text and inactive nav on ink.
- **Fog** (#85857F): legal line in the footer on ink.

### Named Rules
**The One Orange Rule.** Orange is a fill or a small mark, never body text on paper; on paper, orange text uses Burnt Orange. Orange fields carry ink text, never paper.
**The Ink or Paper Rule.** Every section is a full-bleed ink or paper field; no tints between, no gradients.

## Typography

**Display Font:** Geist (with system-ui, -apple-system, Segoe UI, sans-serif), stylistic sets ss01 and cv11 on.
**Body Font:** Geist.
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular, Menlo).

**Character:** A neutral grotesque pushed to poster scale and squeezed with negative tracking, next to a mono used only where the content is data.

### Hierarchy
- **Hero** (500, clamp(2.4rem, min(8.2vw, 13svh), 9rem), 0.94, -0.04em): the h1, three lines, height-capped so it fits the first viewport.
- **Display** (500, clamp(2.75rem, 6vw, 7rem), 0.98, -0.04em): section openers (Soluciones, Proceso).
- **Headline** (500, clamp(2.25rem, 4.2vw, 4.75rem), 1, -0.035em): case names, step names, contact heading.
- **Title** (400, clamp(1.6rem, 2.6vw, 2.5rem), 1.08, -0.025em): service tab names, metric labels, mobile menu links.
- **Lead** (400, clamp(1.125rem, 1.5vw, 1.5rem), 1.45): intro paragraphs, form input text.
- **Body** (400, 1.0625rem, 1.6): running text, definition lists; max width around 30 to 36rem.
- **Meta** (Geist Mono, 0.75rem, 1.4, 0.08em): project counters (01 / 04), step numbers, hero strip data, footer legal line.
- **Ledger numerals** (500, clamp(4.5rem, 13.5vw, 14rem), 0.86, -0.04em) and **Footer wordmark** (500, clamp(3.25rem, 11.5vw, 13rem), 0.9): one-off oversized set pieces for metrics and footer; tabular-nums on counts.

### Named Rules
**The Mono Is Data Rule.** Geist Mono appears only for counters, step numbers, place/coordinates and legal lines, never for headings or prose.
**The Balanced Headline Rule.** h1 to h3 use text-wrap: balance at weight 500; paragraphs use text-wrap: pretty.

## Layout

A single `.wrap` container: max 1680px, side padding clamp(1.25rem, 4vw, 4rem). Desktop composition is a 12-column grid with 8 to 40px gaps; content is deliberately offset (lead text starts at column 8; cases span 7 and 4 columns and flip sides alternately; timeline heading sticks in columns 1 to 5). Metrics are full-width ledger rows on a 12-column grid: numeral over 8 columns, label over 4.

Vertical rhythm: sections use py-24 to py-28 on mobile and py-40 to py-44 on desktop. The header is fixed, 5rem tall. Controls are 44px minimum (buttons 56px, header CTA 44px). Breakpoints: xs 480, sm 640, md 768, lg 1024, xl 1280, 2xl 1536. The hero is min-height 100svh.

## Elevation & Depth

Flat. There are no box-shadows anywhere. Depth comes from field contrast (ink against paper), 1px hairlines (ink at 20% on paper, paper at 10 to 20% on ink), photographs, and parallax. The only overlays are the header, which turns solid ink with a hairline bottom border after scroll, and flat ink scrims over photographs.

### Named Rules
**The Flat Rule.** No shadows, blur or glass. Separate with a rule or a field change.

## Shapes

Square. Radius is 0 on buttons, inputs, cards, panels, images and tags. Markers are small squares (selected service 10px, timeline node 12px, marquee separator 6px). Borders are 1px hairlines; the only 2px strokes are the focus underline on inputs, the accent timeline fill and the 2px focus outline. Images are clipped by rectangles and revealed bottom-up with clip-path.

## Components

### Buttons
- **Shape:** rectangular, 56px tall, 28px horizontal padding, weight 500, trailing 18px arrow (1.75 stroke) that travels 6px right on hover.
- **Accent (primary):** Orange fill, ink text; hover flips to paper fill.
- **Ink:** ink fill, paper text on paper fields; hover inverts to paper with ink text (submit button hovers to orange).
- **Outline light / dark:** 1px border at 40% of the text colour; hover fills solid with inverted text.
- **Transition:** colour 300ms, cubic-bezier(0.22, 1, 0.36, 1).

### ArrowLink
Inline text link with weight 500, animated 1px underline drawn left to right (500ms) via the link-line utility, and the same travelling arrow. 44px minimum height.

### Header
Fixed, 80px, transparent over the hero, solid ink with paper/10 hairline once scrolled or when the menu is open. White logo left; five links at 15px in mist, active paper with a 1px orange underline scaling in from the left; orange "Hablemos" button (44px) right. Below lg, a 44px square outlined menu button opens a full-height ink panel with title-size links separated by hairlines and a full-width orange call button.

### Marquee
Full-width orange band, 20px vertical padding, uppercase weight 500 terms at 0.06em tracking separated by 6px ink squares, translating -50% over 70s linear. Decorative (aria-hidden); stops under reduced motion.

### Service tab list
Vertical list of tabs split by 20% ink hairlines. Selected tab shows a 10px orange square and ink title; others are ash. The description opens by animating grid-template-rows. Beside it a sticky 4:3 bone panel swaps the diagram with a 400ms fade and 14px rise; arrow-key navigation, hover also selects.

### Ledger metrics rows
Ink field, paper/20 hairline between rows, huge numeral (counts up on entering view, tabular numerals, "+" suffix) beside a title-size label and mist description. Screen-reader text carries the value.

### ProjectCase
12-column article: photograph or product frame with parallax on one side, text on the other, flipping per case. A mono counter tab (ink, "01 / 04") sits on the image's top-left corner and turns orange on case hover. The product screenshot may overlay the photo's bottom-left on a white plate. Text side: headline, lead in slate, definition list, ArrowLink.

### Definition lists
Term in ash, value in ink, rows divided by 20% ink hairlines with a top hairline, 12 to 16px row padding. Used for case facts and contact details.

### Form fields
Underline inputs: no box, 56px height, 1px ink/40 bottom border, lead-size text, ash placeholders; focus thickens to 2px orange; invalid uses Burnt Orange border and a role="alert" message in 14px Burnt Orange. Labels 15px slate above; required marked with a Burnt Orange asterisk. Submit opens WhatsApp with the message prefilled.

### Footer
Ink field, oversized two-line wordmark line ("Software made in Misiones."), then a hairline, white logo, address, three link columns (mist, paper on hover, link-line underline), and a mono uppercase legal row under a second hairline.

### Timeline (Process)
Ordered list with a 1px ink/20 vertical rule and a 2px orange fill that draws with scroll (spring-smoothed scaleY). Each 12px square node fills orange when it passes the viewport midline.

### Motion grammar
Single easing cubic-bezier(0.22, 1, 0.36, 1) throughout.
- **Reveal:** fade plus 40px rise, 900ms, once at 20% visibility.
- **SplitLines:** headings rise line by line from overflow masks (108% to 0, 1050ms, 100ms stagger).
- **ImageReveal:** bottom-up clip-path (1300ms), vertical parallax (14 to 30px), 3% hover zoom over 1400ms.
- **Count-up** for metrics, **scroll-drawn timeline**, marquee, and the hero constellation (drifting pointer parallax, dashed flowing lines, pulsing ring).
- All of it collapses to static under prefers-reduced-motion.

## Do's and Don'ts

### Do:
- **Do** alternate full-bleed ink and paper fields; keep orange for the marquee, call band, actions and small markers.
- **Do** use Burnt Orange (#B8300F) for any orange text on paper.
- **Do** set display type at weight 500 with -0.025 to -0.04em tracking and reveal it line by line.
- **Do** separate content with 1px hairlines at 20% (paper on ink, ink on paper).
- **Do** keep every corner square and every surface flat.
- **Do** keep interactive targets at 44px minimum and honour reduced motion.

### Don't:
- **Don't** use box-shadows, blur, glass or gradients; the only gradient is the 1px currentColor underline mechanism.
- **Don't** put Signal Orange text on paper, or paper text on orange.
- **Don't** use Geist Mono for headings or prose.
- **Don't** place the logo on paper; only the white wordmark exists.
- **Don't** fall back to a centered hero plus repeated card grids.
