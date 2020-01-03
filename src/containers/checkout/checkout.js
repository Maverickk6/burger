import React, { Component } from 'react';
import CheckoutSummary from '../../components/order/checkoutsummary/checkoutsummary';
import { Route } from 'react-router-dom';
import ContactData from './contactdata/contactdata';
// import queryString from 'query-string';

// const parsed = queryString.parse(this.props.location.search);


class Checkout extends Component {

    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount () {
         const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        console.log(query.entries);
        for (let param of query.entries() ) {
            if(param[0] === 'price') {
                price = param[1]
            }else {
                ingredients[param[0]] = +param[1];
            }            
        }
        console.log(ingredients);
        this.setState({ingredients: ingredients, price: price});
    }

        checkoutCancelledHandler = () => {
            this.props.history.goBack();
        }

        checkoutContinuedHandler = () => {
            this.props.history.replace('/checkout/contact-data');
    }


    render () {
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.state.ingredients} />
                    <Route path={this.props.match.path + '/contact-data'}
                    //component={contactData}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} 
                        /> 
                
            </div>
        )
    }
}


export default Checkout;