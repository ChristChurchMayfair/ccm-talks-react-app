// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";

import { type Series } from "../../types";
import SeriesThumbnail from "../SeriesThumbnail";
import OpacityButton from "../OpacityButton";

const Thumbnail = styled.div`
    font-size: 1rem;
    line-height: normal;
`;

type Props = {|
    series: Series,
    onClick: string => void,
|};

export default class SeriesListItem extends PureComponent<Props> {
    render() {
        const { series, onClick } = this.props;
        return (
            <OpacityButton
                onClick={() => {
                    onClick(series.id);
                }}
            >
                <Thumbnail>
                    <SeriesThumbnail series={series} />
                </Thumbnail>
            </OpacityButton>
        );
    }
}
