import React from 'react';
import styles from './modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../backdrop/backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show ={props.show}
            backdropClicked = {props.modalClosed} />
        <div className = {styles['Modal']}
            style = {{
                transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
        </div>
    </Aux>
);


export default modal;