import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import { CustomButton } from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, items, history, toggleCartDropdownHidden }) => {
    const onCheckoutClick = React.useCallback(() => {
        toggleCartDropdownHidden();
        history.push('/checkout');
    }, [history, toggleCartDropdownHidden])
    return (
        < div className="cart-dropdown" style={hidden ? { display: 'none' } : undefined} >
            <div className="cart-items">
                {
                    items.length > 0 ?
                        items.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))
                        :
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={onCheckoutClick}>GO TO CHECKOUT</CustomButton>
        </div >
    )
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    items: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartDropdownHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));