import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {STRIPE_TOKEN} from '../../utils/constants';
import FormPayment from './FormPayment/FormPayment';

const stripePromise= loadStripe(STRIPE_TOKEN);

export default function Payment(props) {
    const {products, address}=props;
    return (
        <div className='payment'>
            <div className='title'>Pago</div>
            <div className='data'>
                <Elements stripe={stripePromise}>
                    <FormPayment products={products} address={address}/>
                </Elements>
            </div>
        </div>
    )
}
