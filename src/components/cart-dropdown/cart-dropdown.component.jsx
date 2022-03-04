import React from 'react';
import { connect } from 'react-redux';
import { CustomButton } from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden }) => (
    < div className="cart-dropdown" style={hidden ? { display: 'none' } : undefined} >
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div >
);

const mapStateToProps = (state) => ({
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(CartDropdown);