// @flow

import React, { PureComponent } from "react";
import styled from "styled-components";
import parse from "date-fns/parse";
import format from "date-fns/format";

import { type Sermon } from "../../types";

const Main = styled.div`
    width: 100%;
`;

const DetailRow = styled.div`
    display: flex;
    flex-flow row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7em;
`;

type Props = {|
    sermon: Sermon,
|};

export default class SermonRow extends PureComponent<Props> {
    render() {
        const { sermon } = this.props;
        return (
            <Main>
                <div>{sermon.name}</div>
                <DetailRow>
                    <div>{sermon.passage}</div>
                    <div>{format(parse(sermon.preachedAt), "Do MMM YYYY")}</div>
                </DetailRow>
                {sermon.speakers.length > 0 && (
                    <DetailRow>
                        <div>{sermon.speakers.map(s => s.name).join(", ")}</div>
                    </DetailRow>
                )}
            </Main>
        );
    }
}
