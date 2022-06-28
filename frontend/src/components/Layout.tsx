import { Container, Grid, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxW="container.xl" centerContent textAlign="center">
      <Grid maxH="100vh" p={8}>
        <Heading fontSize="3xl" marginBlock={8}>
          Welcome to the Simple Zip Code Lookup service
        </Heading>

        {children}
      </Grid>
    </Container>
  );
}

export default Layout;