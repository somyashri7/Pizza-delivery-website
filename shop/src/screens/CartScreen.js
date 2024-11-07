import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { HiMinusCircle, HiTrash } from 'react-icons/hi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { addToCart, deteleFromCart } from '../actions/cartAction'
import CheckOut from '../components/checkOut'


const CartScreen = () => {

    const cartItems = useSelector((state) => state.cartReducer.cartItems)
    const dispatch = useDispatch()
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>My Cart</h2>
                        <Row>
                            {cartItems.map((cartItem) => (
                                <>
                                    <Col md={7}>
                                        <h5>{cartItem.name} [{cartItem.varient}]</h5>
                                        <h6>Price: {cartItem.quantity} X {cartItem.prices[0][cartItem.varient]} = {cartItem.price}</h6>
                                        <h6>Quantity: &nbsp;
                                            <HiMinusCircle
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => dispatch(addToCart(cartItem, cartItem.quantity - 1, cartItem.varient))}
                                                className='text-danger' />&nbsp;
                                            {cartItem.quantity}&nbsp;
                                            <AiFillPlusCircle
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => { dispatch(addToCart(cartItem, cartItem.quantity + 1, cartItem.varient)) }}
                                                className='text-success' />
                                        </h6>
                                    </Col>
                                    <Col md={5}>
                                        <img src={cartItem.image}
                                            style={{ width: '80px', height: '80px' }}
                                        />&nbsp;&nbsp;&nbsp;
                                        <HiTrash
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => { dispatch(deteleFromCart(cartItem)) }}
                                        />
                                    </Col>
                                    <hr />
                                </>
                            ))}
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h2>Payments Info</h2>
                        <h5>Sub Total: {subTotal} /-</h5>
                        <CheckOut subTotal={subTotal}></CheckOut>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CartScreen