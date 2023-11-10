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

export enum ActionEnum {
    sortPizzaByPrice = "sortPizzaByPrice",
    sortPizzaByCategory = "sortPizzaByCategory"
}

export interface ActionSortPizzaByPrice {
    type: ActionEnum.sortPizzaByPrice,
    payload: string,
}
export interface ActionSortPizzaByCategory {
    type: ActionEnum.sortPizzaByCategory
    payload: number
}

export type PizzaAction = ActionSortPizzaByPrice | ActionSortPizzaByCategory;