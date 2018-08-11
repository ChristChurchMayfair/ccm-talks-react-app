// @flow

import React, { type Node } from "react";
import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    padding-top: 66.66%;
    position: relative;
    overflow: hidden;
`;

const Child = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
`;

type Props = {| children: Node |};

const Aspect3x2 = ({ children }: Props) => (
    <Main>
        <Child>{children}</Child>
    </Main>
);

export default Aspect3x2;
