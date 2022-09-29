import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2> This is cart container...</h2>
            <h3>Selected Product: {cart.length}</h3>
        </div>
    );
};

export default Cart;