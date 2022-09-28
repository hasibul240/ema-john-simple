import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, set_products] = useState([]);
    const [cart, set_cart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => set_products(data))
    }, [])

    const handle_add_to_cart = (product) => {
        console.log(product);
        const new_cart = [...cart, product];
        set_cart(new_cart);
    }
    
    return (
        <div className='shop_container'>
            <div className="products_container container">
                {
                    products.map(product => <Product key={product.id} product={product} handle_add_to_cart={handle_add_to_cart}></Product>)
                }
            </div>
            <div className="cart_container">
                <h3>this is shop shection</h3>
                <p>Item selected: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;