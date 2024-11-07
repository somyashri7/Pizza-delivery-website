import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <h1 className='text-center'>Contact Now</h1>
      <Container>
        <Row>
          <Col md={6}>
            <h1>GET IN TOUCH</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem<br /><br />
              Edge Themes give you everything you need to create an amazing website. Designed and built with care, filled with creative elements and useful options, and completely user-friendly. Set up your website quickly and with ease.Tons of shortcodes provide.
            </p>
            <button className='btn btn-dark' style={{ borderRadius: '0px', margin: '5px' }}>Read More</button>
            <button className='btn btn-dark' style={{ borderRadius: '0px', margin: '5px' }}>Check Now</button>
          </Col>
          <Col md={6}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.5639865341996!2d-79.41201882401585!3d43.6780370711009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349dcc32e20d%3A0x24f73b40cb6ee706!2sCasa%20Loma%2C%201%20Austin%20Terrace%2C%20Toronto%2C%20ON%20M5R%201X8%2C%20Canada!5e0!3m2!1sen!2sin!4v1670315504327!5m2!1sen!2sin"
              height="450" width={'100%'} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact