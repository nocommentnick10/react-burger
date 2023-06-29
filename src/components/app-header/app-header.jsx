import styles from "./app-header.module.css";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = (props) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <a href="#!" className={styles.link}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default">Конструктор</span>
          </a>
          <a href="#!" className={styles.link}>
            <ListIcon type="secondary" />
            <span className="text text_type_main-default">Лента заказов</span>
          </a>
        </nav>
        <a href="#!" className={styles.logo}>
          <Logo type="primary" />
        </a>
        <a href="#!" className={styles.link}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default">Личный кабинет</span>
        </a>
      </div>
    </header>
  );
};

export default AppHeader;
