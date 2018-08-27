// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";

import { type Series } from "../../types";
import Button from "../Button";
import SeriesThumbnail from "../SeriesThumbnail";

const Thumbnail = styled.div`
    font-size: 1rem;
    padding: 0.8em;
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
            <Button
                style={{ width: "100%" }}
                onClick={() => {
                    onClick(series.id);
                }}
            >
                <Thumbnail>
                    <SeriesThumbnail series={series} />
                </Thumbnail>
            </Button>
        );
    }
}
