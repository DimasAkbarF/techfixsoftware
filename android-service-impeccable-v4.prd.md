# ANDROIDSERVICE — UI/UX REDESIGN PRD
## Version 4.0 — Impeccable-first, Human Professional, Anti-AI-Slop

**Document type:** Production UI/UX redesign specification  
**Target agent:** OpenCode  
**Primary design authority:** Impeccable  
**Base product:** AndroidService — Android software/service marketplace  
**Priority:** P0 — visual quality, usability, trust, responsive behavior

---

# 1. PURPOSE

Redesign the existing AndroidService interface into a professional, friendly, trustworthy Indonesian Android software-service platform.

The current implementation is functional, but the supplied desktop screenshot still feels too close to an AI-generated SaaS/service template:

- Hero is too sparse and leaves too much unused vertical space.
- Typography hierarchy is not distinctive enough.
- The small eyebrow/kicker above the hero heading adds generic marketing-template behavior.
- Search is important to the product but does not visually feel like the primary discovery mechanism.
- The dark problem panel competes too strongly with the actual service discovery flow.
- Category cards are repetitive and overly card-based.
- Rounded surfaces are used too consistently.
- Blue accent is visually predictable rather than semantic.
- Footer is missing the visual weight and information architecture expected from a real company website.
- Brand identity is weak because the actual `logo.png` asset is not being treated as a first-class brand asset.

The redesign must NOT solve these problems by adding more decoration.

The goal is:

> clarity + hierarchy + trust + friendliness + restraint + strong product identity.

The final result should feel like a real Indonesian technology/service company, not a generated landing-page template.

---

# 2. NON-NEGOTIABLE DIRECTIVES

Before editing code, OpenCode MUST:

1. Read this PRD completely.
2. Read the existing base PRD and current UI implementation.
3. Inspect the actual source tree and component architecture.
4. Inspect the current running application.
5. Locate the existing `logo.png` in the repository.
6. Verify that Impeccable is installed and available.
7. If Impeccable is not installed, install it using the project's supported workflow.
8. Run `/impeccable init` if project context is missing.
9. Run `/impeccable critique` against the current homepage before making major visual changes.
10. Identify root causes before modifying components.
11. Preserve all working business logic.

Do NOT immediately rewrite the entire application.

Do NOT rebuild the site from a generic template.

Do NOT replace functional routes, data, search behavior, contact links, SEO metadata, or service logic unless the current implementation is actually broken.

The screenshot is evidence of current problems, NOT a pixel-perfect target.

---

# 3. IMPECCABLE WORKFLOW — MANDATORY

Use Impeccable as the primary design vocabulary and review system.

Recommended workflow:

```text
/impeccable init
/impeccable critique the homepage
/impeccable layout the homepage
/impeccable typeset the interface
/impeccable colorize the interface
/impeccable distill the interface
/impeccable polish the homepage
/impeccable audit the application
```

Use specialist commands only where they are useful.

Do not mechanically run every command if a command is irrelevant.

The important sequence is:

```text
AUDIT
→ ROOT CAUSE
→ DESIGN SYSTEM
→ LAYOUT
→ TYPE
→ COLOR
→ COMPONENTS
→ FOOTER
→ RESPONSIVE
→ POLISH
→ AUDIT
→ BUILD VALIDATION
```

Also run the Impeccable detector where available:

```bash
npx impeccable detect src/
```

If the application runs locally:

```bash
npx impeccable detect http://localhost:3000
```

Do not claim a check passed unless it actually ran.

---

# 4. PRODUCT PERSONALITY

The interface must communicate:

- Professional
- Friendly
- Technical
- Reliable
- Calm
- Human
- Helpful
- Precise
- Modern Indonesian technology business

The interface must NOT communicate:

- Cyberpunk
- Hacker aesthetic
- Gaming
- Crypto
- Generic AI startup
- Generic SaaS dashboard
- Cheap repair-shop aesthetic
- Marketplace clone
- Overly corporate enterprise software
- Futuristic neon UI

