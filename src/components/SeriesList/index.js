// @flow

import React, { Component } from "react";

import SeriesThumbnail from "../SeriesThumbnail";
import { type Series } from "../../types";
import Grid from "../Grid";

type Props = {| serieses: Array<Series> |};

class SeriesList extends Component<Props> {
    render() {
        const { serieses } = this.props;
        return (
            <Grid
                items={serieses}
                keyExtractor={series => series.id}
                renderItem={series => <SeriesThumbnail series={series} />}
            />
        );
    }
}

export default SeriesList;
