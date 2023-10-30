import React from "react"
import NavigationPizza from "./components/NavigationPizza";
import { useAppSelector } from "../../hooks/hooks";
import { PizzaState, selectPizza } from "./slice/pizzaSlice";
import PizzaCart from "./components/PizzaCart";
import { selectActiveCategory } from "./slice/pizzaSlice";


const Pizza: React.FC = () => {

    const pizza = useAppSelector(selectPizza)
    const activeCategory = useAppSelector(selectActiveCategory)

    function filterByCategory(item: PizzaState) {
        if (activeCategory === 0) {
            return item
        }
        return item.category === activeCategory
    }


    return <div className="container__inner">
        <NavigationPizza />
        <div className="menu">
            <h2 className="menu__title">Все пиццы</h2>
            <div className="menu__inner">
                {
                    pizza.filter(filterByCategory).map((item) => {
                        return <PizzaCart key={item.id} pizza={item} />
                    })
                }
            </div>
        </div>
    </div>
}

export default Pizza