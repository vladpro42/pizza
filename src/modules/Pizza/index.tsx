import React from "react"
import { useState } from "react";
import NavigationPizza from "./components/NavigationPizza";
import { useAppSelector } from "../../hooks/hooks";
import { selectPizza } from "./slice/pizzaSlice";
import { PizzaState } from "./slice/pizzaSlice"
import PizzaCart from "./components/PizzaCart";

const Pizza: React.FC = () => {

    const pizza = useAppSelector(selectPizza)




    return <div className="container__inner">
        <NavigationPizza />
        <div className="menu">
            <h2 className="menu__title">Все пиццы</h2>
            <div className="menu__inner">
                {
                    pizza.map((item) => {
                        return <PizzaCart key={item.id} pizza={item} />
                    })
                }
            </div>
        </div>
    </div>
}

export default Pizza