// @flow

import React, { Component } from "react";
import styled from "styled-components";

import FeaturedSermon from "../FeaturedSermon";
import { type Sermon, type Series } from "../../types";
import Grid from "../Grid";
import { MEDIA_QUERIES } from "../../constants/styles";

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

const Link = styled.a`
    color: currentColor;
    text-decoration: none !important;
    display: block;
    transition: opacity 0.2s ease-out;

    @media ${MEDIA_QUERIES.canHover} {
        &:hover {
            opacity: 0.3;
        }
    }
`;

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
                    <Link
                        href={sermon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FeaturedSermon sermon={sermon} series={series} />
                    </Link>
                )}
            />
        );
    }
}

export default SermonList;
