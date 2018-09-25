// @flow

import React from "react";
import styled from "styled-components";

type Props = {|
    name: string,
    onChange: ({ event: { target: { value: string } } }) => void,
    placeholder: string,
|};

const TextInput = styled.input`
    font-size: 1rem;
    width: 100%;
    padding: 0.25rem;
`;

function FilterTextInput(props: Props) {
    const { name, onChange, placeholder } = props;
    return (
        <TextInput
            type="text"
            name={name}
            onChange={onChange}
            placeholder={placeholder}
        />);
}

export default FilterTextInput;
