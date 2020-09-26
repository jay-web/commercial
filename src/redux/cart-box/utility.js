export const addItemToCart = (cartItems, newItemToAdd) => {

    const existingItem = cartItems.find((item ) => {
        return item.id === newItemToAdd.id
    });

    // * If newItemToAdd is already added in cart
    if(existingItem){
       return cartItems.map((item) => {
            return item.id === newItemToAdd.id ?  
                   {...item, quantity: item.quantity + 1} :  // increase quantity
                   item             // else return normal item
        });
    
    }
   
    // * Else add the new item in cart
    return [...cartItems, {...newItemToAdd, quantity : 1}]
}

export const decreaseItem = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find((item) => {
        return item.id === itemToRemove.id;
    })

    // * If item quantity is already One, means user want to remove it from cart
    // * so return other cartitems after removing it completely
    if(existingItem.quantity === 1){
        return cartItems.filter((items) => {
            return items.id !== itemToRemove.id
        })
    }

    // * Since itemToRemove quantity in cart is more than one
    // * so just decrease the quantity by one, return it with other items

    return cartItems.map((item) => {
        return item.id === itemToRemove.id ? 
                    { ...item, quantity : item.quantity - 1} :
                    item
    })


}