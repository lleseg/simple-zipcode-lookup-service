import { Stack, Text } from "@chakra-ui/react";

import { Place, ZipCodeInfoProps } from "../types";

function ZipCodeInfo({ data }: ZipCodeInfoProps): JSX.Element {
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
