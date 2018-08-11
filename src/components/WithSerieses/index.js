// @flow

import React, { Component, type Node } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
                        serieses,
                        loading,
                        error: error != null ? error.message : null,
                    });
                }}
            </Query>
        );
    }
}

export default WithSerieses;
