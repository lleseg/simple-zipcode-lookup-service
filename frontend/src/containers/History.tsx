import { Button, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";

import { AppContext } from "../context/appContext";
import { AppContextType } from "../types";

function History(): JSX.Element {
  const { clearHistory, last5Results } = useContext<AppContextType>(AppContext);

  const handleClearHistory = (): void => {
    clearHistory();
  };

  return (
    <VStack spacing={8} mb={8}>
      <Text color="teal.500" fontSize="2xl">
        Your last 5 search results:
      </Text>

      {last5Results.length > 0 ? (
        <>
          <VStack spacing={4}>
            {last5Results?.map((result, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Text key={`${result.city}${index}`}>
                {result.zipCode},&nbsp;{result.country},&nbsp;{result.city}
                ,&nbsp;
                {result.state}
              </Text>
            ))}
          </VStack>

          <Button colorScheme="teal" size="md" onClick={handleClearHistory}>
            Clear history
          </Button>
        </>
      ) : (
        <Text>You have not performed a search yet!</Text>
      )}
    </VStack>
  );
}

export default History;
