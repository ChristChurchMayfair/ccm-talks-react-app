// @flow

import React, { type Node } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import close from "../../images/close.svg";
import Button from "../Button";

const CONTENT_PADDING = "1.5em";

const Main = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    width: 100%;
`;

const Header = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
`;

const Close = styled.div`
    width: 2em;
    height: 2em;
`;

const ClosePadding = styled.div`
    padding: ${CONTENT_PADDING};
`;

const Children = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    padding-bottom: ${CONTENT_PADDING};
    padding-right: ${CONTENT_PADDING};
    padding-left: ${CONTENT_PADDING};
    overflow-y: auto;
`;

const CloseImage = styled.img`
    width: 100%;
    height: 100%;
`;

type Props = {|
    isOpen: boolean,
    children: Node,
    onClose: () => void,
|};

const Modal = ({ children, isOpen, onClose }: Props) => (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
            overlay: {
                // zIndex: 100001,
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(230, 230, 230, 0.75)",
            },
            content: {
                // remove defaults
                position: undefined,
                top: undefined,
                left: undefined,
                right: undefined,
                bottom: undefined,
                border: null,
                padding: null,
                borderRadius: "1em",
                boxShadow: "0px 0px 1.1em 2px rgba(0, 0, 0, 0.2)",
                maxWidth: "95%",
                maxHeight: "95%",
                minWidth: "60%",
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignItems: "center",
            },
        }}
    >
        <Main>
            <Header>
                <Button onClick={onClose}>
                    <ClosePadding>
                        <Close>
                            <CloseImage src={close} />
                        </Close>
                    </ClosePadding>
                </Button>
            </Header>
            <Children>{children}</Children>
        </Main>
    </ReactModal>
);

export default Modal;
