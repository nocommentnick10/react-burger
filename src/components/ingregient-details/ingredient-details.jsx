import React from "react";

import PropTypes from "prop-types";

import styles from "./ingredient-details.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { findActive } from "../../utils/findActive";

const IngredientDetails = ({ data, activeId, isVisible, onClose }) => {
  const activeData = React.useMemo(() => {
    return findActive(data, activeId);
  }, [data, activeId]);

  if (isVisible) {
    return (
      <div>
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>Детали ингредиента</h3>
          <button>
            <CloseIcon type="primary" onClick={onClose} />
          </button>
        </div>
        <div className={styles.detailsContainer}>
          <img src={activeData.image} alt={activeData.name} className="mb-4" />
          <span className="text text_type_main-medium mb-8">
            {activeData.name}
          </span>
          <ul className={styles.detailsRow}>
            <li className={styles.detailsCol}>
              <span className="text text_type_main-default text_color_inactive">
                Калории,ккал
              </span>
              <span className="text_type_digits-default text_color_inactive">
                {activeData.calories}
              </span>
            </li>
            <li className={styles.detailsCol}>
              <span className="text text_type_main-default text_color_inactive">
                Белки, г
              </span>
              <span className="text_type_digits-default text_color_inactive">
                {activeData.proteins}
              </span>
            </li>
            <li className={styles.detailsCol}>
              <span className="text text_type_main-default text_color_inactive">
                Жиры, г
              </span>
              <span className="text_type_digits-default text_color_inactive">
                {activeData.fat}
              </span>
            </li>
            <li className={styles.detailsCol}>
              <span className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </span>
              <span className="text_type_digits-default text_color_inactive">
                {activeData.carbohydrates}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

IngredientDetails.propTypes = {
  data: PropTypes.array.isRequired,
  activeId: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default IngredientDetails;
