import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { join } from 'path';

import ZipCodeAPI from './datasources/zipcode-api';
import resolvers from './resolvers';

const typeDefs = gql(
  readFileSync(join(__dirname, 'schema.graphql'), { encoding: 'utf-8' }),
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    zipCodeAPI: new ZipCodeAPI(),
  }),
});

(async () => {
  const { url } = await server.listen();

  console.log(`The server is up and running at ${url}`);
})();
