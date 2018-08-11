// @flow

import React, { Component } from "react";
import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

type Props = {|
    sermon: Object,
|};

class Sermon extends Component<Props> {
    render() {
        return (
            <div className="sermon">
                <div className="sermon--name">{this.props.sermon.name}</div>
                <div>
                    <Image src={this.props.sermon.series.image3x2Url} />
                </div>
            </div>
        );
    }
}

export default Sermon;
