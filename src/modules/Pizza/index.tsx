import React from "react"
import NavigationPizza from "./components/NavigationPizza";
import { useAppSelector } from "../../hooks/hooks";
import PizzaCart from "./components/PizzaCart";
import { selectActiveCategory } from "./slice/pizzaSlice";
import SkeletonCart from "./components/SkeletonCart";
import { PizzaState } from "./slice/pizza.types";
import { selectPizza } from "./slice/pizzaSlice";

const Pizza: React.FC = () => {

    const pizzas = useAppSelector(selectPizza)

    const activeCategory = useAppSelector(selectActiveCategory)

    function filterByCategory(item: PizzaState) {
        if (activeCategory === 0) {
            return item
        }
        return item.category === activeCategory
    }

    const list = new Array(12).fill(0)


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
                <SkeletonCart />
            </div>
        </div>
    </div>
}

export default Pizza