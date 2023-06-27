import styles from "./burger-constructor.module.css"

import {
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components"

const constructorItems = [
    {
        "_id":"60666c42cc7b410027a1a9b9",
        "name":"Соус традиционный галактический",
        "type":"sauce",
        "proteins":42,
        "fat":24,
        "carbohydrates":42,
        "calories":99,
        "price":15,
        "image":"https://code.s3.yandex.net/react/code/sauce-03.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png",
        "__v":0
     },
     {
        "_id":"60666c42cc7b410027a1a9b4",
        "name":"Мясо бессмертных моллюсков Protostomia",
        "type":"main",
        "proteins":433,
        "fat":244,
        "carbohydrates":33,
        "calories":420,
        "price":1337,
        "image":"https://code.s3.yandex.net/react/code/meat-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/meat-02-large.png",
        "__v":0
     },
     {
        "_id":"60666c42cc7b410027a1a9bc",
        "name":"Плоды Фалленианского дерева",
        "type":"main",
        "proteins":20,
        "fat":5,
        "carbohydrates":55,
        "calories":77,
        "price":874,
        "image":"https://code.s3.yandex.net/react/code/sp_1.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
        "__v":0
     },
     {
        "_id":"60666c42cc7b410027a1a9bb",
        "name":"Хрустящие минеральные кольца",
        "type":"main",
        "proteins":808,
        "fat":689,
        "carbohydrates":609,
        "calories":986,
        "price":300,
        "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        "__v":0
     },
     {
        "_id":"60666c42cc7b410027a1a9bb",
        "name":"Хрустящие минеральные кольца",
        "type":"main",
        "proteins":808,
        "fat":689,
        "carbohydrates":609,
        "calories":986,
        "price":300,
        "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        "__v":0
     }
]

const BurgerConstructor = () => {
    return (
        <section className="mt-25">
            <ul className={styles.constructorList}>
                <li className={styles.constructorItem}>
                    <div className={styles.constructorWrapper}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                    />
                    </div>
                </li>
                {
                    constructorItems.map( item => (
                        <li className={styles.constructorItem}>
                            <button className={styles.dragBtn}>
                                <DragIcon type="primary" />
                            </button>
                            <div className={styles.constructorWrapper}>
                            <ConstructorElement
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                            />
                            </div>
                        </li>
                    ))
                }
                <li className={styles.constructorItem}>
                    <div className={styles.constructorWrapper}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                    />
                    </div>
                </li>
            </ul>
            <div className={styles.constructorTotal}>
                <div className="mr-10">
                    <span className="text text_type_digits-medium mr-2">610</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

export default BurgerConstructor