// TODO: type everything
const resolvers = {
  Query: {
    zipCode: async (
      _,
      {
        countryCode = 'US',
        postCode = '90128',
      }: { countryCode: String; postCode: String },
      { dataSources },
    ) => {
      // TODO: add try/catch block
      const zipCode = await dataSources.zipCodeAPI.getZipCode(
        countryCode,
        postCode,
      );
      // TODO: refactor object format
      const formattedZipCode = {
        postCode: zipCode['post code'],
        country: zipCode.country,
        countryAbbreviation: zipCode['country abbreviation'],
        places: zipCode?.places.map((place) => ({
          placeName: place['place name'],
          longitude: place.longitude,
          state: place.state,
          stateAbbreviation: place['state abbreviation'],
          latitude: place.latitude,
        })),
      };
      // TODO: format the response as a GQL common response
      return formattedZipCode;
    },
  },
};

export default resolvers;
