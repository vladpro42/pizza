import { Cart } from "../../api/basket.types"
import { useAppDispatch } from "../../../../hooks/hooks"
import { removeItemfromCart } from "../../api/basket.slice"
import { memo } from "react"
import OrderCounter from "../OrderCounter"


interface PropsCart {
    pizza: Cart
}

const OrderItem = ({ pizza }: PropsCart) => {
    console.log("rerender orderItem")
    const dispatch = useAppDispatch()

    const deleteItem = (e: React.MouseEvent<HTMLButtonElement>, uniqId: string) => {
        dispatch(removeItemfromCart(uniqId))
    }

    return <li className="order__item">
        <div className="box">
            <img className="box__img" src="/img/pizza1.jpg" alt="" />
            <div className="box__titles">
                <h3 className="box__title">{pizza.title}</h3>
                <p className="box__subtitle">{pizza.type} тесто, {pizza.size} см.</p>
            </div>
        </div>
        <OrderCounter uniqId={pizza.uniqId} count={pizza.count} />
        <p className="item__price">{pizza.price * pizza.count} ₽ </p>
        <button onClick={e => deleteItem(e, pizza.uniqId)} className="item__btn-delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" fill="white" stroke="#D7D7D7" strokeWidth="2" />
                <path d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z" fill="#D0D0D0" />
            </svg>
        </button>
    </li>
}

export default OrderItem