The product should feel like:

> "Teknisi Android yang paham masalah saya dan menjelaskan solusi dengan jelas."

Not:

> "AI-generated startup landing page."

---

# 5. ANTI-AI-SLOP — HARD REQUIREMENT

The final implementation MUST actively avoid AI-generated UI defaults.

Do NOT use:

- Purple/blue gradient backgrounds.
- Gradient text as the primary visual treatment.
- Glassmorphism.
- Frosted-glass panels.
- Floating blobs.
- Decorative radial glows.
- Neon effects.
- Excessive shadows.
- Excessive border radius.
- Every section wrapped in a card.
- Card inside card inside card.
- Excessive pill controls.
- Repeated icon tiles.
- Oversized decorative icons.
- Fake testimonials.
- Fake customer counts.
- Fake ratings.
- Fake review counts.
- Fake urgency.
- Fake countdowns.
- Fake trust statistics.
- Decorative emoji.
- Excessive animation.
- Auto-scrolling marquees.
- Pulsing status dots when nothing changes.
- Decorative blinking cursors.
- Generic "AI-powered" language.
- Repeated identical 3/4-card grids.
- Generic startup copy.
- Every heading with one colored word.
- Tiny uppercase labels above every heading.
- Unnecessary numbered section labels.
- Stock imagery unrelated to AndroidService.
- Huge hero typography that destroys content density.
- Arbitrary asymmetric layouts that do not improve the task.

Important:

The latest Impeccable guidance explicitly treats many of these patterns as recognizable AI-slop signals. Treat the detector and critique as quality gates, not optional decoration advice.

---

# 6. IMPORTANT CHANGE: REMOVE THE HERO KICKER

The current homepage contains:

```text
Layanan teknis Android profesional
```

above:

```text
Butuh Bantuan untuk Software Android?
```

Do NOT keep this as a generic eyebrow/kicker.

Use the latest Impeccable direction: avoid unnecessary kicker-above-heading patterns.

Instead, let the heading establish hierarchy directly.

Preferred:

```text
Butuh bantuan untuk
software Android?
```

Supporting text follows immediately.

If a short contextual label is genuinely needed, it must have functional meaning and must not exist merely as decoration.

---

# 7. BRAND ASSET — LOGO

There is an existing `logo.png` asset in the project.

OpenCode MUST:

1. Locate the actual file.
2. Inspect its dimensions and appearance.
3. Use the real asset.
4. Do NOT recreate it with CSS.
5. Do NOT replace it with a random icon.
6. Do NOT use an emoji as the logo.
7. Do NOT generate a new logo.
8. Preserve its aspect ratio.
9. Use an appropriate `alt` attribute.
10. Ensure it remains sharp on high-density displays.

Use the actual logo in:

- Desktop header.
- Mobile header.
- Footer brand block.
- Favicon/site metadata if appropriate and compatible.
- Any other location where the brand mark is genuinely useful.

If `logo.png` cannot be found, stop before inventing a replacement and report the missing asset.

---

# 8. DESIGN SYSTEM

Create or update:

```text
design-system/MASTER.md
```

The document must define:

- Brand colors
- Semantic colors
- Typography
- Container widths
- Spacing
- Radius
- Borders
- Shadows
- Buttons
- Inputs
- Search
- Cards
- Navigation
- Footer
- Dialogs
- Responsive behavior
- Accessibility
- Motion
- Anti-pattern rules

The implementation should use shared tokens rather than arbitrary values scattered throughout components.

---

# 9. COLOR SYSTEM

Direction:

```text
Ink / Off-white / Blue
```

Starting semantic palette:

