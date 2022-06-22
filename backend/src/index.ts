// TODO: type everything
import { ApolloServer } from 'apollo-server';

import ZipCodeAPI from './datasources/zipcode-api';
import resolvers from './resolvers';
import typeDefs from './schema';

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
