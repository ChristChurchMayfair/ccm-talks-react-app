// @flow

import React, { Component } from "react";
import styled from "styled-components";

import FeaturedSermon from "../FeaturedSermon";
import { type Sermon, type Series } from "../../types";

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

const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const ListItem = styled.div`
    flex-basis: 15em;
    flex-grow: 1;
    flex-shrink: 1;
`;

type Props = {|
    serieses: Array<Series>,
    featuredSermonIds: Array<string>,
|};

class SermonList extends Component<Props> {
    render() {
        const { serieses, featuredSermonIds } = this.props;
        return (
            <List>
                {featuredSermonIds
                    .map(id => findSermonAndSeriesById(serieses, id))
                    .filter(Boolean)
                    .map(({ sermon, series }) => (
                        <ListItem key={sermon.id}>
                            <FeaturedSermon sermon={sermon} series={series} />
                        </ListItem>
                    ))}
            </List>
        );
    }
}

export default SermonList;