```text
background       #F8FAFC
surface          #FFFFFF
surface-subtle   #F1F5F9

text-primary     #0F172A
text-secondary   #475569
text-muted       #64748B

brand            #0877B5
brand-hover      #06669C
brand-active     #055A8A
brand-subtle     #E8F4FB

border           #E2E8F0
border-strong    #CBD5E1

dark-surface     #111827
dark-elevated    #1F2937
dark-text        #F8FAFC
dark-secondary   #CBD5E1

success          #15803D
warning          #B45309
danger           #B91C1C
info             #0369A1
```

These are starting values.

Impeccable may adjust exact values after inspecting the current implementation and checking contrast.

Color rules:

Blue should communicate meaning.

Use blue primarily for:

- Primary CTA.
- Search action.
- Important links.
- Active navigation.
- Focus states.
- Selected filters.
- Important product emphasis.

Do NOT make:

- every heading blue;
- every icon blue;
- every card blue;
- every border blue;
- every section blue.

The accent should become recognizable because it is restrained.

---

# 10. TYPOGRAPHY

Use one primary font family unless the existing project has a strong reason to use another.

Prioritize:

- Excellent Indonesian language support.
- High legibility.
- Clear numeral rendering.
- Strong heading/body distinction.
- Comfortable reading width.

Create explicit tokens:

```text
display
h1
h2
h3
body-lg
body
body-sm
label
caption
```

Do not scatter arbitrary font sizes throughout components.

Recommended behavior:

```text
H1:
strong, compact, confident

Body:
comfortable line-height

Readable measure:
approximately 55–75 characters
```

Avoid oversized 64–80px hero headings simply because they look impressive.

Desktop H1 should normally land around 44–56px depending on the chosen typeface and actual content width.

Mobile H1 should normally land around 32–40px.

Do not use extreme negative letter-spacing.

---

# 11. GLOBAL LAYOUT

Use a consistent content container.

Target:

```text
max-width: 1120–1200px
```

Choose the exact value after inspecting the existing app.

The same horizontal alignment should be shared by:

- Header.
- Hero.
- Category section.
- Service grids.
- Remote support section.
- FAQ.
- Footer.

Avoid each section having a different invisible container.

Desktop should feel spacious but not empty.

---

# 12. HEADER REDESIGN

Current header is structurally acceptable but visually too generic.

Target:

```text
[logo + brand]     Home  Layanan  Kategori  Cara Kerja  Remote Guide  FAQ     [Search]
```

Requirements:

- Height approximately 64–72px.
- White/off-white surface.
- Thin bottom border.
- No floating-card effect.
- No oversized shadow.
- Logo vertically centered.
- Navigation vertically centered.
- Search icon aligned with navigation.
- Active page uses a subtle brand-tinted state.
- Navigation spacing is balanced.
- Header content uses the same main container as the page.

Active navigation:

```text
background: brand-subtle
color: brand
font-weight: 600
```

Do not create a large rounded rectangle around the active item.

The header should feel like part of the page, not a floating dashboard widget.

---

# 13. MOBILE HEADER

Target:

```text
[logo]                         [search] [menu]
```

Requirements:

- Minimum touch target: 44px.
- Search and menu icons visually balanced.
- No horizontal overflow.
- No oversized header.
- Logo remains recognizable.
- Menu button has a clear hover/focus/pressed state.

When menu opens:

```text
--------------------------------
[logo]                         [X]

Home
Layanan
Kategori
Cara Kerja
Remote Guide
FAQ

--------------------------------
Cari layanan
--------------------------------
```

The menu must NOT become:

- a giant gray block;
- an oversized modal;
- a list with huge empty gaps.

Use consistent navigation row height.

Active item:

```text
subtle brand-subtle background
brand text
semibold
```

Handle:

- `aria-expanded`
- `aria-controls`
- keyboard focus
- Escape
- scroll locking
- focus return
- z-index

---

# 14. HERO — MAJOR REDESIGN

The current hero has too much empty space.

Use a deliberate two-column structure.

Desktop:

