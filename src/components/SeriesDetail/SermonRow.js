// @flow

import React, { PureComponent } from "react";

import { type Sermon } from "../../types";

type Props = {|
    sermon: Sermon,
|};

export default class SermonRow extends PureComponent<Props> {
    render() {
        const { sermon } = this.props;
        return <div>{sermon.name}</div>;
    }
}
