import React from 'react';

const CartContext = React.createContext({
    items: [],
    totleAmount: 0,
    totalPrice: 0,
    addItemHandler: ()=>{},
    removeItemHandler: ()=>{}
});

export default CartContext;