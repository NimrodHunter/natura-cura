import React, { ReactNode, MutableRefObject, useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import CloseSVG from '../SVG/CloseSVG'

export interface IModalProps {
    ref: MutableRefObject<any>,
    children?: ReactNode,
}

const ModalStyle = styled("div")`
    .wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;    
    }

    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: rgba(0,0,0,0.3)
    }

    .box {
        position: relative;
        top: 50%;
        left: 50%
        transform: translate(-50%, -50%);
        height: 90%;
        width: 60%;
        background-color: white;
        box-shadow: 0 0 10px rgba(0,0,0,0.25);
        z-index: 101;
        overflow-y: auto;
        padding: 25px 10px 10px 10px 
        color: #181818;
        text-align: center;
    }

    button {
      background: transparent;
      border: none;
      float: right;
      z-index: 102;
    }
  `;

const Modal = forwardRef(
    (props: IModalProps, ref: any) => {

        const [display, setDisplay] = useState(false)

        useImperativeHandle(ref, () => {
            return {
                openModal: () => open(),
                closeModal: () => close(),
            }
        })

        const open = () => {
            setDisplay(true)
        }

        const close = () => {
            setDisplay(false)
        }
    
        if (display) {
    
            return ReactDOM.createPortal(
                <ModalStyle>
                    <div className= { "wrapper" }>
                        <div onClick = { () => close() } className= { "backdrop" } />
                        <div className= { "box" }>
                        <button  onClick = { () => close() }><CloseSVG width="25px" height="16.67px" /></button>
                            { props.children }
                        </div>
                    </div>
                </ModalStyle>,
                document.getElementById("modal-root") as HTMLElement
            )
        }
    
        else return null;  
    }
);

export default Modal