import React from 'react'
import PropTypes from 'prop-types';

const Navbar = ( {icon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} />{title}
            </h1>
        </nav>
        );
};

Navbar.defaultProps = {
    title: 'My hometown restaurants',
    icon: 'fas fa-utensils'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.isRequired
};

export default Navbar