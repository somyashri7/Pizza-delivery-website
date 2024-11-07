import React, { useEffect } from 'react'
import { getUserOrders } from '../actions/orderAction'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'

const OrderScreen = () => {
    const orderState = useSelector(state => state.getUserOrdersReducer)
    const { loading, error, orders } = orderState
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrders())
    }, [dispatch])
    return (
        <>
            <h1>Orders</h1>
            {loading && <h2>Loading</h2>}
            {error && <h2>Error</h2>}
            <Container>
                {
                    orders && orders.map((order, i) => (
                        <Row key={i}>
                            <Col md={4}>
                                {order.orderItmes.map((item, i) => (
                                    <h6 key={i}>{item.name}:  {item.varient} * {item.quantity} = {item.price}</h6>
                                ))}
                            </Col>
                            <Col md={4}>
                                <h4>Address</h4>
                                <h6>Street: {order.shippingAddress.street}</h6>
                                <h6>City: {order.shippingAddress.city}</h6>
                                <h6>Pin Code: {order.shippingAddress.pincode}</h6>
                                <h6>Country: {order.shippingAddress.country}</h6>
                            </Col>
                            <Col md={4}>
                                <h4>Order Info</h4>
                                <h6>Amount: {order.orderAmount}</h6>
                                <h6>Transaction Id: {order.transactionId}</h6>
                                <h6>Amount: {order.orderAmount}</h6>
                            </Col>
                            <hr />
                        </Row>
                    ))

                }
            </Container>
        </>
    )
}

export default OrderScreen