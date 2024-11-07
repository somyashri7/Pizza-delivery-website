import React from 'react'
import { Container, Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartAction'
import '../App.css'

const Pizza = ({ pizza }) => {
    const [varient, setVarient] = useState('small');
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    // const cartstate = useSelector((state) => state.cartReducer)



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Card style={{ margin: '5px' }} className='shadow mt-4' >
                <Card.Img variant="top" src={pizza.image} width="100%" onClick={handleShow} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <h6>Varient</h6>
                                <select value={varient} onChange={e => setVarient(e.target.value)}>
                                    {pizza.varients.map(varient => (
                                        <option  >{varient}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col md={6}>
                                <h6>Quantity</h6>
                                <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option >{i + 1}</option>))}
                                </select>
                            </Col>
                        </Row>

                    </Card.Text>
                    <Row>
                        <Col md={6}><h6>{quantity * pizza.prices[0][varient]}</h6></Col>
                        <Col md={6}><Button
                            onClick={() => dispatch(addToCart(pizza, quantity, varient))}
                            className="btn addToCartBtn">Add to Cart</Button></Col>
                    </Row>

                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <img src={pizza.image} />
                <Modal.Body>{pizza.description}</Modal.Body>

            </Modal>

        </>
    )
}

export default Pizza