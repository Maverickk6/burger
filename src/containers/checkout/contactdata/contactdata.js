import React, { Component } from 'react';
import styles from './contactdata.module.css';
import Button from '../../../components/UI/button/modalbutton';
import Spinner from '../../../components/UI/spinner/spinner';
import axios from '../../../axios-orders';



class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    };

    orderHandler = (event) => {
      //  console.log(this.props.ingredients)
        event.preventDefault(); 
        console.log(this.props);       
            this.setState ( { loading: true } );
            const order = {
                ingredients: this.props.ingredients,
                price: this.props.price,               
                customer: {
                    name: 'Edidiong',
                    address : {
                        street: 'Teststreet 1',
                        zipCode: '54321',
                        country: 'Nigeria',
                    },
                    email: 'test@est.com'
                },
                
                deliveryMethod: 'fastest'
            }
            axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({ loading: false });
            });
    };


    render () {
        let form = (<form>
            <input className = {styles['Input']} type="text" name ="name" placeholder="Your Name" />
            <input className = {styles['Input']} type="email" name ="email" placeholder="Your Email" />
            <input className = {styles['Input']} type="text" name ="street" placeholder="Your Street Address" />
            <input className = {styles['Input']} type="text" name ="postal" placeholder="Your Postal Code" />
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className = {styles['ContactData']}>
            <h4>Enter Your Contact Details</h4>
             { form }  
            </div>
            );
        }
    }

export default ContactData;