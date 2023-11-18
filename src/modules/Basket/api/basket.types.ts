import { type } from "os"

export type Cart = {
    uniqId: string,
    id: number,
    imgUrl: string,
    price: number,
    title: string,
    type: "тонкое" | "традиционное",
    size: number,
    count: number,
}

export interface InitialState {
    totalPrice: number,
    items: Cart[]
}

export enum ActionEnum {
    addItemToCart = "addItemToCart",
    removeItemfromCart = "removeItemfromCart",
    incrementCount = "incrementCount",
    decrementCount = "decrementCount",
    removeAllItemsFromCart = "removeAllItemsFromCart",
}

export interface ActionAddItemToCart {
    type: ActionEnum.addItemToCart
    payload: Cart
}
export interface ActionRemoveItemfromCart {
    type: ActionEnum.removeItemfromCart
    payload: string
}
export interface ActionIncrementCount {
    type: ActionEnum.incrementCount
    payload: string
}
export interface ActionDecrementCount {
    type: ActionEnum.decrementCount
    payload: string
}
export interface ActionRemoveAllItemsFromCart {
    type: ActionEnum.removeAllItemsFromCart
}

export type ActionBasket =
    ActionAddItemToCart |
    ActionRemoveItemfromCart |
    ActionIncrementCount |
    ActionDecrementCount |
    ActionRemoveAllItemsFromCart;