```text
┌──────────────────────────────────────────────────────┐
│                                                      │
│  Butuh bantuan untuk             Mulai dari masalah  │
│  software Android?               Anda, bukan istilah │
│                                  teknis.             │
│  Supporting copy                 [problem option]    │
│                                  [problem option]    │
│  [Lihat semua layanan]           [problem option]    │
│                                                      │
│  [Cari layanan atau masalah...]                      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

Do not make the right panel visually overpower the left side.

The right-side problem selector must feel like a useful diagnostic shortcut.

Suggested content:

```text
Mulai dari masalah Anda

HP stuck di logo?
Sering restart sendiri?
Error setelah update?
Ingin root atau ganti ROM?
```

Interaction:

- Selecting a problem should lead toward relevant service discovery.
- Hover/focus states should be subtle.
- Avoid excessive motion.
- Avoid making every option look like a giant card.

Hero objectives:

Within a few seconds the user should understand:

1. What AndroidService does.
2. What kind of problems it handles.
3. Where to search.
4. How to start.

Primary CTA:

```text
Lihat layanan
```

Secondary action can be:

```text
Konsultasi
```

Do not create five competing CTAs.

---

# 15. SEARCH — PRIMARY DISCOVERY FEATURE

Search is a core product interaction and must receive stronger hierarchy.

Homepage search:

```text
Cari layanan atau masalah...
```

Examples can appear below as quiet helper text:

```text
bootloop · root Android · flash firmware · unlock bootloader
```

Do not turn every suggestion into a pill.

Search should visually resemble a real product control, not a decorative landing-page input.

Requirements:

- Clear affordance.
- Search icon.
- Keyboard support.
- Accessible label.
- Visible focus.
- Appropriate height.
- Comfortable mobile sizing.

---

# 16. SEARCH DIALOG

Refine the search modal into a professional product dialog.

Structure:

```text
┌────────────────────────────────────────────┐
│ Cari layanan atau masalah...             X │
├────────────────────────────────────────────┤
│ Pencarian populer                          │
│                                            │
│ Bootloop     Root Android                  │
│ Flash firmware   Unlock bootloader         │
└────────────────────────────────────────────┘
```

Requirements:

- Dialog semantics.
- Focus moves into input.
- Escape closes.
- Close button >= 44px.
- Background interaction disabled.
- Overlay must not excessively black out the application.
- Modal width appropriate to viewport.
- Mobile version must behave like a proper bottom sheet or full-width dialog only if that improves usability.
- Do not use giant rounded containers.
- Popular searches should be compact controls, not pill soup.

---

# 17. CATEGORY SECTION

Current category cards feel like generic SaaS cards.

Redesign around service discovery.

Preferred visual model:

```text
Kategori layanan

Root Android
Unlock Bootloader
Fix Bootloop
Unbrick
Flash Firmware
Custom ROM
```

Each category should communicate:

- Name.
- Short purpose.
- Optional count only if real data exists.
- Clear interaction.

Do not force every category into a giant floating card.

Prefer:

- subtle borders;
- controlled surface contrast;
- compact icon;
- strong title;
- useful description;
- clear hover state.

If a category icon is used, it must communicate the category rather than exist as decoration.

---

# 18. SERVICE CARD REDESIGN

Service cards must stop looking like:

```text
[icon]
Title
Description
Learn more →
```

repeated 12 times.

Each service card should have stronger information hierarchy.

Example:

```text
Fix Bootloop

Perbaikan software untuk perangkat yang berhenti
di logo atau terus melakukan restart.

Masalah terkait:
bootloop · stuck logo · restart loop

Lihat layanan →
```

Use metadata only when real and useful.

Avoid fake:

- ratings;
- review counts;
- delivery times;
- customer counts.

Card rules:

- Moderate radius.
- Thin border.
- Minimal/no shadow.
- Strong surface contrast.
- Clear hover state.
- Clear clickable area.
- Consistent height only when it improves scanning.

---

# 19. REMOTE SUPPORT SECTION

The remote-support section should feel trustworthy rather than like a giant dark promotional card.

Use:

```text
Butuh bantuan langsung?

