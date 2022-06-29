import { gql, useLazyQuery } from "@apollo/client";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { SyntheticEvent, useContext, useState } from "react";

import { ZipCodeForm, ZipCodeInfo } from "../components";
import { AppContext } from "../context/appContext";
import { AppContextType, ResultData, ResultVars } from "../types";

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

function Search(): JSX.Element {
  const [countryCode, setCountryCode] = useState<string>("us");
  const [zipCode, setZipCode] = useState<string>("");

  const { updateLast5Results } = useContext<AppContextType>(AppContext);

  const resetForm = (): void => {
    setCountryCode("us");
    setZipCode("");
  };

  const [getZipCode, { loading, error, data }] = useLazyQuery<
    ResultData,
    ResultVars
  >(ZIP_CODE, {
    onCompleted(newResults) {
      updateLast5Results(newResults);
    },
  });

  const handleChangeCountry = (e: SyntheticEvent<HTMLSelectElement>): void => {
    e.preventDefault();

    setCountryCode(e.currentTarget.value);
  };

  const handleChangeZipCode = (e: SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();

    setZipCode(e.currentTarget.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLButtonElement>): void => {
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
