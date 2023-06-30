import React from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import ErrorPage from "../error/error";

import { getIngredients } from "../../utils/getIngredients";

const PATH = "https://norma.nomoreparties.space/api";

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
        setData(await getIngredients(`${PATH}/ingredients`));
    };

    getData();
  }, []);

  if (data === null) {
    return (
      <Modal isVisible={true}>
        <Loader />
      </Modal>
    );
  }

  if(data === undefined){
    return (
      <Modal isVisible={true}>
        <ErrorPage />
      </Modal>
    )
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.burgerContainer}>
        <BurgerIngredients data={data} />
        <BurgerConstructor />
      </main>
    </div>
  );
};

export default App;
