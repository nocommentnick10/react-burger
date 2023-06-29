import PropTypes from "prop-types";

import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ isVisible, onClick, ...props }) => {
  return (
    <div
      className={isVisible ? styles.modalOverlayVisible : styles.modalOverlay}
      onClick={onClick}
    >
      {props.children}
    </div>
  );
};

ModalOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ModalOverlay;
