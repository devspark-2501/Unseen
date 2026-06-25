# Unseen

**Talent is universal. Recognition isn't.**

AI that discovers hidden skills and potential from your life experiences — not your resume.

## The Problem

Grades, resumes, certificates, and awards measure *visible* achievement. They miss hidden potential. A teenager helping run a family shop is building leadership, operations, and communication skills every single day — and gets zero formal recognition for it.

Most systems ask: **what have you achieved?**
Unseen asks: **what have you achieved relative to the opportunities available to you?**

## How It Works

```
Landing Page → 5-Question Interview → AI Analysis → Results Dashboard
```

1. **Interview** — A short 5-question wizard:
   - Tell me about yourself
   - What responsibilities do you have?
   - What challenge have you overcome?
   - What skills have you taught yourself?
   - What are you proud of?

2. **AI Analysis** — Answers are sent to `/api/analyze`, which returns a structured breakdown of hidden skills, evidence, and a score.

3. **Results Dashboard** — Displays:
   - **Potential Gap Score™** (Potential Score − Achievement Score)
   - Hidden skills (leadership, initiative, resilience, communication, and more)
   - Evidence pulled directly from the user's own answers
   - Personalized recommendations

### Example

| Traditional View | Unseen View |
|---|---|
| "Helps parents run a shop" | Leadership, Operations Management, Customer Communication, Responsibility |

**Potential Gap Score™: +37**
Achievement Score: 52 · Potential Score: 89

## Tech Stack

- **Framework:** Next.js + TypeScript
- **Styling:** Tailwind CSS
- **AI:** AI SDK + Gemini 2.5 Flash
- **Deployment:** Vercel

## Running Locally

```bash
git clone https://github.com/ohhjazzv/Unseen.git
cd Unseen
npm install
```

Create a `.env.local` file:

```
GEMINI_API_KEY=your_key_here
```

Then run:

```bash
npm run dev
```

## Why This Matters

Opportunity is unevenly distributed, but most evaluation systems pretend it isn't — they compare raw output, not output relative to circumstance. Unseen exists to surface the talent that traditional metrics are structurally blind to.

## Status

Built solo for a hackathon in ~24 hours. MVP is functional end-to-end: interview → AI analysis → results.
