import React from "react"
import NavigationPizza from "./components/NavigationPizza";
import { useAppSelector } from "../../hooks/hooks";
import PizzaCart from "./components/PizzaCart";
import { selectActiveCategory } from "./slice/pizzaSlice";
import SkeletonCart from "./components/SkeletonCart";
import { PizzaState } from "./slice/pizza.types";
import { selectPizza } from "./slice/pizzaSlice";
import { useEffect } from "react"
import { useAppDispatch } from "../../hooks/hooks";
import { fetchPizzas } from "./slice/pizzaSlice";

const Pizza = () => {

    const dispatch: any = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPizzas())
    }, [])

    const pizzas: PizzaState[] = useAppSelector(selectPizza)

    const activeCategory = useAppSelector(selectActiveCategory)

    function filterByCategory(item: PizzaState) {
        if (activeCategory === 0) {
            return item
        }
        return item.category === activeCategory
    }

    if (pizzas.length == 0) {
        return <div className="container__inner">
            <NavigationPizza />
            <div className="menu">
                <h2 className="menu__title">Все пиццы</h2>
                <div className="menu__inner">
                    {
                        new Array(8).fill(0).map((_, index) => {
                            return <SkeletonCart key={index} />
                        })
                    }
                </div>
            </div>
        </div>

    }

    return <div className="container__inner">
        <NavigationPizza />
        <div className="menu">
            <h2 className="menu__title">Все пиццы</h2>
            <div className="menu__inner">
                {
                    pizzas.filter(filterByCategory).map((item) => {
                        return <PizzaCart key={item.id} pizza={item} />
                    })
                }
            </div>
        </div>
    </div>
}

export default Pizza