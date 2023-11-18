import { applyMiddleware, combineReducers, createStore } from "redux";
import { basketReducer } from "../modules/Basket/api/basket.slice";
import { pizzaReducer } from "../modules/Pizza/slice/pizzaSlice";
import thunk from "redux-thunk";


const mainReducer = combineReducers({
    pizza: pizzaReducer,
    basket: basketReducer
})

export const oldStore = createStore(mainReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof oldStore.getState>

export type AppDispatch = typeof oldStore.dispatch
