// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";

import { type Series } from "../../types";
import SeriesThumbnail from "../SeriesThumbnail";
import OpacityButton from "../OpacityButton";

const Button = styled(OpacityButton)`
    font-size: 1rem;
    line-height: normal;
    width: 100%;
    box-shadow: 0px 0px 0.2em 2px rgba(0, 0, 0, 0.2);
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
