
# CareerChoice360 — Premium Landing Page

A high-end, conversion-focused single-page site for an MBA/PGDM consultancy in Noida, with a Modern Corporate aesthetic (Deep Navy `#020617`, Electric Blue `#2563eb`, soft Slate accents), Framer Motion interactions, and Lucide icons.

## 1. Design Foundation
- Update the design system (`index.css` + `tailwind.config.ts`) with the navy/electric-blue/slate palette as HSL semantic tokens (background, primary, accent, muted, etc.) plus gradient utilities for hero glows and the CTA band.
- Typography: clean modern sans (Inter via Google Fonts) with tightened tracking on display headings.
- Install `framer-motion`. Lucide is already available.
- Add the uploaded logo to `public/` and use it in navbar + footer.

## 2. Sections (top → bottom)

**Sticky Glassmorphic Navbar**
- Backdrop blur + subtle navy translucency, border-bottom on scroll.
- Logo left; links: Programs, Exams, About, Contact; right-side "Check Eligibility" CTA (magnetic hover).
- Mobile: hamburger → slide-down sheet menu.

**Hero**
- Two-column. Left: eyebrow tag, H1 "Transform Your Career with Top-Tier B-School Admissions.", supporting line, dual CTAs ("Book Free Evaluation" + "Explore Programs"), trust strip (students mentored, top B-schools, years).
- Right: floating "Quick Enquiry Form" card (name, email, phone, target exam select, message) with subtle parallax/float animation and glow.
- Animated gradient blobs in the background.

**Programs Guided**
- 4 cards in a staggered reveal grid: PGDM, Full-time MBA, Executive MBA, Global Pathways.
- Each card: Lucide icon, title, 1-line pitch, specialization chips (Business Analytics, Marketing, Finance, Operations, HR), hover lift with electric-blue border glow.

**Exam Mastery**
- Section heading + infinite horizontal marquee of badges for CAT, XAT, NMAT, SNAP, CMAT (styled pill badges with exam name + tagline like "Top Percentile Strategy").
- Below marquee: 3 quick-stat tiles (mock tests, sectional drills, personalized study plan).

**About / Why CareerChoice360**
- 3-column feature grid with Lucide icons: Personalized Mentorship, Profile Building, Noida-based Expert Counseling.
- Side image/illustration block with stat callouts (e.g., "1,200+ admits", "50+ partner B-schools").

**Process Timeline (bonus for conversion)**
- 4-step horizontal timeline: Profile Audit → Exam Strategy → Application & Essays → Interview Prep. Reveal-on-scroll with connecting line draw animation.

**Testimonials**
- 3 cards with student quote, name, school admitted to (IIM, MDI, SPJIMR, etc.). Subtle scale-in on view.

**CTA Band**
- Full-width gradient (navy → electric blue) section: "Ready to take the leap? Book your free profile evaluation." with magnetic primary button + secondary "Call +91-8800854923".

**Footer**
- 4 columns: brand + tagline + socials (LinkedIn, Instagram, Facebook, YouTube via Lucide), Quick Links, Programs, Contact (full Noida address, phone, email — all clickable: tel:/mailto:/maps).
- Bottom bar: copyright + small print.

## 3. Interactions (Framer Motion)
- **Reveal on Scroll**: shared `MotionSection` wrapper using `whileInView` (fade + 24px rise, once: true).
- **Staggered List**: Programs grid uses `staggerChildren` for card entrance.
- **Magnetic CTA**: custom `MagneticButton` component tracking mouse offset from center with spring smoothing for primary CTAs (hero, navbar, CTA band).
- Hover lifts on cards, animated underline on nav links, subtle floating loop on the hero form card.

## 4. Lead Form (Quick Enquiry + CTA)
- React Hook Form + Zod validation (name 2–60, valid email, Indian phone regex, exam select required, message ≤ 500).
- Inline field errors; submit button shows loading spinner; on success → Sonner toast "Thanks! Our counselor will reach out within 24 hours." and form resets.
- Form is duplicated/anchored at the top on mobile for accessibility (sticky position above the fold in mobile hero).

## 5. Responsiveness
- Mobile-first layout; hero collapses to single column with the enquiry form rendered FIRST on mobile.
- Hamburger menu (animated icon → close), full-width sheet with the "Check Eligibility" CTA pinned at the bottom.
- All grids collapse gracefully; marquee pauses on touch.

## 6. Code Structure
```
src/
  components/
    layout/ Navbar.tsx, Footer.tsx, MotionSection.tsx
    ui-custom/ MagneticButton.tsx, GradientBlob.tsx, Marquee.tsx
    sections/ Hero.tsx, Programs.tsx, Exams.tsx, About.tsx,
              Process.tsx, Testimonials.tsx, CTABand.tsx
    forms/ EnquiryForm.tsx
  pages/ Index.tsx  (composes all sections)
```
Clean, commented, modular components; all colors via semantic Tailwind tokens (no hard-coded hex in JSX).

## Out of scope (for this pass)
- Real backend submission (form simulates success); can be wired to Lovable Cloud later.
- CMS, blog, multi-page routes.
