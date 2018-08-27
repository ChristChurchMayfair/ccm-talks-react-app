// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";
import parse from "date-fns/parse";
import format from "date-fns/format";

import Aspect3x2 from "../Aspect3x2";
import { type Sermon, type Series } from "../../types";
import { formatOsis } from "../../passageformatter";

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Main = styled.div``;

const Text = styled.div`
    margin: 0.2em 0;
`;

const SermonName = styled(Text)`
    font-weight: bold;
    margin-top: 0.6em;
`;

const Secondary = styled(Text)`
    opacity: 0.8;
`;

const formatPassage = (passage: ?string): ?string => {
    if (passage == null) {
        return null;
    }
    try {
        return formatOsis(passage);
    } catch (err) {
        return null;
    }
};

type Props = {|
    sermon: Sermon,
    series: Series,
|};

class FeaturedSermon extends PureComponent<Props> {
    render() {
        const { sermon, series } = this.props;
        const date = parse(sermon.preachedAt);
        const passage = formatPassage(sermon.passage);
        return (
            <Main>
                <Aspect3x2>
                    <Image src={series.image3x2Url} />
                </Aspect3x2>
                <SermonName>{sermon.name}</SermonName>
                {passage != null && <Secondary>{passage}</Secondary>}
                <Secondary>{format(date, "dddd D MMM YYYY")}</Secondary>
            </Main>
        );
    }
}

export default FeaturedSermon;
