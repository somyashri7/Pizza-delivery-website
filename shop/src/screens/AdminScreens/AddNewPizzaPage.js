import React, { useState } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPizza } from '../../actions/pizzaAction'

const AddNewPizzaPage = () => {
  const dispatch = useDispatch()
  const addPizzaState = useSelector(state => state.addNewPizzaReducer);
  const { success, loading, error } = addPizzaState;
  const [pizzaValue, setPizzaValue] = useState({
    name: '', category: '', small: 0, medium: 0, large: 0, image: '', description: ''
  })

  const changeHandler = e => {
    setPizzaValue({ ...pizzaValue, [e.target.name]: e.target.value })
  }

  const addNewPizzaHandler = () => {
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
    dispatch(addNewPizza(pizza))
  }


  return (
    <>{success ? <h2>Success</h2> : <></>}
      {error ? <p>{error}</p> : <></>}
      <h2>Add New Pizza</h2>

      {loading ? <h2>Loading</h2> : <Container>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
                id='name' name='name'
                onChange={changeHandler}
                placeholder="Enter name" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text"
                id='category' name='category'
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
                onChange={changeHandler}
                placeholder="small" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Price for medium</Form.Label>
              <Form.Control type="number"
                id='medium' name='medium'
                onChange={changeHandler}
                placeholder="medium" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Price for large</Form.Label>
              <Form.Control type="number"
                id='large' name='large'
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
                onChange={changeHandler}
                placeholder="Enter image address" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text"
                id='description' name='description'
                onChange={changeHandler}
                placeholder="Enter description" />
            </Form.Group>
          </Col>
        </Row>
        <button onClick={addNewPizzaHandler} className='btn btn-primary' >Add Pizza</button>
      </Container>}
    </>
  )
}

export default AddNewPizzaPage