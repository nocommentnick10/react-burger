import PropTypes from "prop-types";

import styles from "../burger-ingredients/burger-ingredients.module.css";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Ingredients = (props) => {
  return (
    <div onClick={props.onClick}>
      <img src={props.image} alt={props.name} className="pr-4 pl-4 mb-1" />
      <div className={styles.ingredientsCost}>
        <span className="text text_type_digits-default mr-2">
          {props.price}
        </span>
        <CurrencyIcon />
      </div>
      <p className={styles.ingredientsName}>{props.name}</p>
    </div>
  );
};

Ingredients.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Ingredients;
