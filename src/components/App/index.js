// @flow

import React, { Component } from "react";

import SermonList from "../SermonList";
import SeriesList from "../SeriesList";

type Props = {||};

class App extends Component<Props> {
    render() {
        return (
            <div className="sermons-app">
                <h1>Featured</h1>
                <SermonList />
                <h1>Archive</h1>
                <SeriesList />
            </div>
        );
    }
}

export default App;
