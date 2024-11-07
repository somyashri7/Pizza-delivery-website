import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userAction'
import Loader from './Loader'
import {toast} from 'react-toastify'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.userLoginReducer);
  const { loading, success } = loginState;
  // const curret=useSelector(state=>state.userLoginReducer);
  // const {currentUser}=curret;

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user))
    // console.log(user)
  }
  useEffect(() => {
    // console.log(currentUser)
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/"
    }


  }, [])


  return (
    <>
      <Container className='p-5'>
        {loading ? <Loader/> : 
        <Container className='border border-2 border-danger border-opacity-50 p-5 rounded-5 col-md-5'>
        <Form>
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
            onClick={loginHandler}
            // onClick={toast.success("YOYO")}
          >
            Login
          </Button>
        </Form>
        </Container>
        }

      </Container>
    </>
  )
}

export default Login