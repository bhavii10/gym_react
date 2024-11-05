import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.scss';
import { Puff } from 'react-loader-spinner';

const ShoppingCart = ({ cartItems, setCartItems }) => {
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }, [cartItems]);

    const updateQuantity = (index, delta) => {
        const updatedItems = [...cartItems];
        const updatedItem = { ...updatedItems[index], quantity: updatedItems[index].quantity + delta };

        if (updatedItem.quantity > 0) {
            updatedItems[index] = updatedItem;
        } else {
            updatedItems.splice(index, 1);
        }
        setCartItems(updatedItems);
    };

    const proceedToCheckout = () => {
        if (total === 0) return;
        setLoading(true);
        setCartItems([]);
        setTimeout(() => {
            navigate('/placeorder');
        }, 2000);
    };

    return (
        <div className="cart-container">
            <div className="heading-card">
                <h1>Shopping Cart</h1>
            </div>
            {loading ? (
                <div className="loading-prompt">
                    <Puff type="Puff" color="#2196F3" height={100} width={100} />
                    <p>Your order is being processed...</p>
                </div>
            ) : cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty.</h2>
                    <p>Start adding items to your cart!</p>
                </div>
            ) : (
                <div className="items-list">
                    <div className="cart-item-card">
                        {cartItems.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <div className="item-info">
                                    <span className="item-name">{item.name}</span>
                                </div>
                                <div className="quantity-control">
                                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(index, 1)}>+</button>
                                </div>
                                <span className="item-price">₹{item.price.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="total-card">
                <span className="total-text">Total: ₹{total.toFixed(2)}</span>
                <button className="checkout-button" onClick={proceedToCheckout} disabled={total === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
