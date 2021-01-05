import React from 'react'
import PropTypes from 'prop-types';

const RestaurantItem = ({ restaurant: { name, image_url: { 	shop_image1 } } }) => {
    return (
            <div className="card text-center">
                <img src={	shop_image1} style={{ width: '100px'}}/>
                <h3>{name}</h3>  
            </div>
        );
    
};

RestaurantItem.propTypes = {
    restaurant: PropTypes.object.isRequired
};

export default RestaurantItem
