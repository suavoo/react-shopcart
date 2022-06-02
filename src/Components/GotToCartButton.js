import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export default function GoToCartButton(props) {
    const [cart, setCart] = useContext(CartContext);
    const numberOfItems = (key) => {
        return cart.reduce((a, b) => a + (b[key] || 0), 0);
    };

    return ( 
        <button className='CartButton' onClick={props.goToCart}>{`Cart: ${numberOfItems('qty')} items`}</button> 
    );
};
