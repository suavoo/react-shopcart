import React from 'react';
import GoToCartButton from './GotToCartButton';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <div className='Navbar'>
            <h1 className='Title' onClick={goHome}>ShopCart</h1>
            <GoToCartButton goToCart={goToCart} />
        </div>
    );
};
