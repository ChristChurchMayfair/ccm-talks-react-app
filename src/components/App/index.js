// @flow

import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

import SeriesList from "../SeriesList";
import WithSerieses from "../WithSerieses";
import Modal from "../Modal";
import SeriesDetail from "../SeriesDetail";
import Filters from "../Filters";
import type { Series, Sermon, TalksFilter } from "../../types";

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
        talksFilter: {
            seriesName: null,
            sermonTitle: null,
        },
    };

    selectSeries = (seriesId: string) => {
        this.setState({
            selectedSeriesId: seriesId,
        });
    };

    modifyFilter = (newFilter: TalksFilter) => {
        const { talksFilter } = this.state;
        this.setState({
            talksFilter: {
                ...talksFilter,
                ...newFilter,
            },
        });
    };

    filterSermonsInSeries = (series: Series): Series => {
        const { talksFilter } = this.state;
        const { sermonTitle } = talksFilter;
        const { sermons } = series;
        const filteredSermons: Array<Sermon> = sermons.filter(
            sermon =>
                !sermonTitle ||
                sermon.name.toLowerCase().includes(sermonTitle.toLowerCase()),
        );
        return { ...series, sermons: filteredSermons };
    };

    filterSerieses = (serieses: Array<Series>): SeriesList => {
        const { talksFilter } = this.state;
        const { seriesName } = talksFilter;
        return serieses
            .filter(
                series =>
                    !seriesName ||
                    series.name
                        .toLowerCase()
                        .includes(seriesName.toLowerCase()),
            )
            .map(this.filterSermonsInSeries)
            .filter(({ sermons }) => sermons.length > 0);
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
                            <h1>Latest Talks</h1>
                            <Filters modifyFilter={this.modifyFilter} />
                            <SeriesList
                                serieses={this.filterSerieses(serieses)}
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
                                                series={this.filterSermonsInSeries(
                                                    selectedSeries,
                                                )}
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