Kami dapat membantu memandu proses
secara remote sesuai kebutuhan perangkat Anda.

[Mulai konsultasi]
```

If WhatsApp / Telegram / AnyDesk are available, preserve their actual functionality.

Do not invent availability or response-time claims.

Dark section requirements:

- Strong text contrast.
- Calm composition.
- No gradient glow.
- No excessive decorative icons.
- One primary action.
- Secondary action only if useful.

---

# 20. FAQ SECTION

FAQ should answer real purchase/discovery concerns.

Prioritize:

- Apakah semua perangkat bisa diperbaiki?
- Apa yang perlu disiapkan sebelum konsultasi?
- Apakah data perangkat aman?
- Apakah root/custom ROM berisiko?
- Bagaimana proses konsultasi?
- Apakah bantuan remote tersedia?

Use accessible accordion behavior.

Do not place every FAQ inside a separate card.

---

# 21. FOOTER — PROFESSIONAL COMPANY FOOTER

This is a major redesign requirement.

The footer must make the website feel like a real company, not a one-page AI landing page.

Structure:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│ [LOGO]                                                       │
│ AndroidService                                               │
│ Teknisi software Android untuk membantu Anda                 │
│ memahami dan menyelesaikan masalah perangkat.                │
│                                                              │
│ Layanan              Panduan              Perusahaan          │
│ Root Android         Cara Kerja           Tentang             │
│ Bootloader            Remote Guide        FAQ                 │
│ Bootloop              Pusat Bantuan       Kontak              │
│ Firmware              FAQ                  Kebijakan           │
│ Custom ROM                                                  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ © 2026 AndroidService                    Indonesia            │
│                                                              │
│ Privacy · Terms · Contact                                    │
└──────────────────────────────────────────────────────────────┘
```

IMPORTANT:

Only show links/pages that actually exist.

Do not create dead links just to make the footer look complete.

Footer visual direction:

- Dark ink background OR a clearly differentiated off-white company footer.
- Prefer dark ink if it creates stronger brand closure.
- No gradient.
- No glass.
- No giant decorative shapes.
- No oversized social-media icon row.
- No fake company statistics.
- No fake certifications.
- No fake addresses.
- No fake legal claims.

Use the real `logo.png`.

Brand block:

```text
[logo]
AndroidService
Teknisi Software Android
```

Use a short, human description.

Footer columns should have real information architecture:

```text
Layanan
Panduan
Perusahaan
Bantuan
```

Use concise link lists.

Footer should have a strong top boundary.

Bottom row:

```text
© 2026 AndroidService
Semua hak dilindungi.
```

If legal/privacy/terms pages exist, link them.

If they do not exist, do not invent them.

Footer should feel approximately 2–3x more intentional than the current page's bottom area, but not unnecessarily tall.

---

# 22. FOOTER RESPONSIVE BEHAVIOR

Desktop:

```text
Brand block | Layanan | Panduan | Perusahaan/Bantuan
```

Tablet:

```text
Brand block
Layanan | Panduan
Perusahaan | Bantuan
```

Mobile:

```text
[logo]
AndroidService
description

Layanan
links

Panduan
links

Perusahaan
links

--------------------------------
copyright
legal
```

Do not make footer columns microscopic.

Use accordion only if the number of links becomes difficult to scan.

---

# 23. BUTTON SYSTEM

Define:

### Primary

Used for the most important action.

Example:

```text
Lihat layanan
Mulai konsultasi
```

### Secondary

Used for important but non-primary actions.

### Ghost/text

Used for low-emphasis navigation.

Avoid:

- gradient buttons;
- glowing buttons;
- oversized pill buttons;
- excessive button variants.

Buttons should have:

