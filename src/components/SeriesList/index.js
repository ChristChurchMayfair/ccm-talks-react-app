// @flow

import React, { Component } from "react";
import styled from "styled-components";

import SeriesThumbnail from "../SeriesThumbnail";
import { type Series } from "../../types";

const ITEM_PADDING = "1em";

// needed since we're using negative margin on the List component, otherwise
// the page gets too big.
const Main = styled.div`
    overflow-x: hidden;
`;

const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: -${ITEM_PADDING};
    overflow: hidden;
`;

const ListItem = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 15em;
`;

const ItemPadding = styled.div`
    padding: ${ITEM_PADDING};
`;

type Props = {| serieses: Array<Series> |};

class SeriesList extends Component<Props> {
    render() {
        const { serieses } = this.props;
        return (
            <Main>
                <List>
                    {serieses.map(series => (
                        <ListItem key={series.id}>
                            <ItemPadding>
                                <SeriesThumbnail series={series} />
                            </ItemPadding>
                        </ListItem>
                    ))}
                </List>
            </Main>
        );
    }
}

export default SeriesList;
