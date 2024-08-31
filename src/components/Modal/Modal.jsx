import React from "react";
import {  Overlay } from "../styles/Modal.styled";
const Modal = ({ toggleHandler }) => {
  return (
    <>
      <OverlayBackground toggleHandler={toggleHandler} />
     
    </>
  );
};

const OverlayBackground = ({ toggleHandler }) => {
  return null;
};

export default Modal;
