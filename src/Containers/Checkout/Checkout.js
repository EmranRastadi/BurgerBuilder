import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import CheckoutSummery from '../../Componets//CheckoutSummery/CheckoutSummery';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class CheckOut extends Component {
  

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHanddler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render () {
        let summery = <Redirect to ="/"/>
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summery = (
            <div>
                {purchasedRedirect}
               <CheckoutSummery ingredients={this.props.ings}
                 checkoutCancelled={this.checkoutCancelledHandler} 
                 checkoutContinued={this.checkoutContinuedHanddler} />
                 <Route path={this.props.match.path + '/contact-data'} 
                component={ContactData} /> 
            </div>
               
            );
        }
        return summery;
    }
}

const mapStateToProps = state => {
    return{
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};





export default connect(mapStateToProps)(CheckOut);