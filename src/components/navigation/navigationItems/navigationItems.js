import React from 'react';
import styles from './navigationItems.module.css';
import NavigationItem from './navigationItem/navigationItem';

const navigationItems = () => (
    <ul className = {styles['NavigationItems']}>
        <NavigationItem link ="/" exact > Burger Builder </NavigationItem>
        <NavigationItem link ="/orders"> Orders </NavigationItem>
    </ul>
);


export default navigationItems;
