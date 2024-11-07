import axios from 'axios'

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
    dispatch({ type: "PLACE_ORDER_REQUEST" })
    const currentUser = getState().userLoginReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        const res = await axios.post('/api/orders/placeorder', { token, subTotal, currentUser, cartItems })
        dispatch({ type: "PLACE_ORDER_SUCCESS" })
        console.log("Place order erro",res)
    } catch (error) {
        dispatch({ type: "PLACE_ORDER_FAIL" })
        console.log("error")
    }
}

export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().userLoginReducer.currentUser
    dispatch({
        type: 'USER_ORDER_REQUEST'
    })
    try {
        const res = await axios.post('/api/orders/getuserorder', { userid: currentUser._id })
        // console.log(res)
        dispatch({ type: "USER_ORDER_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "USER_ORDER_FAIL", payload: error })

    }
}

export const getAllOrders = () => async (dispatch) => {
    dispatch({ type: "ALL_ORDERS_REQ" })
    try {
        const res = await axios.get('/api/orders/getAllOrders');
        dispatch({ type: "ALL_ORDERS_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "ALL_ORDERS_FAIL", payload: error })
    }
}
