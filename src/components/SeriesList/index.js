// @flow

import React, { PureComponent } from "react";

import { type Series } from "../../types";
import Grid from "../Grid";
import SeriesListItem from "./SeriesListItem";

type Props = {|
    serieses: Array<Series>,
    onSelectSeries: (seriesId: string) => void,
    hidden: boolean,
|};

class SeriesList extends PureComponent<Props> {
    render() {
        const { hidden, serieses, onSelectSeries } = this.props;
        if (hidden) {
            return null;
        } else {
            return (
                <Grid
                    items={serieses}
                    keyExtractor={series => series.id}
                    renderItem={series => (
                        <SeriesListItem
                            onClick={onSelectSeries}
                            series={series}
                        />
                    )}
                />
            );
        }
    }
}

export default SeriesList;
