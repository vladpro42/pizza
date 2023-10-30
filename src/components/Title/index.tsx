import React from "react"
import PizzaLogo from "../../UI/PizzaLogo"

const Title = () => {
    return <div className="title__wrap">
        <PizzaLogo />
        <div className="header__title-box">
            <h1 className="header__title">REACT PIZZA</h1>
            <p className="header__subtitle">самая вкусная пицца во вселенной</p>
        </div>
    </div>
}

export default Title