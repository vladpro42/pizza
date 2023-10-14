import React from "react"
import Title from "../Title"
import { useAppSelector } from "../../hooks/hooks"
import { selectItems } from "../../modules/Basket/api/basket.slice"
import { getTotalCount, getTotalPrice } from "../../modules/Basket/utils/utils"

const Header = () => {

    const pizza = useAppSelector(selectItems);

    const totalPrice = getTotalPrice(pizza.items);

    const countPizza = getTotalCount(pizza.items)

    return <header className="header">
        <div className="header__inner">
            <Title />
            <button className="header__btn">
                <span className="header__price">{totalPrice} ₽</span>
                <span className="header__basket">
                    {countPizza}
                </span>
            </button>
        </div>
    </header>
}

export default Header