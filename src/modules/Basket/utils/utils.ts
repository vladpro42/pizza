import { Cart } from "../api/basket.types";

export function getTotalPrice(array: Cart[]) {
    const total = array.reduce((prev, cur) => {
        return (prev) + (cur.price * cur.count)
    }, 0);
    const res = Math.round(total * 100) / 100
    console.log(res, "result")
    return res;
}

export function getTotalCount(array: Cart[]) {

    const countPizza = array.reduce((prev, cur) => {
        return prev + cur.count
    }, 0)

    return countPizza

}