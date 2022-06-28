type ZipCodeArgs = { countryCode: string; zipCode: string };

type Place = {
  city: string;
  longitude: string;
  state: string;
  stateAbbreviation: string;
  latitude: string;
};

type Result = {
  zipCode: string;
  country: string;
  countryAbbreviation: string;
  places: Place[];
};

const resolvers = {
  Query: {
    zipCode: async (
      _,
      { countryCode = 'US', zipCode = '90128' }: ZipCodeArgs,
      { dataSources },
    ): Promise<Result> => {
      const result = await dataSources.zipCodeAPI.getZipCode(
        countryCode,
        zipCode,
      );

      const formattedResult: Result = {
        zipCode: result['post code'],
        country: result.country,
        countryAbbreviation: result['country abbreviation'],
        places: result?.places.map((place) => ({
          city: place['place name'],
          longitude: place.longitude,
          state: place.state,
          stateAbbreviation: place['state abbreviation'],
          latitude: place.latitude,
        })),
      };

      return formattedResult;
    },
  },
};

export default resolvers;
