import React, { Component } from 'react';
import styles from './modal.module.css';
import Aux from '../../../hoc/auxillary/Auxillary';
import Backdrop from '../backdrop/backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render () {
        return(
            <Aux>
        <Backdrop show ={this.props.show}
            backdropClicked = {this.props.modalClosed} />
        <div className = {styles['Modal']}
            style = {{
                transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                {this.props.children}
        </div>
    </Aux>
        )
    }    
};


export default Modal;