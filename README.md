# URL Shortener

This is a simple URL shortener with the purpose to learn and practice about Design Systems and NestJS. This project follow the approach of re inventing the wheel to deep dive into design systems.

## Roadmap

- [ ] Create endpoints with `@Controller()` for:
  - Create a short url with a long url.
  - Get a long url and redirect the user to this with a short url.
- [ ] Generate hash function to create tiny urls with long urls
- [ ] Save the urls in a PostgreSQL database using Prisma
- [ ] Deploy it
- [ ] Implement caching

![URL redirecting design](image.png)

## Get started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose

### Environment variables

Copy the `.env.example` file to `.env` and fill in the values:

```bash
cp .env.example .env
```

Example configuration for local development:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/url_shortener
```

### Installation

1. Start the PostgreSQL database:

```bash
docker compose up -d
```

2. Install dependencies (this will also generate the Prisma Client automatically):

```bash
npm install
```

3. Run database migrations:

```bash
npx prisma migrate dev
```

4. Run the application:

```bash
npm run start:dev
```
