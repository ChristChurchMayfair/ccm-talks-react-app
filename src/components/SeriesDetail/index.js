// @flow

import React from "react";
import styled from "styled-components";
import parse from "date-fns/parse";

import { type Series } from "../../types";
import SermonRow from "./SermonRow";
import { MEDIA_QUERIES, COLOURS } from "../../constants/styles";
import placeholderImage from "../../images/placeholderImage";

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
`;

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    border-bottom: 1px solid ${COLOURS.lightGrey};

    &:last-child {
        border-bottom: none;
    }
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

const SeriesDetail = ({ series }: Props) => {
    const sortedSermons = [...series.sermons];
    sortedSermons.sort((a, b) => {
        return parse(b.preachedAt).getTime() - parse(a.preachedAt).getTime();
    });
    return (
        <Main>
            <ImagePadding>
                <SeriesImage src={series.image3x2Url || placeholderImage} />
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
                {sortedSermons.map(sermon => (
                    <ListItem key={sermon.id}>
                        <Link
                            href={sermon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <HPadding>
                                <SermonRow sermon={sermon} />
                            </HPadding>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Main>
    );
};

export default SeriesDetail;
