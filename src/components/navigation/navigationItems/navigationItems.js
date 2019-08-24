import React from 'react';
import styles from './navigationItems.module.css';
import NavigationItem from './navigationItem/navigationItem';

const navigationItems = () => (
    <ul className = {styles['NavigationItems']}>
        <NavigationItem link ="/" active> Burger Builder </NavigationItem>
        <NavigationItem link ="/"> Checkout </NavigationItem>
    </ul>
);


export default navigationItems;
