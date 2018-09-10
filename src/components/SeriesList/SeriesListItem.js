// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";

import { type Series } from "../../types";
import SeriesThumbnail from "../SeriesThumbnail";
import BaseButton from "../BaseButton";
import { SHADOW, MEDIA_QUERIES } from "../../constants/styles";

const Button = styled(BaseButton)`
    font-size: 1rem;
    line-height: normal;
    width: 100%;
    transition: opacity 0.2s ease-out;
    transition: box-shadow 0.2s ease-out;

    @media ${MEDIA_QUERIES.canHover} {
        &:hover {
            opacity: 90%;
            box-shadow: ${SHADOW};
        }
    }
`;

type Props = {|
    series: Series,
    onClick: string => void,
|};

export default class SeriesListItem extends PureComponent<Props> {
    render() {
        const { series, onClick } = this.props;
        return (
            <Button
                onClick={() => {
                    onClick(series.id);
                }}
            >
                <SeriesThumbnail series={series} />
            </Button>
        );
    }
}
