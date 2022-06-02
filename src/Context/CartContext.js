import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [order, setOrder] = useState([]);

    return(
        <CartContext.Provider value={[order, setOrder]}>
            {props.children}
        </CartContext.Provider>
    );

};