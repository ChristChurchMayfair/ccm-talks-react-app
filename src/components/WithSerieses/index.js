// @flow

import React, { Component, type Node } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import parse from "date-fns/parse";

import { type Series } from "../../types";

const SERIES_QUERY = gql`
    {
        allSeries {
            id
            name
            subtitle
            image3x2Url
            sermons(orderBy: preachedAt_ASC) {
                id
                name
                preachedAt
                url
                passage
                duration
                event {
                    id
                    name
                }
                speakers {
                    id
                    name
                }
            }
        }
    }
`;

const sortSerieses = (serieses: Array<Series>): Array<Series> => {
    const mostRecentSermonDates = serieses.map(series => {
        const sermonDates = series.sermons.map(sermon =>
            parse(sermon.preachedAt).getTime(),
        );
        const mostRecentSermonDate = Math.max(...sermonDates);
        return [series.id, mostRecentSermonDate];
    });
    mostRecentSermonDates.sort((a, b) => b[1] - a[1]);
    return mostRecentSermonDates.map(([seriesId]) =>
        // $FlowFixMe
        serieses.find(s => s.id === seriesId),
    );
};

type Props = {|
    children: ({
        serieses: Array<Series>,
        loading: boolean,
        error: ?string,
    }) => Node,
|};

class WithSerieses extends Component<Props> {
    render() {
        const { children } = this.props;
        return (
            <Query query={SERIES_QUERY}>
                {({ loading, error, data }) => {
                    const serieses: Array<Series> =
                        data.allSeries != null ? data.allSeries : [];
                    return children({
                        serieses: sortSerieses(serieses),
                        loading,
                        error: error != null ? error.message : null,
                    });
                }}
            </Query>
        );
    }
}

export default WithSerieses;
