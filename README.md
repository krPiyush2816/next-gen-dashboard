# Next-Gen Learning Dashboard

A high-fidelity, interactive student dashboard prototype built for the Frontend Intern Challenge. This project prioritizes secure data fetching, buttery-smooth animations, and a strict adherence to zero layout shifts.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Database:** Supabase (PostgreSQL)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React

## Architectural Decisions

### 1. Server & Client Component Split
To handle data securely and keep the UI interactive, I intentionally split the architecture:
* **Server Components:** `page.tsx` runs entirely on the server. I used `@supabase/supabase-js` here to fetch the course data directly from the database. This ensures the database logic and API keys are never exposed to the client. 
* **Client Components:** I passed the fetched Supabase data as props down to `CourseGrid.tsx` and `Sidebar.tsx`. Because Framer Motion requires access to the browser's DOM to calculate spring physics and layout shifts (`layoutId`), these specific interactive pieces are marked with `'use client'`.

### 2. Zero Layout Shifts & Loading States
Preventing layout shifts (CLS) was a primary focus. 
* **Animations:** All hover states and entrance animations exclusively use `transform` and `opacity`. I completely avoided animating properties like `width` or `margin` to prevent browser repaints.
* **Suspense/Loading:** I implemented a `loading.tsx` file at the route level. While the Server Component awaits the Supabase fetch, Next.js automatically renders this pulsing skeleton grid, ensuring the layout structure is locked in place before the data snaps in.

### 3. Database Security
The Supabase table is secured using Row Level Security (RLS). I created a specific policy that allows public read access (SELECT) for the dashboard to function, while completely locking down INSERT, UPDATE, and DELETE privileges.

## Local Setup
To run this project locally, create a `.env.local` file in the root directory and add the environment variables listed in `.env.example`.

```bash
npm install
npm run dev