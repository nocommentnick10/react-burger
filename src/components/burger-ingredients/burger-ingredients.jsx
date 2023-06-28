import React from "react";

import styles from "./burger-ingredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import Ingredients from "../ingredients/ingredients";

import { testData } from "../../utils/data";

const filterItems = () => {
  return {
    bun: testData.filter((item) => item.type === "bun"),
    sauce: testData.filter((item) => item.type === "sauce"),
    main: testData.filter((item) => item.type === "main"),
  };
};

const renderIngredients = (ingredient) => <Ingredients {...ingredient} />;

const { bun, sauce, main } = filterItems();

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("bun");

  const changeTab = (val) => {
    setCurrent(val);
  };

  return (
    <section className="mt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className={styles.tabWrapper}>
        <Tab value="bun" active={current === "bun"} onClick={changeTab}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={changeTab}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={changeTab}>
          Начинки
        </Tab>
      </div>
      <div className={styles.ingredientsWrapper}>
        <div className="mb-10">
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <ul className={styles.ingredientsList}>
            {bun.map((ingredient) => renderIngredients(ingredient))}
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <ul className={styles.ingredientsList}>
            {sauce.map((ingredient) => renderIngredients(ingredient))}
          </ul>
        </div>
        <div>
          <h2 className="text text_type_main-medium mb-6">Начинка</h2>
          <ul className={styles.ingredientsList}>
            {main.map((ingredient) => renderIngredients(ingredient))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
