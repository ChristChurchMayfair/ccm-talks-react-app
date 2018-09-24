// @flow

import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import parse from "date-fns/parse";
import format from "date-fns/format";

import { type Sermon, type Series } from "../../types";
import placeholderImage from "../../images/placeholderImage";
import Card from "../Card";

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

type Props = {|
    sermon: Sermon,
    series: Series,
|};

class FeaturedSermon extends PureComponent<Props> {
    render() {
        const { sermon, series } = this.props;
        const date = parse(sermon.preachedAt);
        const passage = sermon.passage;
        return (
            <Card
                imageUrl={series.image3x2Url || placeholderImage}
                renderDetails={() => (
                    <Fragment>
                        <SermonName>{sermon.name}</SermonName>
                        {passage != null && <Secondary>{passage}</Secondary>}
                        <Secondary>{format(date, "dddd D MMM YYYY")}</Secondary>
                    </Fragment>
                )}
            />
        );
    }
}

export default FeaturedSermon;
