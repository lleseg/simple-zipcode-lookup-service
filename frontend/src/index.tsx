import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

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
      <ColorModeScript />

      <App />
    </ApolloProvider>
  </React.StrictMode>
);
