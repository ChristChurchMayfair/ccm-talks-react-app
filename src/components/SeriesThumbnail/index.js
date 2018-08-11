// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";

import Aspect3x2 from "../Aspect3x2";
import { type Series } from "../../types";

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Text = styled.div`
    margin: 0.2em 0;
`;

type Props = {|
    series: Series,
|};

class SeriesThumbnail extends PureComponent<Props> {
    render() {
        const { series } = this.props;
        return (
            <div>
                <Aspect3x2>
                    <Image src={series.image3x2Url} />
                </Aspect3x2>
                <Text>{series.name}</Text>
                {series.subtitle != null && <Text>{series.subtitle}</Text>}
            </div>
        );
    }
}

export default SeriesThumbnail;
