import React from 'react';
import IncreaseDecrease from './IncreaseDecrease';

export default function CartProduct(props) {
    return (
        <div className='CartProduct'>
            <IncreaseDecrease product={props.product} />
            <h4>{`${props.product.qty} x ${props.product.name}`}</h4>
            <img className='CartImg' src={require(`../Resources/${props.product.image}`)} alt={props.product.name} />
            <h4>{`$ ${(props.product.price * props.product.qty).toFixed(2)}`}</h4>
        </div>
    );
};
