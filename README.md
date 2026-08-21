# Selah Skye — Taylor Imagination Studios

Brand home for the animated children's series **Selah Skye**. Single page, one
primary action: watch the reel.

Stack: Next.js 15 (App Router, JavaScript), Tailwind CSS, shadcn/ui patterns,
Supabase for the newsletter list.

---

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then fill in your keys
npm run dev
```

Open http://localhost:3000

---

## Before it goes live — 3 required steps

### 1. Add the real videos

Open `lib/site-config.js`. Replace every `REPLACE_WITH_YOUTUBE_ID` with a real
YouTube video ID. The ID is the part after `v=` in the URL:

```
https://youtube.com/watch?v=dQw4w9WgXcQ   ->   "dQw4w9WgXcQ"
```

There are four: the main reel plus three short-form clips. While the values are
placeholders the modal will open to a broken embed.

### 2. Set up the newsletter table

In your Supabase project, open the SQL editor and run everything in
`supabase-schema.sql`. It creates the `subscribers` table and the Row-Level
Security policy.

Then copy your project URL and anon key from **Settings → API** into
`.env.local`.

To read the list later, use the Supabase dashboard. Anonymous users are
deliberately blocked from reading it, so it cannot be scraped from the browser.

### 3. Update the brand details

Still in `lib/site-config.js`:

- `socials` — real YouTube, Instagram, TikTok URLs
- `contactEmail`
- `url` — the live domain (also set `NEXT_PUBLIC_SITE_URL` in production)

---

## Deploying to Vercel

1. Push to GitHub
2. Import the repo at vercel.com
3. Add the three environment variables from `.env.local` in
   **Project Settings → Environment Variables**
4. Deploy

The sitemap and robots.txt generate automatically from `NEXT_PUBLIC_SITE_URL`,
so set it correctly in production or search engines will be pointed at the
placeholder domain.

---

## Where things live

```
app/
  layout.js        Fonts, SEO metadata, Open Graph tags
  page.js          Section order + JSON-LD structured data
  globals.css      Base styles, focus rings, reduced-motion support
  sitemap.js       Auto-generated sitemap.xml
  robots.js        Auto-generated robots.txt

components/
  video-provider.jsx   Modal state via React Context + the YouTube modal
  watch-button.jsx     Reusable "Watch the Reel" CTA
  site-header.jsx      Fixed nav, transparent over hero, solid on scroll
  hero.jsx             Full-height hero, primary CTA
  big-idea.jsx         Hook / Heart / Engine
  meet-selah.jsx       Character intro
  cast.jsx             Linley, Amir, Gerald, Grandma
  hair-power.jsx       Flight / Discovery / Teamwork
  watch.jsx            Reel poster + short-form clip grid
  newsletter.jsx       Email capture (idle/loading/success/error states)
  site-footer.jsx      Logo, nav, socials
  ui/button.jsx        shadcn-style button

lib/
  site-config.js   EDIT THIS. All copy, links, and video IDs.
  supabase.js      Lazily created browser client
  utils.js         cn() class merge helper

public/images/     Character art extracted from the pitch deck
```

---

## Design system

Derived from the artwork's own golden-hour palette, not a generic template.

| Token | Value | Use |
|---|---|---|
| `ink` | `#14110F` | Warm near-black. Text and dark sections. Never pure black. |
| `cream` | `#FAF7F2` | Warm off-white. Light sections. Never pure white. |
| `gold` | `#E8A33D` | The single accent. CTAs, links, active states only. |
| `dusk` | `#22304A` | Section depth. Never a button color. |

Type: Fraunces (display) + Inter (body). Two families, no more.
Spacing: 8px grid — 8, 16, 24, 32, 48, 64.
Shadows: subtle only. `sm` on most, `md` on elevated cards, `lg` on modals.

---

## Swapping the images

Everything in `public/images/` came out of the pitch deck. To replace one, drop
in a file with the same name and the layout stays intact. Keep roughly the same
aspect ratio:

- `hero-doorway.jpg` — tall portrait (roughly 1:2)
- Cast portraits — 3:4
- `selah-flight-wide.jpg` — 16:9, also used as the social share image
- `logo-tis.jpg` — wide

---

## Accessibility notes worth keeping

These are already handled. Don't remove them during edits:

- Visible focus rings on every interactive element
- `prefers-reduced-motion` respected in `globals.css`
- 44px minimum touch targets on all buttons and links
- Form label present for screen readers, errors announced with `role="alert"`
- Modal closes on Escape and locks body scroll while open
# skye
