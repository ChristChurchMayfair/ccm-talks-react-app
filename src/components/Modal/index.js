// @flow

import React, { Component, type Node } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import CloseSvg from "../../images/close";
import FillButton from "../FillButton";

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
    width: 1em;
    height: 1em;
    display: flex;
    flex-flow: ;
`;

const ClosePadding = styled.div`
    padding: 0.5em;
`;

const Children = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: auto;
`;

type Props = {|
    isOpen: boolean,
    children: Node,
    onClose: () => void,
|};

class Modal extends Component<Props> {
    close = () => {
        // $FlowFixMe
        document.body.style.overflow = null;
        this.props.onClose();
    };
    render() {
        const { children, isOpen } = this.props;
        return (
            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => {
                    this.close();
                }}
                onAfterOpen={() => {
                    // $FlowFixMe
                    document.body.style.overflow = "hidden";
                }}
                style={{
                    overlay: {
                        backgroundColor: "rgba(230, 230, 230, 0.75)",
                        padding: "0",
                        display: "flex",
                        flexFlow: "column nowrap",
                        alignItems: "center",
                        overflowY: "auto",
                    },
                    content: {
                        // remove defaults
                        position: "relative",
                        top: undefined,
                        left: undefined,
                        right: undefined,
                        bottom: undefined,
                        border: null,
                        padding: null,
                        margin: "3em 0",
                        borderRadius: 0,
                        boxShadow: "0px 0px 1.1em 2px rgba(0, 0, 0, 0.2)",
                        maxWidth: "100%",
                        minWidth: "50%",
                        overflow: undefined,
                    },
                }}
            >
                <Main>
                    <Header>
                        <FillButton onClick={this.close}>
                            <ClosePadding>
                                <Close>
                                    <CloseSvg />
                                </Close>
                            </ClosePadding>
                        </FillButton>
                    </Header>
                    <Children>{children}</Children>
                </Main>
            </ReactModal>
        );
    }
}
export default Modal;
