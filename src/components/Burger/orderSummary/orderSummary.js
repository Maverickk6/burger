import React, { Component } from 'react';
import Aux from '../../../hoc/auxillary/Auxillary';
import Button from '../../UI/button/modalbutton';

class OrderSummary extends Component {
    render () {
        //this could be a functional component. doesnt have to be a class
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (<li key = {igKey}>
                    <span style = {{textTransform: 'capitalize'}}>{igKey}</span>:
                    {this.props.ingredients[igKey]}
                 </li>
        )});
        console.log(ingredientsSummary);

        return(
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price : ${this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }      
};


export default OrderSummary;