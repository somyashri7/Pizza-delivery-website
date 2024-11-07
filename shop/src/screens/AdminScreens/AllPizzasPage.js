import React, { useEffect } from 'react'
import { getAllPizzas, deletePizza } from '../../actions/pizzaAction'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const AllPizzasPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pizzastate = useSelector(state => state.getAllPizzaReducer);
  const { pizzas, loading, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])

  const deletePizzaHandler = (id) => {
    console.log(id);
    dispatch(deletePizza(id)).then(() => {
      window.location.href = '/admin/AllPizzasPage'
    })

  }

  return (
    <>{
      loading ? <h2>Loading</h2> : error ? <h2>Something went wrong</h2> :
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Image</th>
              <th>Pizza Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead><tbody>
            {pizzas.map((pizza) => (
              <tr>
                <td><img src={pizza.image} width="100px" /></td>
                <td>{pizza.name}</td>
                <td>Small:{pizza.prices[0]['small']} &nbsp;
                  Medium:{pizza.prices[0]['medium']}&nbsp;
                  Large:{pizza.prices[0]['large']}
                </td>
                <td>{pizza.category}</td>
                <td><AiFillEdit
                  style={{ cursor: 'pointer' }}
                  onClick={() => { navigate('/admin/EditPizzaScreen', { state: { pizza } }) }}
                /> &nbsp; <AiFillDelete
                    style={{ cursor: 'pointer' }}
                    onClick={() => { deletePizzaHandler(pizza._id) }}
                  /> </td>
              </tr>
            ))}
          </tbody>

        </Table>
    }

    </>
  )
}

export default AllPizzasPage