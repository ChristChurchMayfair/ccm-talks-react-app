// @flow

import React, { Component } from "react";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../../constants/styles";
import FilterTextInput from "../FilterTextInput";

const Main = styled.div`
    line-height: normal;
    padding: 0 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 0.2em;
    grid-column-gap: 1.5em;
    @media ${MEDIA_QUERIES.desktop} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const FilterComponent = styled.div``;

type Props = {|
    filterText: string,
    modifyFilter: string => void,
|};

class Filters extends Component<Props> {
    render() {
        return (
            <Main>
                <FilterComponent>
                    <FilterTextInput
                        value={this.props.filterText}
                        onChange={this.props.modifyFilter}
                        placeholder="Search"
                    />
                </FilterComponent>
            </Main>
        );
    }
}

export default Filters;
