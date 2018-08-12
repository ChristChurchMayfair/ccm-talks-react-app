// @flow

import React, { Component } from "react";

import FeaturedSermons from "../FeaturedSermons";
import SeriesList from "../SeriesList";
import WithSerieses from "../WithSerieses";

type Props = {||};

class App extends Component<Props> {
    render() {
        return (
            <WithSerieses>
                {({ loading, error, serieses }) => {
                    if (loading == true || error != null) {
                        return null;
                    }
                    return (
                        <div>
                            <h1>Featured</h1>
                            <FeaturedSermons
                                serieses={serieses}
                                featuredSermonIds={[
                                    "cjhoq9p0g3g7w01103xr223pe",
                                    "cjhoq9ow735eu0186s5s6e2v3",
                                ]}
                            />
                            <h1>Archive</h1>
                            <SeriesList serieses={serieses} />
                        </div>
                    );
                }}
            </WithSerieses>
        );
    }
}

export default App;
