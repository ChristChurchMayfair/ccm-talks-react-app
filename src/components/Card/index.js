// @flow

import React, { type Node } from "react";
import styled from "styled-components";

type Props = {| imageUrl: string, renderDetails: () => Node |};

const Main = styled.div`
    box-shadow: 0px 0px 0.2em 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: column nowrap;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-grow: 0;
    flex-shrink: 0;
`;

const DetailsContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.7em 0.5em;
`;

const Card = ({ imageUrl, renderDetails }: Props) => (
    <Main>
        <Image src={imageUrl} />
        <DetailsContainer>{renderDetails()}</DetailsContainer>
    </Main>
);

export default Card;
