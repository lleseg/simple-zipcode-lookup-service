import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { History, Search } from "./containers";
import { Layout } from "./components";
import { AppProvider } from "./context/appContext";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const container = document.getElementById("root");

if (!container) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <Layout>
            <Search />

            <History />
          </Layout>
        </AppProvider>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);
