import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({ onClick, cartItems }) => (
    <div onClick={onClick} className="cart-icon">
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItems.length}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.items
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
