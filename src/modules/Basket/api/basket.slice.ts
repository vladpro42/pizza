import type { RootState } from "../../../store/main.store"
import {
    InitialState,
    Cart,
    ActionBasket,
    ActionAddItemToCart,
    ActionRemoveAllItemsFromCart,
    ActionDecrementCount,
    ActionIncrementCount,
    ActionRemoveItemfromCart
} from "./basket.types"
import { ActionEnum } from "./basket.types"

const initialState: InitialState = {
    items: [],
    totalPrice: 0,
}


export function basketReducer(state = initialState, action: ActionBasket) {
    switch (action.type) {
        case ActionEnum.addItemToCart:
            return { ...state, items: [...state.items, action.payload] };
        case ActionEnum.removeItemfromCart:
            return { ...state, items: [...state.items].filter(item => item.uniqId !== action.payload) };
        case ActionEnum.incrementCount:
            console.log(state)
            return {
                ...state, items: [...state.items].filter(item => {
                    if (item.uniqId === action.payload) {
                        item.count = item.count + 1
                        return item
                    }
                    return item
                })
            };
        case ActionEnum.decrementCount:
            return {
                ...state, items: [...state.items].filter(item => {
                    if (item.uniqId === action.payload) {
                        if (item.count === 0) {
                            return item
                        } else {
                            item.count = item.count - 1
                            return item
                        }
                    }
                    return item
                })
            };
        case ActionEnum.removeAllItemsFromCart:
            return { ...state, items: [] };
        default:
            return { ...state };
    }
}

export const selectItems = (state: RootState) => state.basket.items
export const selectTotalPrice = (state: RootState) => state.basket.totalPrice

export const addItemToCart = (value: Cart): ActionAddItemToCart => ({
    type: ActionEnum.addItemToCart,
    payload: value
})


export const removeAllItemsFromCart = (): ActionRemoveAllItemsFromCart => ({
    type: ActionEnum.removeAllItemsFromCart,
})


export const decrementCount = (value: string): ActionDecrementCount => ({
    type: ActionEnum.decrementCount,
    payload: value
})


export const incrementCount = (value: string): ActionIncrementCount => ({
    type: ActionEnum.incrementCount,
    payload: value
})

export const removeItemfromCart = (value: string): ActionRemoveItemfromCart => ({
    type: ActionEnum.removeItemfromCart,
    payload: value
})

/* 
export const addItemToCart = (value: Cart): ActionAddItemToCart => ({
    type: ActionEnum.addItemToCart,
    payload: value
})

 */