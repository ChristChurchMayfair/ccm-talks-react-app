// @flow

import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

import FeaturedSermons from "../FeaturedSermons";
import SeriesList from "../SeriesList";
import WithSerieses from "../WithSerieses";
import Modal from "../Modal";
import SeriesDetail from "../SeriesDetail";

type Props = {||};

type State = {|
    selectedSeriesId: ?string,
|};

const SpinnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

// The spinner comes with a 45deg offset that we want to undo.
const Unrotate = styled.div`
    transform: rotateZ(-45deg);
`;

class App extends Component<Props, State> {
    state = {
        selectedSeriesId: null,
    };

    selectSeries = (seriesId: string) => {
        this.setState({
            selectedSeriesId: seriesId,
        });
    };

    render() {
        const { selectedSeriesId } = this.state;
        return (
            <WithSerieses>
                {({ loading, error, serieses }) => {
                    if (loading === true || error != null) {
                        return (
                            <SpinnerContainer>
                                <Unrotate>
                                    <Spinner name="folding-cube" />
                                </Unrotate>
                            </SpinnerContainer>
                        );
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
                                onSelectSeries={this.selectSeries}
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
