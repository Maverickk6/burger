import React, { Component } from 'react';
import Aux from '../auxillary/Auxillary';
import styles from './layout.module.css';
import Toolbar from '../../components/navigation/toolbar/toolbar';
import SideDrawer from '../../components/navigation/sideDrawer/sideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => { 
            return {showSideDrawer: !prevState.showSideDrawer};
    } );
}

    render () {
       return(
        <Aux>
            <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler} />
            <SideDrawer 
                open = {this.state.showSideDrawer}
                closed = {this.sideDrawerCloseHandler}/>
            <main className = {styles['Content']}>
                {this.props.children}
            </main>
        </Aux>
       ) 
    }
};
    


export default Layout;
