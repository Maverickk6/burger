import React from 'react';
import styles from './toolbar.module.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle';

const ToolBar = (props) => (
    <header className = {styles['Toolbar']}>
        <DrawerToggle clicked = {props.drawerToggleClicked}/>
{/*also constraining the logo height using props */}
        <div className = {styles['Logo']}>
          <Logo/>
        </div>
        <nav className = {styles['DesktopOnly']}>
          <NavigationItems />
        </nav>
    </header>
);


export default ToolBar;