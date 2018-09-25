// @flow

import React, { Component } from "react";
import styled from "styled-components";

import type { TalksFilter } from "../../types";
import { MEDIA_QUERIES } from "../../constants/styles";
import FilterTextInput from "../FilterTextInput";

const Main = styled.div`
    line-height: normal;
    padding: 0 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1.5em;
    grid-column-gap: 1.5em;
    @media ${MEDIA_QUERIES.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${MEDIA_QUERIES.desktop} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const FilterComponent = styled.div``;

type Props = {|
    modifyFilter: TalksFilter => void,
|};

class Filters extends Component<Props> {
    onFilterChange = (attribute: string) => ({ target: { value } }) => {
        const { modifyFilter } = this.props;
        modifyFilter({ [attribute]: value });
    };

    render() {
        return (
            <Main>
                <FilterComponent>
                    <FilterTextInput
                        type="text"
                        name="seriesNameFilter"
                        onChange={this.onFilterChange("seriesName")}
                        placeholder="Search series name"
                    />
                </FilterComponent>
                <FilterComponent>
                    <FilterTextInput
                        type="text"
                        name="sermonTitleFilter"
                        onChange={this.onFilterChange("sermonTitle")}
                        placeholder="Search sermon title"
                    />
                </FilterComponent>
            </Main>
        );
    }
}

export default Filters;
