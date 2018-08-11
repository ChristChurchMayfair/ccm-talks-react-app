// @flow

import React, { Component } from "react";

type Props = {|
    sermonSeries: Object,
|};

class SermonSeries extends Component<Props> {
    render() {
        return (
            <div className="sermon-series">
                <div className="sermon-series-name">
                    {this.props.sermonSeries.name}
                </div>
                <div>
                    <img src={this.props.sermonSeries.image3x2Url} />
                </div>
            </div>
        );
    }
}

export default SermonSeries;
