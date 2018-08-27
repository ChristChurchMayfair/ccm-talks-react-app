// @flow

import React from "react";
import styled from "styled-components";

import { type Series } from "../../types";
import SermonRow from "./SermonRow";
import { MEDIA_QUERIES, COLOURS } from "../../constants/styles";

const PADDING_VERTICAL = "0.5em";

const Main = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const SeriesImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 30em;
    align-self: center;
    border-radius: 0.2em;
`;

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const HPadding = styled.div`
    padding: 0 1.3em;

    @media ${MEDIA_QUERIES.mobile} {
        padding: 0 0.8em;
    }
`;

const ImagePadding = styled(HPadding)`
    text-align: center;
`;

const SeriesTitleContainer = styled.div`
    margin: ${PADDING_VERTICAL} 0;
`;

const SeriesTitle = styled.h2`
    margin: 0;
`;

const SeriesSubtitle = styled.h3`
    margin: 0;
`;

const Link = styled.a.attrs({
    target: "_blank",
    ref: "noopener noreferrer",
})`
    display: block;
    text-decoration: none !important;
    color: currentColor;
    transition: background-color 0.2s ease-out;
    padding: ${PADDING_VERTICAL} 0;
    /* stupid firefox */
    @media ${MEDIA_QUERIES.canHover} {
        &:hover {
            background-color: ${COLOURS.lightGrey};
        }
    }
`;

type Props = {|
    series: Series,
|};

const SeriesDetail = ({ series }: Props) => (
    <Main>
        <ImagePadding>
            <SeriesImage src={series.image3x2Url} />
        </ImagePadding>
        <HPadding>
            <SeriesTitleContainer>
                <SeriesTitle>{series.name}</SeriesTitle>
                {series.subtitle != null && (
                    <SeriesSubtitle>{series.subtitle}</SeriesSubtitle>
                )}
            </SeriesTitleContainer>
        </HPadding>
        <List>
            {series.sermons.map(sermon => (
                <Link
                    key={sermon.id}
                    href={sermon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <HPadding>
                        <SermonRow sermon={sermon} />
                    </HPadding>
                </Link>
            ))}
        </List>
    </Main>
);

export default SeriesDetail;
