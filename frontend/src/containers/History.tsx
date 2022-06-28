import { Button, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";

import { AppContext, AppContextType } from "../context/appContext";

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

      <VStack spacing={4}>
        {last5Results?.map((result, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Text key={`${result.city}${index}`}>
            {result.zipCode},&nbsp;{result.country},&nbsp;{result.city},&nbsp;
            {result.state}
          </Text>
        ))}
      </VStack>

      {last5Results.length && (
        <Button colorScheme="teal" size="md" onClick={handleClearHistory}>
          Clear history
        </Button>
      )}
    </VStack>
  );
}

export default History;
