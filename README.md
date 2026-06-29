# Deepak Kumar — Portfolio

> B.Tech CSE student at Galgotias University · Software Developer · Problem Solver
>
> 🔗 **Live site:** [deepakkumar.vercel.app](https://deepakkumar.vercel.app) <!-- TODO: update once deployed -->

Built on the open-source [3d-portfolio template](https://github.com/Naresh-Khatri/3d-portfolio) by Naresh Khatri — customised with my own projects, skills, internships, and achievements.

---

## What's inside

| Section | Content |
|---|---|
| **Hero** | Name, title, resume download, GitHub & LinkedIn |
| **Skills** | Interactive 3D keyboard — each keycap is a skill |
| **Experience** | Google for Developers AI/ML internship · AWS Academy GenAI internship |
| **Education** | Galgotias University B.Tech CSE · High School, Buxar |
| **Achievements** | SIH 2025 · Code Astra 2025 · LeetCode 50-Day Badge |
| **Certifications** | Oracle Academy SQL · GUVI C & Java |
| **Projects** | Mobile Repairing System · Hospital Management System |
| **Contact** | Email form powered by Resend |

---

## Tech stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Scroll** | Lenis smooth-scroll |

---

## Local development

```bash
# 1. Clone
git clone https://github.com/your-github-username/3d-portfolio.git  # TODO: update URL
cd 3d-portfolio

# 2. Install
pnpm install

# 3. Environment variables
cp .env.example .env.local
# Fill in RESEND_API_KEY (required for contact form)

# 4. Run
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Personalisation — files to edit

| File | What to change |
|---|---|
| `src/data/config.ts` | Name, email, site URL, GitHub username, social links |
| `src/data/constants.ts` | Skills descriptions, internship details |
| `src/data/achievements.ts` | Education, achievements, certifications |
| `src/data/projects.tsx` | Project titles, descriptions, tech stacks, links |
| `public/Deepak_Kumar_Resume.pdf` | Your actual resume PDF |
| `public/assets/seo/og-image.png` | Social share preview image |
| `public/assets/me.jpg` | Your profile photo |
| `public/assets/projects-screenshots/` | Real screenshots for each project |

---

## Things still TODO

Replace every placeholder before going live:

- [ ] `src/data/config.ts` → `site` — your deployed Vercel URL
- [ ] `src/data/config.ts` → `githubUsername` — your GitHub username
- [ ] `src/data/config.ts` → `social.linkedin` — your LinkedIn profile URL
- [ ] `src/data/config.ts` → `social.github` — your GitHub profile URL
- [ ] `src/data/projects.tsx` → GitHub repo URLs for both projects
- [ ] `src/data/projects.tsx` → Confirm tech stacks for both projects
- [ ] `public/Deepak_Kumar_Resume.pdf` — replace with your real resume
- [ ] `public/assets/seo/og-image.png` — replace with your own OG image
- [ ] `public/assets/me.jpg` — replace with your actual photo
- [ ] `public/assets/projects-screenshots/mobile-repair/landing.png` — real screenshot
- [ ] `public/assets/projects-screenshots/hospital-management/landing.png` — real screenshot
- [ ] `README.md` → update live site URL and git clone URL after pushing to GitHub
- [ ] `public/assets/skills-keyboard.spline` — update in Spline editor if you want different keycap icons (see "Keyboard" section below)

---

## What to add — images and assets guide

### Profile photo
- **File:** `public/assets/me.jpg`
- **Size:** 400×400 px minimum, square crop, JPG or WebP
- Used in the hero section

### OG image (social share preview)
- **File:** `public/assets/seo/og-image.png`
- **Size:** 1200×630 px (standard Open Graph)
- Shows up when sharing your portfolio link on WhatsApp, Twitter, LinkedIn

### Project screenshots
Add real screenshots at these paths (PNG, 1280×800 px recommended, 16:10 ratio):

```
public/assets/projects-screenshots/
├── mobile-repair/
│   └── landing.png          ← main card image shown in grid
├── hospital-management/
│   └── landing.png          ← main card image shown in grid
```

To add more screenshots per project, add the files and update `screenshots` array and `SlideShow` paths in `src/data/projects.tsx`.

### Resume PDF
- **File:** `public/Deepak_Kumar_Resume.pdf`
- Drop your exported PDF here — it's linked from the hero button and the `/resume` page

---

## Updating the 3D keyboard skills

The keyboard keycaps are stored in a Spline binary file (`public/assets/skills-keyboard.spline`). To change which skills appear:

1. Open `public/assets/skills-keyboard.spline` in [Spline](https://spline.design/)
2. Unhide the keycaps you want to edit
3. Rename each keycap object to match a `name` key in `src/data/constants.ts` (e.g. `python`, `java`, `git`)
4. Re-export and overwrite the file

The keycap object names in Spline must exactly match the `name` field values in `SKILLS` in `constants.ts` for hover/press interactions to work.

---

## Deployment

Push to GitHub then connect to [Vercel](https://vercel.com). Set these environment variables in the Vercel dashboard:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | From [resend.com](https://resend.com) — powers the contact form |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |
| `UMAMI_DOMAIN` | No | Umami analytics script URL |
| `UMAMI_SITE_ID` | No | Umami site ID |

---

## Credits

Original template by [Naresh Khatri](https://github.com/Naresh-Khatri/3d-portfolio) — open source under the MIT License.
If you fork this, a link back to the original repo is appreciated.
