import React, { useContext } from 'react';
import { ProductsContext } from '../Context/ProductsContext';
import { CartContext } from '../Context/CartContext';

export default function AddToCartButton(props) {
    const [products, setProducts] = useContext(ProductsContext);
    const [cart, setCart] = useContext(CartContext);

    const addItem = (id) => {
        const product = products.filter(p => p.id === id)[0];
        const exists = cart.find(p => p.id === id);
        if (exists) {
            setCart(
                cart.map(p => p.id === id ? { ...exists, qty: exists.qty + 1 } : p ) 
            );
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    console.log(cart);

    return (
        <div>
            <button 
                className='CartButton Add'
                onClick={() => addItem(props.id)}
            >
                Add To Cart
            </button>
        </div>
    );
};