- visible hover;
- visible focus;
- pressed state;
- disabled state;
- minimum 44px touch target on mobile.

---

# 24. BORDER RADIUS

Reduce the current "everything is rounded" feeling.

Suggested:

```text
small controls: 6–8px
inputs: 8–10px
cards: 10–12px
large sections: 12–16px only when justified
```

Do not use 9999px / full-pill radius unless the control is intentionally compact and pill-shaped.

---

# 25. SHADOWS

Use shadows sparingly.

Most surfaces should rely on:

```text
surface contrast
+
border
+
spacing
```

Use shadow only where elevation has semantic meaning:

- Dialog.
- Dropdown.
- Floating navigation if required.

Avoid shadow on every card.

---

# 26. MOTION

Motion must communicate state.

Allowed:

- subtle hover transition;
- focus transition;
- menu open/close;
- dialog open/close;
- pressed feedback.

Avoid:

- floating cards;
- bouncing buttons;
- pulsing status indicators;
- parallax;
- decorative scroll animation;
- auto-playing animation;
- excessive entrance animations.

Support:

```css
prefers-reduced-motion
```

---

# 27. ACCESSIBILITY

Required:

- Semantic HTML.
- Correct heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Minimum 44px touch targets.
- Accessible menu button.
- `aria-expanded`.
- `aria-controls`.
- Search dialog semantics.
- Focus management.
- Escape-to-close.
- Sufficient contrast.
- Reduced-motion support.
- Descriptive image alt text.
- Decorative icons marked appropriately.
- No information communicated by color alone.

Never remove browser focus indicators without replacing them with a better visible state.

---

# 28. RESPONSIVE BREAKPOINT QA

Test at:

```text
320px
375px
390px
768px
1024px
1280px
1440px
```

At every viewport verify:

- No horizontal scroll.
- No clipped text.
- No broken buttons.
- No overflow.
- Header remains aligned.
- Search remains usable.
- Hero remains balanced.
- Cards remain readable.
- Footer remains usable.
- Mobile menu works.
- Dialog works.
- Typography remains proportional.

---

# 29. PERFORMANCE

Do not introduce a large UI/animation library just for visual polish.

Prefer:

- Existing utilities.
- CSS transitions.
- Lightweight SVG icons.
- Existing component library.
- Optimized `logo.png`.

Avoid:

- Huge background images.
- Autoplay video.
- Heavy animation packages.
- Unnecessary client rendering.
- Duplicate component implementations.

---

# 30. COMPONENT ARCHITECTURE

Reuse existing architecture when it is sound.

Expected shared areas:

```text
src/
  components/
    layout/
      Header
      MobileNavigation
      Footer

    ui/
      Button
      IconButton
      SearchInput
      SearchDialog
      SectionHeading
      Card

    services/
      ServiceCard
      ServiceGrid
      ServiceFilters

    home/
      Hero
      ProblemPanel
      CategorySection
      RemoteSupportSection
      FAQPreview
```

Do not create duplicate versions of the same component.

If the current architecture differs but is healthy, preserve it.

Fix shared problems at the shared component/token level.

---

# 31. ROOT-CAUSE RULE

Before every visual fix, determine:

```text
Is this a:
- token problem?
- component problem?
- layout problem?
- content hierarchy problem?
- interaction problem?
- accessibility problem?
```

Prefer fixing the shared cause.

BAD:

```text
Add random margin-top: -12px
```

GOOD:

```text
Inspect container alignment, header height,
section spacing, line-height and layout constraints.
Then correct the shared rule.
```

---

# 32. BUSINESS LOGIC PRESERVATION

Do NOT break:

- Service routes.
- Search behavior.
- Navigation routes.
- WhatsApp links.
- Telegram links.
- AnyDesk links.
- Existing service data.
- Existing SEO metadata.
- Existing page metadata.
- Existing contact behavior.

The redesign is primarily visual and UX.

