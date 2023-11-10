import { combineReducers, createStore } from "redux";
import { basketReducer } from "../modules/Basket/api/basket.slice";
import { pizzaReducer } from "../modules/Pizza/slice/pizzaSlice";


const mainReducer = combineReducers({
    pizza: pizzaReducer,
    basket: basketReducer
})

export const oldStore = createStore(mainReducer)

export type RootState = ReturnType<typeof oldStore.getState>

export type AppDispatch = typeof oldStore.dispatch
