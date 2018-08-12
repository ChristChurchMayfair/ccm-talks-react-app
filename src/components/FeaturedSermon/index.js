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

const Link = styled.a`
    color: currentColor;
    text-decoration: none;
`;

type Props = {|
    sermon: Sermon,
    series: Series,
|};

class FeaturedSermon extends PureComponent<Props> {
    render() {
        const { sermon, series } = this.props;
        return (
            <Link href={sermon.url} target="_blank" rel="noopener noreferrer">
                <Aspect3x2>
                    <Image src={series.image3x2Url} />
                </Aspect3x2>
                <div>{sermon.name}</div>
            </Link>
        );
    }
}

export default FeaturedSermon;
