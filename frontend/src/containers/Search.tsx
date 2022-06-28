import { gql, useLazyQuery } from "@apollo/client";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { SyntheticEvent, useContext, useState } from "react";

import { ZipCodeForm, ZipCodeInfo } from "../components";

import { AppContext } from "../context/appContext";

const ZIP_CODE = gql`
  query GetZipCode($zipCode: String!, $countryCode: String!) {
    zipCode(zipCode: $zipCode, countryCode: $countryCode) {
      country
      zipCode
      places {
        city
        state
      }
    }
  }
`;

function Search() {
  const [countryCode, setCountryCode] = useState<String>("us");
  const [zipCode, setZipCode] = useState<String>("");

  const { updateLast5Results } = useContext(AppContext);

  const resetForm = () => {
    setCountryCode("us");
    setZipCode("");
  };

  const [getZipCode, { loading, error, data }] = useLazyQuery(ZIP_CODE, {
    onCompleted(newResults) {
      updateLast5Results(newResults);
    },
  });

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

    resetForm();
  };

  if (loading) {
    return <Spinner size="xl" mx="auto" />;
  }

  return (
    <Box>
      <ZipCodeForm
        countryCode={countryCode}
        handleChangeCountry={handleChangeCountry}
        handleChangeZipCode={handleChangeZipCode}
        handleSubmit={handleSubmit}
        zipCode={zipCode}
      />

      {error && (
        <Center marginBlock={8} color="red">
          ERROR: {error.message}
        </Center>
      )}

      {data && <ZipCodeInfo data={data} />}
    </Box>
  );
}

export default Search;
