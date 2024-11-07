import React, { useState } from 'react'
import { Form, Button, Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registUser } from '../actions/userAction'
import Loader from './Loader'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const registerUserState = useSelector((state) => state.userRegisterReducer);
    const { loading, success } = registerUserState;

    const registerHandler = () => {
        const user = { name, email, password };
        dispatch(registUser(user));
        console.log(user);
    }

    return (
        <div style={{paddingTop:'0px',marginTop:'0px',height:'100',overflow:'hidden'}}>
            <div className=''>
                {loading ? <Loader /> :
                    // <Container className='border border-2 border-danger border-opacity-50 p-5 rounded-5'>
                    <Row>
                        
                        <Col className='col-md-4 p-5' >
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"
                                        value={name} onChange={(e) => { setName(e.target.value) }}
                                        placeholder="Enter name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email"
                                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                        placeholder="Password" />
                                </Form.Group>


                                <Button variant="danger opacity-60 rounded-0"
                                    onClick={registerHandler}>
                                    Sign Up
                                </Button>
                            </Form>
                        </Col>
                        <Col className='col-md-8' >
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwf7lGDXXcEAIzzmMJxs1RoTzEzkTL8n6cw&usqp=CAU' width={'100%'}></img>
                        </Col>
                    </Row>
                    // </Container>
                    }
            </div>
        </div>
    )
}

export default Register