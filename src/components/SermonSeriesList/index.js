// @flow

import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Filter from "../Filter";
import SermonSeries from "../SermonSeries";

const SERMON_SERIES_QUERY = gql`
    {
        allSeries(first: 10) {
            name
            subtitle
            image3x2Url
            sermons(orderBy: preachedAt_ASC) {
                name
                preachedAt
                url
                passage
                event {
                    name
                }
                speakers {
                    name
                }
            }
        }
    }
`;

type Props = {||};

class SermonSeriesList extends Component<Props> {
    render() {
        return (
            <div>
                <Filter />
                <a>Next</a>
                <Query query={SERMON_SERIES_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>;
                        if (error) return <div>Error</div>;

                        const allSermonSeries = data.allSeries;
                        return (
                            <div>
                                {allSermonSeries.map(sermonSeries => (
                                    <SermonSeries sermonSeries={sermonSeries} />
                                ))}
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export default SermonSeriesList;
