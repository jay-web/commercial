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
   
    // * Else 
    return [...cartItems, {...newItemToAdd, quantity : 1}]
}