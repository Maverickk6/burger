import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems'
import styles from './sideDrawer.module.css';
import Backdrop from '../../UI/backdrop/backdrop';
import Aux from '../../../hoc/auxillary/Auxillary';


const sideDrawer= (props) => {
    let attachedClasses = [ styles['SideDrawer'], styles['Close']];
    if (props.open) {
        attachedClasses = [styles['SideDrawer'], styles['Open']];
    }
    return(
        <Aux>
        <Backdrop show = {props.open} backdropClicked = {props.closed}/>
        <div className = {attachedClasses.join(' ')}>
            {/* passing the logo height as props for constraint is also a method */}
            <div className = {styles['Logo']}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}


export default sideDrawer;