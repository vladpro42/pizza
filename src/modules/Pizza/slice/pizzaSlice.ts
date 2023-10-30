import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"
import type { RootState } from "../../../store/main.store"

function compareString(a: PizzaState, b: PizzaState,) {

    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}

export interface PizzaState {
    id: number,
    title: string,
    price: number,
    imgUrl: string,
    types: [number, number],
    sizes: number[],
    rating: number,
    category: number,
}

const pizzaArray: PizzaState[] = [
    {
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
    },

]

const initialState = {
    activeCategory: 0,
    pizzaArray
}

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        sortPizzaByPrice: (state, action: PayloadAction<string>) => {
            if (action.payload === "price") {
                state.pizzaArray = state.pizzaArray.sort((a, b) => a.price - b.price)
            } else if (action.payload === "rating") {
                state.pizzaArray = state.pizzaArray.sort((a, b) => b.rating - a.rating)
            } else if (action.payload === "abs") {
                state.pizzaArray = state.pizzaArray.sort(compareString)
            }
        },

        sortPizzaByCategory: (state, action: PayloadAction<number>) => {
          /*   if (action.payload === 0) {
                return state
            } */
            state.activeCategory = action.payload
        }
    },
})

export const { sortPizzaByPrice, sortPizzaByCategory } = pizzaSlice.actions

export const selectPizza = (state: RootState) => state.rootReducer.pizza.pizzaArray
export const selectActiveCategory = (state: RootState) => state.rootReducer.pizza.activeCategory

export default pizzaSlice.reducer