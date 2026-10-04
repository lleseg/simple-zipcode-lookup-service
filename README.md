# simple-zipcode-lookup-service

Zip code lookup app: a GraphQL API that wraps the free [Zippopotam.us](https://zippopotam.us/) service, and a React app that queries it.

## Stack

- **Backend (`backend/`):** TypeScript, Apollo Server 3, `apollo-datasource-rest` to call Zippopotam.us, GraphQL schema in `src/schema.graphql`.
- **Frontend (`frontend/`):** Create React App 5 with TypeScript, React 18, Apollo Client 3, Chakra UI. Search history is kept in React Context and persisted to `localStorage`.
- **Tooling:** ESLint (airbnb) and Prettier in both apps, Jest and React Testing Library in the frontend.

## Features

- Lookup by country (defaults to US) and zip code. The country list contains the countries Zippopotam.us supports.
- Shows every place returned for a zip code (city and state).
- History of the last 5 results, newest first, kept across reloads. A zip code that returns several places adds one entry per place.
- Clearing the history also clears the last error message.
- Friendly messages for empty history and for zip codes that are not found.

## Run locally

Tested in Oct 2026 with Node 24.

Backend (GraphQL API on `http://localhost:4000`):

```
cd backend
yarn
yarn start:dev
```

`yarn start` builds to `dist/` and runs the compiled server.

Frontend (React app on `http://localhost:3000`, expects the API on port 4000):

```
cd frontend
yarn
yarn start
```

Other scripts, in both apps: `yarn lint`, `yarn pretty`. Frontend only: `yarn test`, `yarn build`.

## Notes

- Zippopotam.us only covers part of each country's zip codes. See the [supported countries and ranges](https://zippopotam.us/#where).
- Apollo Server 3 and `apollo-datasource-rest` reached end of life in Oct 2024. Their replacements are `@apollo/server` and `@apollo/datasource-rest`.
