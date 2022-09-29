import React, { useEffect, useState } from 'react';
import { addToDb, get_stored_data } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(() => {
        const stored_cart = get_stored_data();
        const saved_cart = [];

        for (const id in stored_cart) {
            const added_product = products.find(product => product.id === id);
            if (added_product) {
                const quantity = stored_cart[id];
                added_product.quantity = quantity;
                saved_cart.push(added_product);
            }
        }
        set_cart(saved_cart);
    }, [products])

    useEffect(() => {
        const stored_cart = get_stored_data();
        const saved_cart = [];

        for (const id in stored_cart) {
            const added_product = products.find(product => product.id === id);

            if (added_product) {
                const quantity = stored_cart[id];
                added_product.quantity = quantity;
                saved_cart.push(added_product);
            }
        }
        set_cart(saved_cart);
    }, [products])

    const handle_add_to_cart = (selected_product) => {
        const exist_product = cart.find(product => product.id === selected_product.id);
        let new_cart = [];

        if(!exist_product){
            selected_product.quantity = 1;
            new_cart = [...cart, selected_product];
        } else {
            const rest = cart.filter(product => product.id !== selected_product.id);
            exist_product.quantity = exist_product.quantity + 1;
            new_cart = [...rest, exist_product];
        }

        set_cart(new_cart);
        addToDb(selected_product.id);
    }

    return (
        <div className='shop_container'>
            <div className="products_container container">
                {
                    products.map(product => <Product key={product.id} product={product} handle_add_to_cart={handle_add_to_cart}></Product>)
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;