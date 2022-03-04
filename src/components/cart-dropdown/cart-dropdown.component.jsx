import React from 'react';
import { connect } from 'react-redux';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import { CustomButton } from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, items }) => (
    < div className="cart-dropdown" style={hidden ? { display: 'none' } : undefined} >
        <div className="cart-items">
            {items.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div >
);

const mapStateToProps = (state) => ({
    hidden: selectCartHidden(state),
    items: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);