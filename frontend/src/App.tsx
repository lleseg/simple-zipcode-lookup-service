import { gql, useLazyQuery } from "@apollo/client";
import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Text,
  theme,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState, SyntheticEvent } from "react";

import ColorModeSwitcher from "./ColorModeSwitcher";

const ZIP_CODE = gql`
  query GetZipCode($zipCode: String!, $countryCode: String!) {
    zipCode(zipCode: $zipCode, countryCode: $countryCode) {
      zipCode
      places {
        placeName
        state
      }
    }
  }
`;

function App() {
  const [countryCode, setCountryCode] = useState("us");
  const [zipCode, setZipCode] = useState("");

  const [getZipCode, { loading, error, data }] = useLazyQuery(ZIP_CODE);

  const handleChangeCountry = (e: SyntheticEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setCountryCode(e.currentTarget.value);
  };

  const handleChangeZipCode = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();

    setZipCode(e.currentTarget.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    getZipCode({
      variables: {
        zipCode,
        countryCode,
      },
    });
  };

  if (loading) return <div>Loading!</div>;

  if (error) return <div>Error!</div>;

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Grid minH="100vh" p={8}>
          <ColorModeSwitcher justifySelf="flex-end" />

          {!data ? (
            <VStack spacing={8}>
              <Text fontSize="3xl">
                Welcome to the Simple Zip Code Lookup service
              </Text>

              <Text color="teal.500" fontSize="2xl">
                Complete the following form and then click on the submit button
                to get the zip code information you&apos;re looking for!
              </Text>

              <Wrap spacing={8}>
                <WrapItem>
                  <FormControl isRequired width={32}>
                    <FormLabel htmlFor="zip-code">Zip code</FormLabel>

                    <Input
                      id="zip-code"
                      placeholder="10128"
                      onChange={handleChangeZipCode}
                    />
                  </FormControl>
                </WrapItem>

                <FormControl isRequired width="xs">
                  <FormLabel htmlFor="country">Country</FormLabel>

                  <Select
                    id="country"
                    defaultValue={countryCode}
                    onChange={handleChangeCountry}
                  >
                    <option value="ar">Argentina</option>
                    <option value="us">United States</option>
                  </Select>
                </FormControl>
              </Wrap>

              <Button colorScheme="teal" size="md" onClick={handleSubmit}>
                Submit
              </Button>
            </VStack>
          ) : (
            JSON.stringify(data)
          )}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
