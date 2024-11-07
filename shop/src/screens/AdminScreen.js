import React, { useEffect } from 'react'
import { Row, Col, Container, ButtonGroup } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import AllUserPage from './AdminScreens/AllUsersPage'
import AllPizzasPage from './AdminScreens/AllPizzasPage'
import AddNewPizzaPage from './AdminScreens/AddNewPizzaPage'
import AllOrdersPage from './AdminScreens/AllOrdersPage'



const AdminScreen = () => {
    const userState = useSelector(state => state.userLoginReducer);
    useEffect(() => {
        if (userState.currentUser.isAdmin == false) {
            window.location.href = '/'
        }
    })

    return (
        <>
            <Container>
                <Row>
                    <h1>Admin Panel</h1>
                    <Col md={2}>
                        <ButtonGroup vertical>
                            <Link className='btn btn-primary p-4' to={'/admin/AllUserPage'}>All Users</Link>
                            <Link className='btn btn-primary p-4' to={'/admin/AllPizzasPage'}>All Pizzas</Link>
                            <Link className='btn btn-primary p-4' to={'/admin/AddNewPizzaPage'}>Add New Pizza</Link>
                            <Link className='btn btn-primary p-4' to={'/admin/AllOrdersPage'}>All Orders</Link>
                        </ButtonGroup>
                    </Col>
                    <Col md={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default AdminScreen