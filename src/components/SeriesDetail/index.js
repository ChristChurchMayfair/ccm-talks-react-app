// @flow

import React from "react";
import styled from "styled-components";

import { type Series } from "../../types";

const Main = styled.div``;

const SermonList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SermonRow = styled.li`
    padding-bottom: 10em;
`;

type Props = {|
    series: Series,
|};

const SeriesDetail = ({ series }: Props) => (
    <Main>
        <h1>{series.name}</h1>
        <SermonList>
            {series.sermons.map(sermon => (
                <SermonRow key={sermon.id}>
                    <a
                        href={sermon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {sermon.name}
                    </a>
                </SermonRow>
            ))}
        </SermonList>
    </Main>
);

export default SeriesDetail;
