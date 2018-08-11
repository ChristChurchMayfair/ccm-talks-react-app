// @flow

import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Sermon from "../Sermon";

const FEATURED_SERMONS = gql`
    {
        allSermons(
            filter: {
                id_in: [
                    "cjhoq9p0g3g7w01103xr223pe"
                    "cjhoq9ow735eu0186s5s6e2v3"
                ]
            }
        ) {
            name
            passage
            series {
                name
                image3x2Url
            }
            speakers {
                name
            }
        }
    }
`;

type Props = {||};

class SermonList extends Component<Props> {
    render() {
        return (
            <Query query={FEATURED_SERMONS}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>;
                    if (error) return <div>Error</div>;

                    const allSermons = data.allSermons;
                    return (
                        <div>
                            {allSermons.map(sermon => (
                                <Sermon sermon={sermon} />
                            ))}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default SermonList;
