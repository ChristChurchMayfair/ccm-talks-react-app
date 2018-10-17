// @flow

import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";
import parse from "date-fns/parse";
import format from "date-fns/format";

import SeriesList from "../SeriesList";
import SermonList from "../SermonList/index";
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
    if (s1 == null) {
        return false;
    }
    return s1.toLowerCase().includes(s2.toLowerCase());
};

export const filterSermon = (sermon: Sermon, filterText: string): boolean => {
    const trimmedFilter = filterText.trim();
    const words = trimmedFilter.split(" ").filter(w => w.length > 0);

    return words.some(word => {
        const nameMatches = stringsMatch(sermon.name, word);
        const speakerNameMatches = sermon.speakers.some(speaker =>
            stringsMatch(speaker.name, word),
        );
        const passageMatches = stringsMatch(sermon.passage, word);
        const eventMatches =
            sermon.event != null
                ? stringsMatch(sermon.event.name, word)
                : false;

        const monthString = format(parse(sermon.preachedAt), "MMMM");
        const monthMatches = stringsMatch(monthString, word);

        const yearString = format(parse(sermon.preachedAt), "YYYY");
        const yearMatches = word === yearString;

        return (
            nameMatches ||
            speakerNameMatches ||
            passageMatches ||
            eventMatches ||
            monthMatches ||
            yearMatches
        );
    });
};

export const filterSeries = (series: Series, filterText: string): boolean => {
    if (filterText === "") {
        return true;
    }

    const trimmedFilter = filterText.trim();
    const words = trimmedFilter.split(" ").filter(w => w.length > 0);

    return words.every(word => {
        const seriesNameMatches = stringsMatch(series.name, word);
        const seriesSubtitleMatches = stringsMatch(series.subtitle, word);
        const hasASermonMatch = series.sermons.some(sermon =>
            filterSermon(sermon, word),
        );
        return seriesNameMatches || seriesSubtitleMatches || hasASermonMatch;
    });
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

                    const filterActive = !(talksFilter.trim() === "");

                    return (
                        <div>
                            <h1>Latest Talks</h1>
                            <Filters
                                filterText={talksFilter}
                                modifyFilter={this.modifyFilter}
                            />
                            <SermonList
                                hidden={!filterActive}
                                sermons={serieses
                                    .map(series => series.sermons)
                                    .reduce((acc, val) => acc.concat(val), [])
                                    .filter(sermon =>
                                        filterSermon(sermon, talksFilter),
                                    )}
                            />
                            <SeriesList
                                serieses={serieses}
                                hidden={filterActive}
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
                                                shouldHighlightSermon={sermon => {
                                                    return filterSermon(
                                                        sermon,
                                                        talksFilter,
                                                    );
                                                }}
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
