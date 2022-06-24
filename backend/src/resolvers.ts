// TODO: type everything
const resolvers = {
  Query: {
    zipCode: async (
      _,
      {
        countryCode = 'US',
        zipCode = '90128',
      }: { countryCode: String; zipCode: String },
      { dataSources },
    ) => {
      // TODO: add try/catch block
      const result = await dataSources.zipCodeAPI.getZipCode(
        countryCode,
        zipCode,
      );
      // TODO: refactor object format
      const formattedResult = {
        zipCode: result['post code'],
        country: result.country,
        countryAbbreviation: result['country abbreviation'],
        places: result?.places.map((place) => ({
          placeName: place['place name'],
          longitude: place.longitude,
          state: place.state,
          stateAbbreviation: place['state abbreviation'],
          latitude: place.latitude,
        })),
      };
      // TODO: format the response as a GQL common response
      return formattedResult;
    },
  },
};

export default resolvers;
