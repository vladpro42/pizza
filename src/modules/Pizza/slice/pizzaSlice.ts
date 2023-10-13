import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../../store/main.store"
import { types } from "util"

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

const initialState: PizzaState[] = [
    {
        id: 1,
        title: "Чизбургер-пицца",
        price: 395,
        imgUrl: "",
        rating: 4,
        category: 1,
        sizes: [26, 30, 40],
        types: [0, 1]
    },
    {
        id: 2,
        title: "Сырная",
        price: 450,
        imgUrl: "",
        rating: 4,
        category: 1,
        sizes: [26, 30, 40],
        types: [0, 1]
    },
    {
        id: 3,
        title: "Креветки по-азиатски",
        price: 290,
        imgUrl: "",
        rating: 4,
        category: 1,
        sizes: [26, 30],
        types: [0, 1]
    },
    {
        id: 4,
        title: "Сырный цыпленок",
        price: 385,
        imgUrl: "",
        rating: 4,
        category: 1,
        sizes: [26, 30, 40],
        types: [0, 1]
    },
]

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {

    },
})

export const { } = pizzaSlice.actions

export const selectPizza = (state: RootState) => state.rootReducer.pizza


export default pizzaSlice.reducer