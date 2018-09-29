// @flow

import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

import SeriesList from "../SeriesList";
import WithSerieses from "../WithSerieses";
import Modal from "../Modal";
import SeriesDetail from "../SeriesDetail";
import Filters from "../Filters";
import { type Series } from "../../types";

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

class App extends Component<Props, State> {
    state = {
        selectedSeriesId: null,
        talksFilter: ""
    };

    selectSeries = (seriesId: string) => {
        this.setState({
            selectedSeriesId: seriesId,
        });
    };

    modifyFilter = (newFilter: string) => {
        this.setState({
            talksFilter: newFilter
        });
    };

    filterSeries = (series: Series, filterText: string): boolean => {
      return series.name.toLowerCase().includes(filterText.toLowerCase())
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
                            <Filters filterText={talksFilter} modifyFilter={this.modifyFilter} />
                            <SeriesList
                                serieses={serieses.filter(series => this.filterSeries(series, talksFilter))}
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
