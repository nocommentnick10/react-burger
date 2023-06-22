import React from "react"

import AppHeader from "./app-header/app-header"
import BurgerIngredients from "./burger-ingredients/burger-ingredients"
import BurgerConstructor from "./burger-constructor/burger-constructor"

const App = () => {
    return(
        <div className="App">
            <h1>Stellar Burger - Kalinov</h1>
            <AppHeader />
            <main>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </div>
    )
}

export default App