// @flow

import React, { Component } from "react";

import FeaturedSermons from "../FeaturedSermons";
import SeriesList from "../SeriesList";
import WithSerieses from "../WithSerieses";
import Modal from "../Modal";
import SeriesDetail from "../SeriesDetail";

type Props = {||};

type State = {|
    selectedSeriesId: ?string,
|};

class App extends Component<Props, State> {
    state = {
        selectedSeriesId: null,
    };

    render() {
        const { selectedSeriesId } = this.state;
        return (
            <WithSerieses>
                {({ loading, error, serieses }) => {
                    if (loading === true || error != null) {
                        return null;
                    }
                    const selectedSeries = serieses.find(
                        s => s.id === selectedSeriesId,
                    );
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
                            <SeriesList
                                serieses={serieses}
                                onSelectSeries={seriesId => {
                                    this.setState({
                                        selectedSeriesId: seriesId,
                                    });
                                }}
                            />
                            {
                                <Modal
                                    isOpen={selectedSeries != null}
                                    onClose={() => {
                                        this.setState({
                                            selectedSeriesId: null,
                                        });
                                    }}
                                >
                                    {selectedSeries != null && (
                                        <div>
                                            <SeriesDetail
                                                series={selectedSeries}
                                            />
                                        </div>
                                    )}
                                </Modal>
                            }
                        </div>
                    );
                }}
            </WithSerieses>
        );
    }
}

export default App;
