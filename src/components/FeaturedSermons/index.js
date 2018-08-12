// @flow

import React, { Component } from "react";

import FeaturedSermon from "../FeaturedSermon";
import { type Sermon, type Series } from "../../types";
import Grid from "../Grid";

const findSermonAndSeriesById = (
    serieses: Array<Series>,
    sermonId: string,
): ?{ series: Series, sermon: Sermon } => {
    for (const series of serieses) {
        const sermon = series.sermons.find(sermon => sermon.id === sermonId);
        if (sermon != null) {
            return { series, sermon };
        }
    }
    return null;
};

type Props = {|
    serieses: Array<Series>,
    featuredSermonIds: Array<string>,
|};

class SermonList extends Component<Props> {
    render() {
        const { serieses, featuredSermonIds } = this.props;
        return (
            <Grid
                items={featuredSermonIds
                    .map(id => findSermonAndSeriesById(serieses, id))
                    .filter(Boolean)}
                keyExtractor={({ sermon }) => sermon.id}
                renderItem={({ sermon, series }) => (
                    <FeaturedSermon sermon={sermon} series={series} />
                )}
            />
        );
    }
}

export default SermonList;
