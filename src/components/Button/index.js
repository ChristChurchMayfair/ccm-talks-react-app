// @flow

import styled from "styled-components";

import { COLOURS, MEDIA_QUERIES } from "../../constants/styles";

const Button = styled.button`
    background-color: transparent;
    border-style: none;
    text-align: inherit;
    font-size: inherit;
    font-family: inherit;
    color: currentColor;
    cursor: pointer;
    padding: 0;

    transition: background-color 0.2s ease-out;

    /* stupid firefox */
    @media ${MEDIA_QUERIES.canHover} {
        &:hover {
            background-color: ${COLOURS.lightGrey};
        }
    }
`;
export default Button;
