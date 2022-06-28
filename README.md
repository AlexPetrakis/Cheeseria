# Cheeseria Application

## Overview

Build a small POC of the front-end and an API showing crud capabilities that displays 5
different cheeses with pictures, price per kilo and the cheese colour. This data should reside
within the backend (API) of the app.

## Tech Stack

### Backend

- NodeJS
- TypeScript
- Swagger

### Frontend

- React
- TypeScript
- Styled components

## Developing locally

1. From the root directory:

```
cd frontend/ && npm i && cd ../backend && npm i
```

2. From the backend directory: This uses concurrently to launch the backend + react

```
npm run dev
```

## Testing

1. npm run test in both frontend/backend

## Swagger

Docs are available on http://localhost:4005/docs

# Docker

1.

```
docker-compose up --build
```

2. This will build the dockerfile, browse to http://localhost:4005

# Improvements / Remaining tasks

## API

1. More tests
2. Persist data within a database, e.g. sql/mysql/postgres.

## Frontend

1. UI tweaks
2. Alerts on successful item creation/deletion/update.
3. Add support for additional units of measurements to the calculator

## Infrastructure

1. For a serverless approach, Amazon Aurora Serverless could be utilised (or dynamodb)
2. Back-end could be hosted on AWS Lambda with API Gateway
3. React could be deployed to AWS S3 and served from CloudFront
4. Images stored in S3
