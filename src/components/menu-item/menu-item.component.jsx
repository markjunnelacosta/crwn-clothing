import * as React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

export const MenuItem = withRouter(({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            style={{ backgroundImage: `url("${imageUrl}")` }}
            className="background-image"
        />
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div >
));