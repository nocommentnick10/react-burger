import PropTypes from "prop-types";

import styles from "./order-details.module.css";

import {
  CheckMarkIcon,
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import checkBackground from "../../images/orderDetails/checkBackground.svg";

import { orderData } from "../../utils/orderData";

const OrderDetails = ({ onClose }) => {
  return (
    <div className={styles.detailsContainer}>
      <button className={styles.closeBtn} onClick={onClose}>
        <CloseIcon type="primary" />
      </button>
      <h3 className="text text_type_digits-large mb-8">{orderData._id}</h3>
      <span className="text text_type_main-medium mb-15">
        идентификатор заказа
      </span>
      <div className={styles.checkIcon}>
        <CheckMarkIcon />
        <img
          src={checkBackground}
          alt="Фон"
          className={styles.checkBackground}
        />
      </div>
      <span className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </span>
      <span className="text text_type_main-default text_color_inactive mb-15">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
