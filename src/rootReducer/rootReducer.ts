import { combineReducers } from "@reduxjs/toolkit"
import pizzaSlice from "../modules/Pizza/slice/pizzaSlice"

const rootReducer = combineReducers({
    pizza: pizzaSlice
})

export {rootReducer}