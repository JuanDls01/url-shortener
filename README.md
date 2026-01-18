# Design System

A collection of system design projects from the System Design Interview book. The purpose of this repository is to learn and practice system design concepts by implementing real-world projects.

**Roadmap overview:**

- [ ] Project Features
  - [ ] Authentication
  - [ ] Deploy project
  - [ ] Implement caching
  - [ ] Implement swagger
  - [ ] Performance metrics
- [x] URL Shortener
  - [x] Create endpoints for creating and redirecting short URLs
  - [x] Generate hash function to create tiny urls
  - [x] Save URLs in PostgreSQL using Prisma
- [ ] Chat System
  - [ ]

## Projects

### 1. URL Shortener

Based on a long URL like `https://www.systeminterview.com/q=chatsystem&c=loggedin&v=v3&l=long`, the service creates an alias with shorter length `https://tinyurl.com/y7keocwj` and if you click the alias, it redirects you to the original URL.

**Requirements:**

- Characters allowed in the short url: numbers (0-9) and characters (a-z, A-Z)
- The shortened URL must be as short as possible
- Design for 100 million URLs generated per day

![URL redirecting design](image.png)

### 2. Chat System

One-on-one chat backend that allows users chat with others.

## Project Structure

This project uses [Turborepo](https://turbo.build/) for managing multiple applications:

```
/design-system/
├── apps/
│   ├── api/          ← NestJS API (port 3000)
│   └── web/          ← Next.js 15 App Router (port 3001)
├── docker-compose.yml
├── turbo.json
└── package.json
```

## Get started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose

### Environment variables

Copy the `.env.example` file to `.env` in the `apps/api` directory and fill in the values:

```bash
cp apps/api/.env.example apps/api/.env
```

Example configuration for local development:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/design_system
```

### Installation

1. Start the PostgreSQL database:

```bash
docker compose up -d
```

2. Install all dependencies from the root directory:

```bash
npm install
```

3. Run database migrations:

```bash
cd apps/api && npx prisma migrate dev
```

4. Run both applications in development mode:

```bash
npm run dev
```

This will start:
- API at http://localhost:3000
- Web at http://localhost:3001

### Individual Commands

Run commands for specific apps:

```bash
# API only
npm run dev --filter=@design-system/api

# Web only
npm run dev --filter=@design-system/web

# Build all apps
npm run build

# Run tests
npm run test
```