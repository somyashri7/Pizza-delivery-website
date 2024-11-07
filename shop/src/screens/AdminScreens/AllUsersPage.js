import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../actions/userAction'

const AllUsersPage = () => {
  const dispatch = useDispatch();
  const allUsersState = useSelector(state => state.getAllUsersReducer)
  const { allUsers } = allUsersState;
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  return (
    <>
      <h2>All Users</h2>
      <Table  bordered hover size="sm">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>isAdmin</td>
            <td>Password</td>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin.toString()}</td>
              <td>{user.password.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default AllUsersPage