// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";

import Aspect3x2 from "../Aspect3x2";
import { type Sermon, type Series } from "../../types";

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Main = styled.div``;

type Props = {|
    sermon: Sermon,
    series: Series,
|};

class FeaturedSermon extends PureComponent<Props> {
    render() {
        const { sermon, series } = this.props;
        return (
            <Main>
                <Aspect3x2>
                    <Image src={series.image3x2Url} />
                </Aspect3x2>
                <div>{sermon.name}</div>
            </Main>
        );
    }
}

export default FeaturedSermon;
