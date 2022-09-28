import React from 'react';
import './cart.css';

const Cart = ({ cart }) => {

    let total = 0;
    let Shipping = 0;

    for (const product of cart) {
        total = total + product.price;
        Shipping = Shipping + product.shipping;
    }
    const tax = total * 0.1;
    const grand_total = total + Shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Item selected: {cart.length}</p>
            <p>Total Price:$ {total}</p>
            <p>Shipping:$ {Shipping}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h5>Grand Total:$ {grand_total}</h5>
        </div>
    );
};

export default Cart;