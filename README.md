# AI Developer Copilot Studio

A modern, production-ready developer assistant web application powered by Next.js 14, Tailwind CSS, shadcn/ui, Prisma, PostgreSQL, and Google's Gemini Pro API.

## Features

- **AI Repo Explainer**: Paste code to understand project structure and component interactions.
- **AI Code Reviewer**: Paste code to detect bugs, suggest improvements, and get best practices.
- **AI Debug Assistant**: Analyze error logs to find root causes and step-by-step fixes.
- **AI Docs Generator**: Generate comprehensive READMEs, usage instructions, and summaries.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, Vercel AI SDK
- **Database**: Prisma ORM, PostgreSQL (Default)
- **AI Engine**: Google Gemini Pro (via `@ai-sdk/google`)

## Setup Instructions

### Prerequisites

- Node.js 18+
- PostgreSQL instance running (or edit Prisma schema for SQLite)
- Get a Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/copilot"
GOOGLE_GENERATIVE_AI_API_KEY="your_gemini_api_key_here"
```

### 3. Initialize Database

Run the following commands to initialize your Prisma schema:

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to access the Copilot Studio dashboard.
