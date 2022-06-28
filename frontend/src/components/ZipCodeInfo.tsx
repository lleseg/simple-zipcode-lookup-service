import { Stack, Text } from "@chakra-ui/react";

type Place = {
  __typename: string;
  city: string;
  latitude: string;
  longitude: string;
  state: string;
  stateAbbreviation: string;
};

type AppProps = {
  data: {
    zipCode: {
      __typename: string;
      country: string;
      countryAbbreviation: string;
      places: Place[];
      zipCode: string;
    };
  };
};

function ZipCodeInfo({ data }: AppProps): JSX.Element {
  return (
    <Stack spacing={8} mb={8}>
      <Text color="teal.500" fontSize="2xl">
        Your search for &quot;{data.zipCode.zipCode}, {data.zipCode.country}
        &quot; came back with {data.zipCode.places.length} record
        {data.zipCode.places.length > 1 && "s"}:
      </Text>

      <Stack maxH="xs" overflowY="scroll">
        {data.zipCode.places.map((place: Place) => (
          <Text key={place.city} m={0}>
            {place.city},&nbsp;{place.state}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
}

export default ZipCodeInfo;
