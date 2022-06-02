import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export default function IncreaseDecrease(props) {
    const [cart, setCart] = useContext(CartContext);
    

    const increaseQty = (id) => {
        const newCart = [...cart];
        setCart(
            newCart.map(p => p.id === id ? { ...p, qty: p.qty + 1 } : p ) 
        );
    };

    const decreaseQty = () => {
        const newCart = [...cart];
        if (props.product.qty === 1) {
            setCart(newCart.filter(p => p.id !== props.product.id));
        } else {
            setCart(newCart.map(p => p.id === props.product.id ? { ...p, qty: p.qty - 1 } : p));
        }
    };

    return (
        <div className='IncreaseDecrease'>
            <div className='PlusMinusButton' onClick={decreaseQty}>-</div>
            <div className='PlusMinusButton' onClick={() => increaseQty(props.product.id)} >+</div>
        </div>
    );
};
