/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { SyntheticEvent } from "react";

import getCountries from "../utils/getCountries";

type AppProps = {
  countryCode: string;
  handleChangeCountry: (e: SyntheticEvent<HTMLSelectElement>) => void;
  handleChangeZipCode: (e: SyntheticEvent<HTMLInputElement>) => void;
  handleSubmit: (e: SyntheticEvent<HTMLButtonElement>) => void;
  zipCode: string;
};

function ZipCodeForm({
  countryCode,
  handleChangeCountry,
  handleChangeZipCode,
  handleSubmit,
  zipCode,
}: AppProps): JSX.Element {
  return (
    <VStack spacing={8} mb={8}>
      <Text color="teal.500" fontSize="2xl">
        Complete the following form and then click on the submit button to get
        the zip code information you&apos;re looking for!
      </Text>

      <Wrap spacing={8}>
        <WrapItem>
          <FormControl isRequired width={32}>
            <FormLabel htmlFor="zip-code">Zip code</FormLabel>

            <Input
              id="zip-code"
              placeholder="10128"
              value={zipCode}
              onChange={handleChangeZipCode}
              required
            />
          </FormControl>
        </WrapItem>

        <WrapItem>
          <FormControl isRequired width="xs">
            <FormLabel htmlFor="country">Country</FormLabel>

            <Select
              id="country"
              defaultValue={countryCode}
              onChange={handleChangeCountry}
            >
              {getCountries().map((country: any) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </WrapItem>

        <WrapItem placeSelf="end">
          <Button
            colorScheme="teal"
            size="md"
            onClick={handleSubmit}
            disabled={zipCode === ""}
          >
            Submit
          </Button>
        </WrapItem>
      </Wrap>
    </VStack>
  );
}

export default ZipCodeForm;
