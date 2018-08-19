// @flow

import React from "react";
import styled from "styled-components";

import { type Series } from "../../types";
import SermonRow from "./SermonRow";

const Main = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const SeriesImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 30em;
    align-self: center;
`;

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    padding-bottom: 1em;
`;

type Props = {|
    series: Series,
|};

const SeriesDetail = ({ series }: Props) => (
    <Main>
        <SeriesImage src={series.image3x2Url} />
        <h2>{series.name}</h2>
        <List>
            {series.sermons.map(sermon => (
                <ListItem key={sermon.id}>
                    <a
                        href={sermon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SermonRow sermon={sermon} />
                    </a>
                </ListItem>
            ))}
        </List>
    </Main>
);

export default SeriesDetail;
