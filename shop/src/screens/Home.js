import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap';
import Pizza from '../components/Pizza';
import { getAllPizzas } from '../actions/pizzaAction'
import Loader from './Loader'

const Home = () => {
  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizzaReducer)
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch]);

  return (
    <>
    <div className='light'>
      <Container className='pb-5'>
        {loading ? (<Container className='d-flex justify-content-center align-self-center pt-5'><img src='./images/loader.gif'/></Container>)
          : error ? (<h1>Error while fetching</h1>) :
            <Row>
              {pizzas.map((pizza) => (
                <Col md={3} key={pizza.name}>
                  <Pizza pizza={pizza} />
                </Col>
              ))}
            </Row>
        }
      </Container>
      </div>
    </>
  )
}

export default Home