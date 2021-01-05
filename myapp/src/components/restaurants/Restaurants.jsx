import React from 'react';
import RestaurantItem from './RestaurantItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Restaurants = ({ restaurants, loading }) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={restaurantStyle}>
                {restaurants.map(restaurant => (
                    <RestaurantItem key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
            );
    }
    
}

Restaurants.protoTypes = {
    restaurants: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const restaurantStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'

}

export default Restaurants;
