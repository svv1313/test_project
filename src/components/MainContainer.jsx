import React from "react";
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import MainItemContainer from "../shared/MainItemContainer";
import Slider from "./Slider";
import Shell from "./Shell";
import Table from "./Table";

const cache = new InMemoryCache();

const link = new WebSocketLink({
  uri: `ws://gambilife.com/graphql`,
  options: {
    reconnect: true,
    timeout: 5000
  }
});

link.subscriptionClient.maxConnectTimeGenerator.duration = () =>
  link.subscriptionClient.maxConnectTimeGenerator.max;

const client = new ApolloClient({
  cache,
  link
});

const MainContainer = () => {
  return (
    <main>
      <MainItemContainer>
        <Slider />
      </MainItemContainer>
      <MainItemContainer name={"main-block"}>
        <ApolloProvider client={client}>
          <Table />
        </ApolloProvider>
      </MainItemContainer>
      <MainItemContainer>
        <Shell />
      </MainItemContainer>
    </main>
  );
};

export default MainContainer;
