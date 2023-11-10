import { type } from "os";
import type { RootState } from "../../../store/main.store"
import { Dispatch } from "redux"
import { ActionEnum, ActionGetPizza, ActionSortPizzaByCategory, ActionSortPizzaByPrice, PizzaAction, PizzaState } from "./pizza.types";

function compareString(a: PizzaState, b: PizzaState,) {

    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}


const pizzaArray: PizzaState[] = [
    /* {
        id: 1,
        title: "Чизбургер-пицца",
        price: 395,
        imgUrl: "",
        rating: 4,
        category: 0,
        sizes: [26, 30, 40],
        types: [0, 1]
    },
    {
        id: 2,
        title: "Сырная",
        price: 450,
        imgUrl: "",
        rating: 4,
        category: 5,
        sizes: [26, 30, 40],
        types: [0, 1]
    },
    {
        id: 3,
        title: "Креветки по-азиатски",
        price: 290,
        imgUrl: "",
        rating: 1,
        category: 2,
        sizes: [26, 30],
        types: [0, 1]
    },
    {
        id: 4,
        title: "Сырный цыпленок",
        price: 385,
        imgUrl: "",
        rating: 4,
        category: 3,
        sizes: [26, 30, 40],
        types: [0, 1]
    },
    {
        id: 5,
        title: "Аррива",
        price: 390,
        imgUrl: "",
        rating: 5,
        category: 2,
        sizes: [26, 30, 40],
        types: [0, 1]
    }, */

]

const initialState = {
    activeCategory: 0,
    pizzaArray,
}

export function fetchPizzas() {
    return (dispath: Dispatch<PizzaAction>) => {
        fetch("http://localhost:3000/pizza")
            .then(res => res.json())
            .then(json => dispath(getPizzaAction(json)))
    }
}

export const pizzaReducer = (state = initialState, action: PizzaAction) => {
    switch (action.type) {

        case ActionEnum.getPizza:
            return { ...state, pizzaArray: action.payload }

        case ActionEnum.sortPizzaByPrice:
            if (action.payload === "price") {
                return { ...state, pizzaArray: [...state.pizzaArray].sort((a, b) => a.price - b.price) }
            } else if (action.payload === "rating") {
                return { ...state, pizzaArray: [...state.pizzaArray].sort((a, b) => b.rating - a.rating) }
            } else if (action.payload === "abs") {
                return { ...state, pizzaArray: [...state.pizzaArray].sort(compareString) }
            }
            return { ...state };
        case ActionEnum.sortPizzaByCategory:
            return {
                ...state,
                activeCategory: action.payload
            }
        default:
            return { ...state };
    }
}

export const selectPizza = (state: RootState) => state.pizza.pizzaArray
export const selectActiveCategory = (state: RootState) => state.pizza.activeCategory

export const sortPizzaByPrice = (value: string): ActionSortPizzaByPrice => ({
    type: ActionEnum.sortPizzaByPrice,
    payload: value
});

export const sortPizzaByCategory = (value: number): ActionSortPizzaByCategory => ({
    type: ActionEnum.sortPizzaByCategory,
    payload: value
});

export const getPizzaAction = (value: PizzaState[]): ActionGetPizza => ({
    type: ActionEnum.getPizza,
    payload: value
})