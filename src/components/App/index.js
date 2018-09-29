// @flow

import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

import SeriesList from "../SeriesList";
import WithSerieses from "../WithSerieses";
import Modal from "../Modal";
import SeriesDetail from "../SeriesDetail";
import Filters from "../Filters";
import { type Series, type Sermon } from "../../types";

type Props = {||};

type State = {|
    selectedSeriesId: ?string,
    talksFilter: string,
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

const stringsMatch = (s1: ?string, s2: string): boolean => {
    const trimmedFilter = s2.trim();
    const words = trimmedFilter.split(" ").filter(w => w.length > 0);

    return words.every(word => {
        if (s1 == null) {
            return false;
        }
        return s1.toLowerCase().includes(word.toLowerCase());
    });
};

export const filterSermon = (sermon: Sermon, filterText: string): boolean => {
    const nameMatches = stringsMatch(sermon.name, filterText);
    const speakerNameMatches = sermon.speakers.some(speaker =>
        stringsMatch(speaker.name, filterText),
    );
    const passageMatches = stringsMatch(sermon.passage, filterText);
    return nameMatches || speakerNameMatches || passageMatches;
};

export const filterSeries = (series: Series, filterText: string): boolean => {
    if (filterText === "") {
        return true;
    }
    const seriesNameMatches = stringsMatch(series.name, filterText);
    const seriesSubtitleMatches = stringsMatch(series.subtitle, filterText);
    const hasASermonMatch = series.sermons.some(sermon =>
        filterSermon(sermon, filterText),
    );
    return seriesNameMatches || seriesSubtitleMatches || hasASermonMatch;
};

class App extends Component<Props, State> {
    state = {
        selectedSeriesId: null,
        talksFilter: "",
    };

    selectSeries = (seriesId: string) => {
        this.setState({
            selectedSeriesId: seriesId,
        });
    };

    modifyFilter = (newFilter: string) => {
        this.setState({
            talksFilter: newFilter,
        });
    };

    render() {
        const { selectedSeriesId, talksFilter } = this.state;
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
                            <h1>Latest Talks</h1>
                            <Filters
                                filterText={talksFilter}
                                modifyFilter={this.modifyFilter}
                            />
                            <SeriesList
                                serieses={serieses.filter(series =>
                                    filterSeries(series, talksFilter),
                                )}
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
