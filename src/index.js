// @flow

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Modal from "react-modal";

import TalksApp from "./components/App";

var serviceID = "cjkqvvoxy2pyy0175cdmdy1mz";
var graphCoolURL = `https://api.graph.cool/simple/v1/${serviceID}`;

const httpLink = createHttpLink({
    uri: graphCoolURL,
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const container = document.getElementById("root");
Modal.setAppElement(container);

ReactDOM.render(
    <ApolloProvider client={client}>
        <TalksApp />
    </ApolloProvider>,
    // $FlowFixMe
    container,
);
