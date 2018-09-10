// @flow

import styled from "styled-components";

import BaseButton from "../BaseButton";
import { MEDIA_QUERIES } from "../../constants/styles";

const OpacityButton = styled(BaseButton)`
    transition: opacity 0.2s ease-out;

    @media ${MEDIA_QUERIES.canHover} {
        &:hover {
            opacity: 0.3;
        }
    }
`;

export default OpacityButton;
