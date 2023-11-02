import { Cart } from "../../../Basket/api/basket.slice"
import { PizzaState } from "../../slice/pizzaSlice"
import { useAppDispatch } from "../../../../hooks/hooks"
import { addItemToCart } from "../../../Basket/api/basket.slice"
import { useState } from "react"


const AddBtnToBasket = ({ pizza, activeSize, activeType }: { pizza: PizzaState, activeSize: number, activeType: number }) => {

    const [isAlert, setIsAlert] = useState(false)

    const dispatch = useAppDispatch()

    const handleClickAddBasket = (e: React.MouseEvent<HTMLButtonElement>, item: PizzaState) => {

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
        e.currentTarget.dataset.uniqid = payload.uniqId
        setIsAlert(prev => !prev)
        dispatch(addItemToCart(payload))
    }

    return <button onClick={e => handleClickAddBasket(e, pizza)} className="card__add">
        {isAlert && <p>Добавлено</p>}
        <span className="card__add-plus">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E" />
            </svg>
        </span>
        <span className="card__add-text">Добавить</span>
        <span className="card__add-count">1</span>
    </button>
}

export default AddBtnToBasket