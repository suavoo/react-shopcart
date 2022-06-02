import React from 'react';
import AddToCartButton from './AddToCartButton';
import { useNavigate } from "react-router-dom";

export default function Product(props) {
    const navigate = useNavigate();

    const openDetails = () => {
        navigate(`/details/${props.id}`)
    };

    return (
        <div className='ProductCard'>
            <div className='ProductInteractive' onClick={openDetails}>
                <img className='CardImage' src={require(`../Resources/${props.image}`)} alt={props.name}/>
                <h3>{props.name}</h3>
                <h5>{`$ ${props.price}`}</h5>
            </div>
            <AddToCartButton id={props.id} />
        </div>
    );
};


