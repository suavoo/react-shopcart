import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import CartProduct from './CartProduct';

export default function ShoppingCart() {
    const [cart, setCart] = useContext(CartContext);

    const totalAmount = cart.reduce((ack, p) => ack + p.qty * p.price, 0);

   
    if (cart.length > 0) {
        return(
            <div className='ProductDetailsCard'>
                <h1>Shopping Cart</h1>
                <div className='CartDiv'>
                    {cart.map(product => {
                        return <CartProduct key={product.id} product={product} />
                    })}
                </div>
                <div className='CartTotal'>
                    <h5>Total:</h5>
                    <h3>{`$ ${totalAmount}`}</h3>
                </div>
                <button className='CheckoutButton'>Checkout</button>
            </div> 
        );
    } else {
        return(
            <div className='ProductDetailsCard'>
                <h1>Shopping Cart</h1>
                <h4>Cart is currently empty</h4>
            </div>
        );    
    }  

};
