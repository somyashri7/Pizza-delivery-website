import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdLocalOffer } from 'react-icons/md'

const TopBar = () => {
    return (
        <div>
            <Navbar bg={"dark"} variant={"dark"} expand="lg">
                <Container fluid>
                    <h6 className='text-light'><MdLocalOffer /> Free home delivery on first Order!!!</h6>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/"}  >Home</Nav.Link>
                        <Nav.Link as={Link} to={"/About"}  >About</Nav.Link>
                        <Nav.Link as={Link} to={"/Contact"}  >Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopBar