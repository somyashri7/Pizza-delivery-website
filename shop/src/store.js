import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { getAllPizzaReducer } from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'
import { userRegisterReducer } from './reducers/userReducer'
import { userLoginReducer } from './reducers/userReducer'
import {placeOrderReducer} from './reducers/orderReducer'
import {getUserOrdersReducer} from './reducers/orderReducer'
import {getAllUsersReducer} from './reducers/userReducer'
import {addNewPizzaReducer} from './reducers/pizzaReducer'
import {getAllOrdersReducer} from './reducers/orderReducer'
import {updatePizzaReducer,deletePizzaReducer} from './reducers/pizzaReducer'

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    userRegisterReducer: userRegisterReducer,
    userLoginReducer: userLoginReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    getAllUsersReducer:getAllUsersReducer,
    addNewPizzaReducer:addNewPizzaReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    updatePizzaReducer:updatePizzaReducer,
    deletePizzaReducer:deletePizzaReducer
});

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    userLoginReducer:{
        currentUser:currentUser
    }
};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
