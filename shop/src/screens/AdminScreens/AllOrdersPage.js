import React, { useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../actions/orderAction'

const AllOrdersPage = () => {
  const allOrdersState = useSelector(state => state.getAllOrdersReducer);
  const dispatch = useDispatch()
  const { loading, success, orders, error } = allOrdersState;
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])
  return (
    <>
      {loading ? <h2>loading</h2>
        : success ?
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <td>Sr no</td>
                <td>Order and Transaction id</td>
                <td>Ordered By</td>
                <td>Ordered Items</td>
                <td>Shipping Address</td>
              </tr>
            </thead>
            {orders.map((order, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <h6>Order Id: {order._id}</h6>
                  <h6>Transaction Id: {order.transactionId}</h6>
                </td>
                <td>
                  <h6>Name: {order.name}</h6>
                  <h6>Email:{order.email}</h6>
                </td>
                <td>
                  Order Items:
                  {order.orderItmes.map((item) => (
                    <h6>{item.name}={item.varient} X{item.quantity}={item.price} </h6>
                  ))}
                  <strong>Total:{order.orderAmount}</strong>
                </td>
                <td>
                  {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.country} - {order.shippingAddress.pincode}
                </td>
              </tr>
            ))}
          </Table>
          : <h2>Erro</h2>}

    </>
  )
}

export default AllOrdersPage