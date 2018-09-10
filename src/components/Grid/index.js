// @flow

import React, { type Node } from "react";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../../constants/styles";

const Main = styled.div`
    font-size: 1rem;
    line-height: normal;
`;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1.5em;
    grid-column-gap: 1.5em;
    @media ${MEDIA_QUERIES.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${MEDIA_QUERIES.desktop} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Item = styled.div``;

type Props<T> = {|
    items: Array<T>,
    keyExtractor: T => string,
    renderItem: T => Node,
|};

const Grid = <T>({ items, keyExtractor, renderItem }: Props<T>) => (
    <Main>
        <List>
            {items.map(item => (
                <Item key={keyExtractor(item)}>{renderItem(item)}</Item>
            ))}
        </List>
    </Main>
);

export default Grid;
