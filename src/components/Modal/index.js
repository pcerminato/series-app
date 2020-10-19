import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Container } from "./styled";

const body = document.getElementsByTagName("body")[0];
const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
body.appendChild(modalRoot);

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <Container>
      <div className="modal">
        <div>{children}</div>
      </div>
    </Container>,
    elRef.current
  );
};

export default Modal;
