// @flow

import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import SermonList from "../SermonList";
import SermonSeriesList from "../SermonSeriesList";

type Props = {||};

class App extends Component<Props> {
    render() {
        return (
            <div className="sermons-app">
                <h1>Featured</h1>
                <SermonList />
                <h1>Archive</h1>
                <SermonSeriesList />
            </div>
        );
    }
}

export default App;
