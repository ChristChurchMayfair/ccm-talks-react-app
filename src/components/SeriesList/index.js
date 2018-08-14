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
                        <SeriesThumbnail series={series} />
                    </Button>
                )}
            />
        );
    }
}

export default SeriesList;
