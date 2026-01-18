# URL Shortener

This is a simple URL shortener with the purpose to learn and practice about Design Systems and NestJS. This project follow the approach of re inventing the wheel to deep dive into design systems.

Exercise requirement assumptions:

1. Based on a long url like `https://www.systeminterview.com/q=chatsystem&c=loggedin&v=v3&l=long`, the service must create an alias with shorter length `https://tinyurl.com/y7keocwj` and if click the alias, it redirects you to the original URL.

2. Characters allowed in the short url: numbers (0-9) and characters (a-z, A-Z).

3. The shortened URL must be as short as possible.

4. The traffic volume is 100 million URLs are generated per day.

## Roadmap

- [x] Create endpoints with `@Controller()` for:
  - Create a short url with a long url.
  - Get a long url and redirect the user to this with a short url.
- [x] Generate hash function to create tiny urls with long urls
- [x] Save the urls in a PostgreSQL database using Prisma
- [ ] Deploy it
- [ ] Implement caching
- [ ] Implement swagger

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
