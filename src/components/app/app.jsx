import React from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import IngredientDetails from "../ingregient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

import { fetchData } from "../../utils/fetchData";

const api = "https://norma.nomoreparties.space/api/ingredients";

const App = () => {
  const [data, setData] = React.useState(null);
  const [activeId, setActiveId] = React.useState(null);
  const [isIngredientVisible, setIngredientVisibility] = React.useState(false);
  const [isOrderVisible, setOrderVisibility] = React.useState(false);

  const handleActiveIngredient = (e) => {
    setActiveId(e.nativeEvent.target.closest("li").dataset.id);
    setIngredientVisibility(true);
  };

  const handleIngredientModalClose = (e) => {
    setIngredientVisibility(false);
  };

  const handleOrderDetails = () => {
    setOrderVisibility(true);
  };

  const handleOrderModalClose = (e) => {
    setOrderVisibility(false);
  };

  React.useEffect(() => {
    const getData = async () => {
      setData(await fetchData(api));
    };

    getData();
  }, []);

  if (!data) {
    return <div>Ждем ответ от сервера</div>;
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.burgerContainer}>
        <BurgerIngredients data={data} onClick={handleActiveIngredient} />
        <BurgerConstructor onClick={handleOrderDetails} />
        <Modal
          isVisible={isIngredientVisible}
          onClick={handleIngredientModalClose}
        >
          <IngredientDetails
            data={data}
            activeId={activeId}
            isVisible={isIngredientVisible}
            onClick={handleIngredientModalClose}
          />
        </Modal>
        <Modal isVisible={isOrderVisible} onClick={handleOrderModalClose}>
          <OrderDetails onClick={handleOrderModalClose} />
        </Modal>
      </main>
    </div>
  );
};

export default App;
