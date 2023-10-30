import { combineReducers } from "@reduxjs/toolkit"
import pizzaSlice from "../modules/Pizza/slice/pizzaSlice"
import basketSlice from "../modules/Basket/api/basket.slice"

const rootReducer = combineReducers({
    pizza: pizzaSlice,
    order: basketSlice,
})

export { rootReducer }