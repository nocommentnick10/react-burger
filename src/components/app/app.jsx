import React from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import ErrorPage from "../error/error";

import { getIngredients } from "../../utils/getIngredients";

const App = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoad] = React.useState(true);
  const [hasError, setError] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
        try{
          const res = await getIngredients()
          setData(res)
          setLoad(false)
        } catch(err) {
          setLoad(false)
          setError(true)
        }
        
    };

    getData();
  }, []);

  if (loading) {
    return (
      <Modal isVisible={loading}>
        <Loader />
      </Modal>
    );
  }

  if(hasError){
    return (
      <Modal isVisible={hasError}>
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
