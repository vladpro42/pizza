import { createSlice, current } from "@reduxjs/toolkit"
import type { RootState } from "../../../store/main.store"
import { PayloadAction } from "@reduxjs/toolkit"


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

export interface initialState {
    totalPrice: number,
    items: Cart[]
}

const initialState: initialState = {
    items: [],
    totalPrice: 0,
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<Cart>) {
            state.items.push(action.payload)
        },

        removeItemfromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => {
                if (item.uniqId !== action.payload) {
                    return item
                }
            })
        },

        incrementCount(state, action: PayloadAction<string>) {
            state.items.filter(item => {
                if (item.uniqId === action.payload) {
                    item.count++
                }
            })
        },

        decrementCount(state, action: PayloadAction<string>) {
            state.items.filter(item => {
                if (item.uniqId === action.payload) {
                    if (item.count === 0) {
                        return
                    } else {
                        item.count--
                    }
                }
            })
        },

        removeAllItemsFromCart(state) {
            state.items = []
        }

    },
})

export const { addItemToCart, removeItemfromCart, incrementCount, decrementCount, removeAllItemsFromCart } = basketSlice.actions

export const selectItems = (state: RootState) => state.rootReducer.order
export const selectTotalPrice = (state: RootState) => state.rootReducer.order.totalPrice


export default basketSlice.reducer