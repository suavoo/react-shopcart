import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../Context/ProductsContext';
import { useParams } from "react-router-dom";
import AddToCartButton from './AddToCartButton';

export default function ProductDetails() {
    const [products, setProducts] = useContext(ProductsContext);
    const [product, setProduct] = useState();
    const params = useParams();

    const getProduct = () => {
        const prod = products.filter(p => p.id === params.id);
        setProduct(prod[0]);
    };

    useEffect(() => {
         getProduct();  
    }, []); 

    return (
        (product ? 
                <div className='ProductDetailsCard'>
                    <h1>{product.name}</h1>
                    <div className='DetailsDiv'>
                        <img className='CardImage' src={require(`../Resources/${product.image}`)} alt={product.name}/>
                        <div className='Description'>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className='DetailsDiv'>
                        <h4>{`$${product.price}`}</h4>
                        <AddToCartButton id={product.id} />
                    </div>
                </div> 
        :  <h1>Loading...</h1>)
    );
};
