import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <h1 className='text-center'>About us</h1>

      <Container>
        <Row>
          <Col md={6} >
            <h2>Who are we?</h2>
            <p>Welcome to our Slice! We've been serving up delicious, hand-crafted pizzas to our community for many years. Our goal is to bring people together over a slice of hot, fresh pizza and provide a warm and friendly atmosphere for everyone to enjoy. All of our ingredients are carefully selected and prepared daily to ensure the highest quality for our customers. We are proud to be a local, family-owned business and look forward to serving you soon!</p>
          </Col>
          <Col md={6}>
            <img width={'100%'} src="https://baker.qodeinteractive.com/wp-content/uploads/2017/03/about-me-image-1.jpg" />
          </Col>

        </Row>
      </Container>



    </>
  )
}

export default About