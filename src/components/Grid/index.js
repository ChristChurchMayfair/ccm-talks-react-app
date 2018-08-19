// @flow

import React, { type Node } from "react";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../../constants/styles";

const ITEM_PADDING = "0.4em";

const Main = styled.div``;

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
    flex-basis: 100%;
    @media ${MEDIA_QUERIES.tablet} {
        flex-basis: 50%;
    }
    @media ${MEDIA_QUERIES.desktop} {
        flex-basis: 33%;
    }
`;

const ItemPadding = styled.div`
    padding: ${ITEM_PADDING};
    padding-bottom: 1.5em;
`;

type Props<T> = {|
    items: Array<T>,
    keyExtractor: T => string,
    renderItem: T => Node,
|};

const Grid = <T>({ items, keyExtractor, renderItem }: Props<T>) => (
    <Main>
        <List>
            {items.map(item => (
                <ListItem key={keyExtractor(item)}>
                    <ItemPadding>{renderItem(item)}</ItemPadding>
                </ListItem>
            ))}
        </List>
    </Main>
);

export default Grid;
