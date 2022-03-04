import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addToCart }) => {
    const { name, price, imageUrl } = item;

    const addItemToCart = React.useCallback(() => {
        addToCart(item);
    }, [item, addToCart]);

    return (
        <div className="collection-item" >
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={addItemToCart}>Add to Cart</CustomButton>
        </div >);
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);