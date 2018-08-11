// @flow

import React, { Component } from "react";

type Props = {||};
type State = {|
    filter: string,
|};

class Filter extends Component<Props, State> {
    state = {
        filter: "",
    };

    handleChange = (event: Object) => {
        this.setState({ filter: event.target.value });
    };

    handleSubmit = () => {};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Filter:
                    <input
                        type="text"
                        value={this.state.filter}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        );
    }
}

export default Filter;
