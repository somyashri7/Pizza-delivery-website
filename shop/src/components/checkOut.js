import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderAction'
import Loader from '../screens/Loader';


const CheckOut = ({ subTotal }) => {
    const orderState = useSelector(state => state.placeOrderReducer)
    const { loading, error, success } = orderState
    const dispatch = useDispatch()
    const tokenHandler = (token) => {
        dispatch(placeOrder(token, subTotal))
        console.log(token)
    }
    return (
        <>
            {loading && (<Loader/>)}
            {error && (<p>Something went wrong!!</p>)}
            {success && (<p>Success</p>)}

            <StripeCheckout
                amount={subTotal * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey="pk_test_51MIBzjJdjvzKrnZ7TfLaYcgjFGEQuWFLT3CdA2kR8D7ievEyNrLb0agB7QtBbbtZJ5Aplo17isFIQhsWbOyPRAsb00H6LtMLEf"
                currency="USD"
            >
                <Button>Pay now</Button>
            </StripeCheckout>

        </>
    )
}

export default CheckOut