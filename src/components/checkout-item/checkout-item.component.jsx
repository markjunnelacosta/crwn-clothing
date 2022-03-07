import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, clearItemToCart, removeItemToCart } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, item: { name, quantity, imageUrl, price }, clearItem, addItem, removeItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemToCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItemToCart(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);