import { createSelector } from "reselect"; // * reselect is the library to use memoiation

// ! we can stop rerender of component if its previous state don't received any update
// ! with the help of reselect library

const selectCart = (state) => {
    return state.cart;
}

// * If required only cart from state, use below function
export const selectCartItem = createSelector(
    [selectCart],
    (cart) => {
        return cart.cartItems
    }
)

// * If required quantity of items cart, use below function
export const selectCartItemsCount = createSelector(
    [selectCartItem],
    (cartItems) => {
        return cartItems.reduce((accumulatorQuantity, item) => {
            return accumulatorQuantity + item.quantity
        }, 0)
    }
)

// * If required total amount of items in cart

export const selectTotal = createSelector(
    [selectCartItem],
    (cartItems) => {
        return cartItems.reduce((accumulatorQuantity, item) => {
             return accumulatorQuantity + item.quantity * item.price
        }, 0)
    }
)