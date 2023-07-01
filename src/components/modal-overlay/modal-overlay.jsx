import PropTypes from "prop-types";

import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ isVisible, onClose, ...props }) => {
  return (
    <div
      className={isVisible ? styles.modalOverlayVisible : styles.modalOverlay}
      onClick={onClose}
    >
      {props.children}
    </div>
  );
};

ModalOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default ModalOverlay;
