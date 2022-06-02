import React, { useContext } from 'react';
import Product from './Product';
import { ProductsContext } from '../Context/ProductsContext';

export default function ProductsOverview() {
    const [products, setProducts] = useContext(ProductsContext);

    return (
        <div className='Container'>
            {products.map(product => {
                return (
                    <Product 
                        key={product.id} 
                        id={product.id}
                        name={product.name} 
                        price={product.price}
                        image={product.image} 
                    />
                )
            })}
        </div>
    );
};
