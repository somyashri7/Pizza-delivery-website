import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updatePizza } from '../../actions/pizzaAction'


const EditPizzaScreen = () => {
    const [pizzaValue, setPizzaValue] = useState({
        name: '', category: '', small: 0, medium: 0, large: 0, image: '', description: ''
    })
    const updatePizzaState = useSelector(state => state.updatePizzaReducer);
    const { loading, success, error } = updatePizzaState
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(location.state.pizza)
        try {
            setPizzaValue({
                name: location.state.pizza.name,
                category: location.state.pizza.category,
                small: location.state.pizza.prices[0].small,
                medium: location.state.pizza.prices[0].medium,
                large: location.state.pizza.prices[0].large,
                image: location.state.pizza.image,
                description: location.state.pizza.description
            })
        } catch (error) { }
    }, [])

    const changeHandler = e => {
        setPizzaValue({ ...pizzaValue, [e.target.name]: e.target.value })
    }

    const updatePizzaHandler = () => {
        const { name, category, small, description, image, large, medium } = pizzaValue;
        const pizza = {
            name: name,
            varients: ["small", "medium", "large"],
            prices: [
                {
                    small: parseInt(small),
                    medium: parseInt(medium),
                    large: parseInt(large),
                },
            ],
            category: category,
            image: image,
            description: description
        }
        const pid = location.state.pizza._id
        dispatch(updatePizza({ pid, pizza })).then(() => {
            navigate('/admin/AllPizzasPage')
        })

    }

    return (
        <>
            {success && <h2>Updated!!</h2>}
            <Container>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                id='name' name='name'
                                value={pizzaValue.name}
                                onChange={changeHandler}
                                placeholder="Enter name" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text"
                                id='category' name='category'
                                value={pizzaValue.category}
                                onChange={changeHandler}
                                placeholder="Enter category" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Price for small</Form.Label>
                            <Form.Control
                                id='small' name='small'
                                typeof='number' type='number'
                                value={pizzaValue.small}
                                onChange={changeHandler}
                                placeholder="small" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Price for medium</Form.Label>
                            <Form.Control type="number"
                                id='medium' name='medium'
                                value={pizzaValue.medium}
                                onChange={changeHandler}
                                placeholder="medium" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Price for large</Form.Label>
                            <Form.Control type="number"
                                id='large' name='large'
                                value={pizzaValue.large}
                                onChange={changeHandler}
                                placeholder="large" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>image</Form.Label>
                            <Form.Control type="text"
                                id='image' name='image'
                                value={pizzaValue.image}
                                onChange={changeHandler}
                                placeholder="Enter image address" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text"
                                id='description' name='description'
                                value={pizzaValue.description}
                                onChange={changeHandler}
                                placeholder="Enter description" />
                        </Form.Group>
                    </Col>
                </Row>
                <button className='btn btn-primary' onClick={updatePizzaHandler} >Update Pizza</button>
            </Container>
        </>
    )
}

export default EditPizzaScreen