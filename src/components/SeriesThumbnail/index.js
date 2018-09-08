// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";

import { type Series } from "../../types";
import placeholderImage from "../../images/placeholderImage";

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Text = styled.div`
    margin: 0.2em 0;
`;

const Title = styled(Text)`
    margin-top: 0.6em;
    font-weight: bold;
`;

type Props = {|
    series: Series,
|};

class SeriesThumbnail extends PureComponent<Props> {
    render() {
        const { series } = this.props;
        return (
            <div>
                <Image src={series.image3x2Url || placeholderImage} />
                <Title>{series.name}</Title>
                {series.subtitle != null && <Text>{series.subtitle}</Text>}
            </div>
        );
    }
}

export default SeriesThumbnail;
