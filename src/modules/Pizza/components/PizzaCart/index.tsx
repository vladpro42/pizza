import { useState } from "react"
import { PizzaState } from "../../slice/pizzaSlice"
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks"
import { Cart, addItemToCart } from "../../../Basket/api/basket.slice"
import { selectTotalPrice } from "../../../Basket/api/basket.slice"

type IPropertyPizza = {
    pizza: PizzaState
}

const types = ["тонкое", "традиционное"]

const PizzaCart = ({ pizza }: IPropertyPizza) => {

    const dispatch = useAppDispatch()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, item: PizzaState) => {

        const payload: Cart = {
            uniqId: window.crypto.randomUUID(),
            id: item.id,
            imgUrl: item.imgUrl,
            price: item.price,
            title: item.title,
            type: item.types[activeType] === 0 ? "тонкое" : "традиционное",
            size: item.sizes[activeSize],
            count: 1,
        }

        dispatch(addItemToCart(payload))
    }

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActivSize] = useState(0)

    const chooseType = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!event.currentTarget.dataset.index) {
            return
        }
        setActiveType(+event.currentTarget.dataset.index)
    }

    const chooseSize = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!event.currentTarget.dataset.index) {
            return
        }
        setActivSize(+event.currentTarget.dataset.index)
    }


    return <div className="menu__card">
        <img className="card__img" src="/img/pizza1.jpg" alt="" />
        <h3 className="card__title">{pizza.title}</h3>
        <div className="card__buttons">
            <div className="card__types">
                {
                    pizza.types.map((item, typesIndex) => {
                        return <button
                            data-index={typesIndex}
                            onClick={chooseType}
                            key={item}
                            className={typesIndex === activeType ? ["card__btn", "card__btn_active"].join(" ") : "card__btn"}
                        >
                            {item === 0 ? types[item] : types[item]}
                        </button>
                    })
                }
            </div>
            <div className="card__size">
                {
                    pizza.sizes.map((item, sizesIndex) => {
                        return <button
                            key={item}
                            data-index={sizesIndex}
                            onClick={chooseSize}
                            className={sizesIndex === activeSize ? ["card__btn", "card__btn_active"].join(" ") : "card__btn"}
                        >
                            {item} см.
                        </button>
                    })
                }
            </div>
        </div >
        <div className="card__footer">
            <p className="card__price">от {pizza.price} ₽</p>
            <button onClick={e => handleClick(e, pizza)} className="card__add">
                <span className="card__add-plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E" />
                    </svg>
                </span>
                <span className="card__add-text">Добавить</span>
                <span className="card__add-count">2</span>
            </button>
        </div>
    </div>
}

export default PizzaCart