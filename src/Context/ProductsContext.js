import React, { useState, createContext } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([
        {
            id: "1641373200000",
            name: "Putzkübel",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae et blanditiis non. Nihil hic, consequatur, numquam ex iure beatae aut in reprehenderit omnis architecto voluptatem minus, minima magnam. Iure.",
            price: 9.99,
            image: "bucket.jpg"
        },
        {
            id: "1641639600000",
            name: "Book",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae et blanditiis non. Nihil hic, consequatur, numquam ex iure beatae aut in reprehenderit omnis architecto voluptatem minus, minima magnam. Iure.",
            price: 17.85,
            image: "book.jpg"
        },
        { 
            id: "1641805200000",
            name: "Drumkit",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae et blanditiis non. Nihil hic, consequatur, numquam ex iure beatae aut in reprehenderit omnis architecto voluptatem minus, minima magnam. Iure.",
            price: 359.70,
            image: "drumkit.jpg"
        },
        {
            id: "1642082400000",
            name: "Shopping cart",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae et blanditiis non. Nihil hic, consequatur, numquam ex iure beatae aut in reprehenderit omnis architecto voluptatem minus, minima magnam. Iure.",
            price: 49.50,
            image: "shoppingcart.webp"
        },
        {
            id: "1645700400000",
            name: "Binacolars",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae et blanditiis non. Nihil hic, consequatur, numquam ex iure beatae aut in reprehenderit omnis architecto voluptatem minus, minima magnam. Iure.",
            price: 79.99,
            image: "binoculars.jpg"
        }
    ]);

    return(
        <ProductsContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductsContext.Provider>
    );

};