import React from "react";

import PropTypes from "prop-types";

import styles from "./modal.module.css";

import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = ({ isVisible, onClose, ...props }) => {
  React.useEffect(() => {
    const modalEsc = (e) => {
      if (e.keyCode === 27) onClose();
    };
    document.addEventListener("keydown", modalEsc);

    return () => document.removeEventListener("keydown", modalEsc);
  });

  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose}>
      <div
        className={
          isVisible ? styles.modalContainerVisible : styles.modalContainer
        }
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Modal;