If refactoring is necessary, preserve behavior.

---

# 33. SEO

Preserve existing SEO structure.

Do not remove:

- page titles;
- descriptions;
- canonical behavior;
- semantic headings;
- structured data if present;
- service-specific metadata.

Use semantic HTML to improve the structure.

---

# 34. DESIGN CONTEXT

After the visual direction is established, use Impeccable to document the resulting system.

Preferred:

```text
/impeccable document
```

Maintain:

```text
PRODUCT.md
DESIGN.md
design-system/MASTER.md
```

They must describe the actual implemented system, not an imaginary future design.

---

# 35. IMPLEMENTATION PHASES

## PHASE 1 — AUDIT

Inspect:

- current homepage;
- current services page;
- search dialog;
- mobile navigation;
- footer;
- service cards;
- remote-support section;
- design tokens;
- typography;
- existing CSS/Tailwind;
- `logo.png`;
- current routes;
- current SEO.

Run Impeccable critique.

Create an internal root-cause list.

Do not code yet.

---

## PHASE 2 — DESIGN SYSTEM

Update/create:

```text
design-system/MASTER.md
```

Define:

- color;
- typography;
- spacing;
- radius;
- borders;
- shadows;
- buttons;
- inputs;
- cards;
- navigation;
- footer;
- responsive behavior.

---

## PHASE 3 — GLOBAL FOUNDATION

Fix:

- container;
- spacing;
- typography;
- colors;
- button system;
- inputs;
- borders;
- radius;
- shadows.

---

## PHASE 4 — HEADER

Redesign:

- desktop header;
- mobile header;
- active states;
- search trigger;
- menu trigger.

---

## PHASE 5 — HOMEPAGE

Redesign:

1. Hero.
2. Search.
3. Problem selector.
4. Category discovery.
5. Service discovery.
6. Remote support.
7. FAQ.
8. Footer.

---

## PHASE 6 — SERVICES

Refine:

- service catalog;
- filters;
- search dialog;
- service cards;
- service detail hierarchy.

---

## PHASE 7 — ALL OTHER PAGES

Apply the same design system.

Do not make every page visually identical.

Maintain one brand system while allowing each page to serve its own task.

---

## PHASE 8 — FOOTER

Treat footer as a real company-information surface.

Verify:

- logo;
- company description;
- service links;
- guide links;
- company links;
- contact;
- legal links only where real;
- copyright;
- responsive layout.

---

## PHASE 9 — RESPONSIVE QA

Test all required widths.

---

## PHASE 10 — IMPECCABLE POLISH

Run:

```text
/impeccable polish the homepage
/impeccable polish the services page
/impeccable audit the application
```

Then run detector.

Fix remaining findings.

---

# 36. VISUAL ACCEPTANCE CHECKLIST

## Global

- [ ] One coherent visual system.
- [ ] Strong typography hierarchy.
- [ ] Consistent spacing.
- [ ] Consistent containers.
- [ ] Consistent controls.
- [ ] Controlled radius.
- [ ] Minimal shadows.
- [ ] No AI-slop patterns.
- [ ] Friendly but professional.

## Brand

- [ ] Real `logo.png` is used.
- [ ] Logo is sharp.
- [ ] Logo has correct aspect ratio.
- [ ] Logo appears in header.
- [ ] Logo appears in footer.
- [ ] No fake replacement logo.

## Header

- [ ] Desktop aligned.
- [ ] Mobile aligned.
- [ ] Search aligned.
- [ ] Menu aligned.
- [ ] Active state subtle.
- [ ] No clipping.
- [ ] No overflow.

## Hero

- [ ] No unnecessary kicker.
- [ ] No excessive empty space.
- [ ] H1 is strong.
- [ ] Search is prominent.
- [ ] CTA hierarchy is clear.
- [ ] Problem panel is useful.
- [ ] Right panel does not overpower the task.

## Services

