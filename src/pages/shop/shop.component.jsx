import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        isLoading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = collection(firestore, 'collections');

        getDocs(collectionRef)
            .then(snapshot => {
                this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot));
                this.setState({ loading: false });
            });


        // onSnapshot(collectionRef, async (snapshot) => {
        //     this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot));
        //     this.setState({ loading: false });
        // });
    }

    render() {
        const { match, isLoading } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionsPageWithSpinner isLoading={isLoading} {...props} />} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);