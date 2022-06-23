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
import ColorModeSwitcher from "./ColorModeSwitcher";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Grid minH="100vh" p={8}>
          <ColorModeSwitcher justifySelf="flex-end" />

          <VStack spacing={8}>
            <Text fontSize="3xl">
              Welcome to the Simple Zip Code Lookup service
            </Text>

            <Text color="teal.500" fontSize="2xl">
              Complete the following form and then click on the submit button to
              get the zip code information you&apos;re looking for!
            </Text>

            <Wrap spacing={8}>
              <WrapItem>
                <FormControl isRequired width={32}>
                  <FormLabel htmlFor="zip-code">Zip code</FormLabel>

                  <Input id="zip-code" placeholder="10128" />
                </FormControl>
              </WrapItem>

              <FormControl isRequired width="xs">
                <FormLabel htmlFor="country">Country</FormLabel>

                <Select id="country" defaultValue="us">
                  <option value="ar">Argentina</option>
                  <option value="us">United States</option>
                </Select>
              </FormControl>
            </Wrap>

            <Button colorScheme="teal" size="md">
              Submit
            </Button>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
