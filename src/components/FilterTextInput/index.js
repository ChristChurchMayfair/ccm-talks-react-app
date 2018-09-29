// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { COLOURS } from "../../constants/styles";
import FilterInputLabel from "../FilterInputLabel";

type Props = {|
    onChange: (value: string) => void,
    placeholder: string,
    value: string,
|};

type State = {|
    isFocused: boolean,
|};

const Main = styled.div``;

const TextInput = styled.input`
    font-size: 0.8em;
    font-family: inherit;
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
    outline: none;
    border: 3px solid ${COLOURS.lightGrey};
    transition: border-color 0.2s, width 0.2s;
`;

class FilterTextInput extends Component<Props, State> {
    state = { isFocused: false };

    onFocus = () => this.setState({ isFocused: true });

    onBlur = () => this.setState({ isFocused: false });

    render() {
        const { onChange, placeholder, value } = this.props;
        const { isFocused } = this.state;
        return (
            <Main>
                <TextInput
                    value={value}
                    type="text"
                    onChange={event => {
                        //$FlowFixMe
                        const newFilterValue: string = event.target.value;
                        onChange(newFilterValue);
                    }}
                    placeholder={placeholder}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    style={
                        isFocused
                            ? { borderColor: COLOURS.darkGrey }
                            : undefined
                    }
                />
            </Main>
        );
    }
}

export default FilterTextInput;
