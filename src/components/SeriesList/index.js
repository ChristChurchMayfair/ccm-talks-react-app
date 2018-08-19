// @flow

import React, { Component } from "react";
import styled from "styled-components";

import SeriesThumbnail from "../SeriesThumbnail";
import { type Series } from "../../types";
import Grid from "../Grid";
import Button from "../Button";

type Props = {|
    serieses: Array<Series>,
    onSelectSeries: (seriesId: string) => void,
|};

const Thumbnail = styled.div`
    font-size: 1rem;
    padding: 0.8em;
    line-height: normal;
`;

class SeriesList extends Component<Props> {
    render() {
        const { serieses, onSelectSeries } = this.props;
        return (
            <Grid
                items={serieses}
                keyExtractor={series => series.id}
                renderItem={series => (
                    <Button
                        style={{ width: "100%" }}
                        onClick={() => {
                            onSelectSeries(series.id);
                        }}
                    >
                        <Thumbnail>
                            <SeriesThumbnail series={series} />
                        </Thumbnail>
                    </Button>
                )}
            />
        );
    }
}

export default SeriesList;
