import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match, collections }) => (
    <div className="collection-page">
        <h2 className="title">{collections.title}</h2>
        <div className="items">
            {collections.items.map(item => (
                <CollectionItem className='collection-item' key={item.id} item={item} />
            ))}
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);