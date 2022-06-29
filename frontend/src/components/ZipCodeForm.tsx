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

import { ZipCodeFormProps } from "../types";
import getCountries from "../utils/getCountries";

function ZipCodeForm({
  countryCode,
  handleChangeCountry,
  handleChangeZipCode,
  handleSubmit,
  zipCode,
}: ZipCodeFormProps): JSX.Element {
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
