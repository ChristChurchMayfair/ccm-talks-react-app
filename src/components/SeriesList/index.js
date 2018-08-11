// @flow

import React, { Component } from "react";
import styled from "styled-components";

import WithSerieses from "../WithSerieses";
import Series from "../SeriesThumbnail";

const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const ListItem = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 25em;
`;

type Props = {||};

class SeriesList extends Component<Props> {
    render() {
        return (
            <WithSerieses>
                {({ loading, error, serieses }) => {
                    if (loading) {
                        return <div>Fetching</div>;
                    }
                    if (error) {
                        return <div>Error</div>;
                    }
                    return (
                        <List>
                            {serieses.map(series => (
                                <ListItem key={series.id}>
                                    <Series series={series} />
                                </ListItem>
                            ))}
                        </List>
                    );
                }}
            </WithSerieses>
        );
    }
}

export default SeriesList;
