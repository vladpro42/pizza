import { Cart } from "../api/basket.slice";

export function getTotalPrice(array: Cart[]) {
    const total = array.reduce((prev, cur) => {
        return (prev) + (cur.price * cur.count)
    }, 0);

    return total;
}

export function getTotalCount(array: Cart[]) {

    const countPizza = array.reduce((prev, cur) => {
        return prev + cur.count
    }, 0)

    return countPizza

}