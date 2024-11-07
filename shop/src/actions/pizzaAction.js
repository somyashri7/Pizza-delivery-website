import axios from 'axios'

export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const res = await axios.get('/api/pizzas/getAllPizzas')
        // console.log(res.data);
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_PIZZAS_FAIL', payload: err })
    }
}

export const addNewPizza = (pizza) => async (dispatch) => {
    dispatch({ type: "ADD_PIZZA_REQ" })
    try {
        const res = await axios.post('/api/pizzas/addNewPizza', pizza)
        dispatch({ type: 'ADD_PIZZA_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'ADD_PIZZA_FAIL', payload: error })
    }
}

export const updatePizza = ({pid,pizza}) => async (dispatch) => {
    dispatch({ type: "UPDATE_PIZZA_REQ" })
    try {
        const res = await axios.put('/api/pizzas/updatePizza', {pid,pizza})
        dispatch({ type: "UPDATE_PIZZA_SUCCESS" })
    } catch (error) {
        dispatch({ type: "UPDATE_PIZZA_FAIL", payload: error })
    }
}

export const deletePizza = (id) => async (dispatch) => {
    dispatch({ type: "DELETE_PIZZA_REQ" })
    try {
        console.log("delteteActio: "+id)
        const res = await axios.delete(`/api/pizzas/deletePizza/${id}`)
        dispatch({ type: "DELETE_PIZZA_SUCCESS" })
    } catch (error) {
        dispatch({ type: "DELETE_PIZZA_FAIL", payload: error })

    }

}

// async function getPizzas(){
  //   const res=await axios.get('http://localhost:8080/api/pizzas/getAllPizzas')
  //   console.log(res.data)
  // }
