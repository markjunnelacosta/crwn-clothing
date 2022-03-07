import React from 'react';
import { connect } from 'react-redux';
import { CollectionPreview } from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