- [ ] Cards have meaningful hierarchy.
- [ ] Cards are not repetitive AI-template blocks.
- [ ] Filters communicate active state.
- [ ] Search is polished.
- [ ] No fake data.
- [ ] Service discovery is clear.

## Footer

- [ ] Feels like a real company footer.
- [ ] Uses actual logo.
- [ ] Has useful navigation groups.
- [ ] Has real links only.
- [ ] Has clear copyright.
- [ ] Responsive.
- [ ] Not excessively decorative.

## Accessibility

- [ ] Keyboard navigation.
- [ ] Focus-visible.
- [ ] Semantic headings.
- [ ] Contrast.
- [ ] Dialog accessibility.
- [ ] Mobile menu accessibility.
- [ ] Reduced motion.

---

# 37. ANTI-SLOP FINAL REVIEW

Before completion, explicitly answer:

1. Does the homepage still look like a generic AI SaaS landing page?
2. Is the hero using an unnecessary kicker?
3. Are there too many rounded containers?
4. Are there too many pills?
5. Is blue being overused?
6. Are there unnecessary gradients?
7. Are there unnecessary shadows?
8. Is there unnecessary decorative motion?
9. Are sections too empty?
10. Are icons being used without meaning?
11. Does the footer look like a real company footer?
12. Is the actual logo being used?
13. Does the service catalog feel like a professional technical-service platform?
14. Does the interface feel friendly to a non-technical Android user?
15. Does the design have its own identity?
16. Would the page still look good if all decorative effects were removed?

If any answer indicates AI-template aesthetics, revise before completion.

---

# 38. DEFINITION OF DONE

The redesign is complete ONLY when:

- Impeccable is installed and available.
- Impeccable critique was performed.
- Design system is documented.
- Existing functionality remains intact.
- Header is polished.
- Mobile navigation is polished.
- Hero is balanced.
- Search is prominent and accessible.
- Service catalog is differentiated.
- Remote-support section is trustworthy.
- Footer looks professional and company-grade.
- Real `logo.png` is used.
- Responsive behavior passes all required viewports.
- Accessibility is reviewed.
- Anti-AI-slop review passes.
- Impeccable detector has been run.
- Type-check passes.
- Lint passes.
- Production build passes.

Never claim a validation passed without actually running it.

---

# 39. REQUIRED FINAL REPORT

OpenCode MUST return:

```text
ANDROID SERVICE — UI/UX REDESIGN REPORT

Impeccable:
- Installed:
- Version/status:
- Init:
- Critique:
- Polish:
- Audit:
- Detector:

Root causes:
1.
2.
3.
4.
5.

Major changes:
1.
2.
3.
4.
5.

Design system:
- Colors:
- Typography:
- Spacing:
- Radius:
- Borders:
- Shadows:

Brand:
- logo.png:
- Header:
- Footer:

Navigation:
- Desktop:
- Mobile:

Homepage:
- Hero:
- Search:
- Problem selector:
- Categories:
- Remote support:
- FAQ:

Services:
- Filters:
- Search:
- Cards:
- Detail:

Footer:
- Structure:
- Links:
- Responsive:

Responsive testing:
- 320:
- 375:
- 390:
- 768:
- 1024:
- 1280:
- 1440:

Anti-AI-slop:
- Detector result:
- Manual review:
- Remaining findings:

Validation:
- Type-check:
- Lint:
- Build:

Remaining limitations:
-
```

---

# 40. FINAL DESIGN PRINCIPLE

Do not try to make AndroidService impressive by adding more UI.

Make it trustworthy by making every element earn its place.

The website should communicate:

> "Saya mengalami masalah Android. Mereka memahami masalah saya, menjelaskan pilihan saya, dan memudahkan saya mendapatkan bantuan."

The final UI must feel:

**professional + friendly + technical + human + restrained.**

Not:

**AI-generated + generic + decorative + overly rounded + template-like.**

# END OF PRD V4.0
