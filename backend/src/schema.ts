// TODO: transform into a graphql file
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "Get a single zip code information by zip code and country code"
    zipCode(zipCode: String!, countryCode: String!): ZipCode
  }

  "This is the zip code information"
  type ZipCode {
    "This is the zip code"
    zipCode: String!
    "This is the country of the zip code"
    country: String!
    "This is the abbreviation for the country of the zip code"
    countryAbbreviation: String!
    "These are the places that belong to the zip code"
    places: [Place!]!
  }

  "This is the place information"
  type Place {
    "This is the city name"
    city: String!
    "This is the place longitude"
    longitude: String!
    "This is the place state"
    state: String!
    "This is the abbreviation for the place state"
    stateAbbreviation: String!
    "This is the place latitude"
    latitude: String
  }
`;

export default typeDefs;
