// @flow

import React, { Component } from "react";

type Props = {|
    sermon: Object,
|};

class Sermon extends Component<Props> {
    render() {
        return (
            <div className="sermon">
                <div className="sermon--name">{this.props.sermon.name}</div>
                <div>
                    <img src={this.props.sermon.series.image3x2Url} />
                </div>
            </div>
        );
    }
}

export default Sermon;
