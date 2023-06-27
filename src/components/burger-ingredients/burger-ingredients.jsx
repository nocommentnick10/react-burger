import React from "react"

import styles from "./burger-ingredients.module.css"

import {
    Tab,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components"

import { testData } from "../../utils/data"

const BurgerIngredients = () => {

    const [current, setCurrent] = React.useState("bun")

    const changeTab = (val) => {
        setCurrent(val)
    }

    const filterItems = () => {
        return{
            bun: testData.filter(item => item.type === "bun"),
            sauce: testData.filter(item => item.type === "sauce"),
            main: testData.filter(item => item.type === "main")
        }
    }

    const {bun, sauce, main} = filterItems()

    return(
        <section className="mt-10">
            <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
            <div className={styles.tabWrapper}>
                <Tab
                    value="bun" active={current === 'bun'} onClick={changeTab}>
                    Булки
                </Tab>
                <Tab
                    value="sauce" active={current === 'sauce'} onClick={changeTab}>
                     Соусы
                </Tab>
                <Tab
                    value="main" active={current === 'main'} onClick={changeTab}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredientsWrapper}>
                <div className="mb-10">
                    <h2 className="text text_type_main-medium mb-6">Булки</h2>
                    <ul className={styles.ingredientsList}>
                        {
                            bun.map( (bun, key) => (
                            <li className={styles.ingredientsCard} key={bun.id}>
                                <img src={bun.image} alt={bun.name} 
                                    className="pr-4 pl-4 mb-1"/>
                                <div className={styles.ingredientsCost}>
                                    <span className="text text_type_digits-default mr-2">{bun.price}</span>
                                    <CurrencyIcon />
                                </div>
                                <p className={styles.ingredientsName}>{bun.name}</p>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mb-10">
                    <h2 className="text text_type_main-medium mb-6">Соусы</h2>
                    <ul className={styles.ingredientsList}>
                        {
                            sauce.map( (sauce, key) => (
                                <li className={styles.ingredientsCard} key={sauce.id}>
                                    <img src={sauce.image} alt={sauce.name} 
                                        className="pr-4 pl-4 mb-1"/>
                                    <div className={styles.ingredientsCost}>
                                        <span className="text text_type_digits-default mr-2">{sauce.price}</span>
                                        <CurrencyIcon />
                                    </div>
                                    <p className={styles.ingredientsName}>{sauce.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h2 className="text text_type_main-medium mb-6">Начинка</h2>
                    <ul className={styles.ingredientsList}>
                        {
                            main.map( (main, key) => (
                                <li className={styles.ingredientsCard} key={main.id}>
                                    <img src={main.image} alt={main.name} 
                                        className="pr-4 pl-4 mb-1"/>
                                    <div className={styles.ingredientsCost}>
                                        <span className="text text_type_digits-default mr-2">{main.price}</span>
                                        <CurrencyIcon />
                                    </div>
                                    <p className={styles.ingredientsName}>{main.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients