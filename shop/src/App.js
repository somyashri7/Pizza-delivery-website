import './App.css';
import TopBar from './components/TopBar';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './screens/Home'
import Contact from './components/Contact'
import NavBar from './components/NavBar';
import CartScreen from './screens/CartScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
import AllUserPage from './screens/AdminScreens/AllUsersPage'
import AllPizzasPage from './screens/AdminScreens/AllPizzasPage'
import AddNewPizzaPage from './screens/AdminScreens/AddNewPizzaPage';
import AllOrdersPage from './screens/AdminScreens/AllOrdersPage';
import EditPizzaScreen from './screens/AdminScreens/EditPizzaScreen'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <ToastContainer position='top-center'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<OrderScreen />} />
        <Route path='/admin' element={<AdminScreen />}>
          <Route path='AllUserPage' element={<AllUserPage />} />
          <Route path='AllPizzasPage' element={<AllPizzasPage />} />
          <Route path='AddNewPizzaPage' element={<AddNewPizzaPage />} />
          <Route path='AllOrdersPage' element={<AllOrdersPage />} />
          <Route path='EditPizzaScreen' element={<EditPizzaScreen />} />
        </Route>



      </Routes>
    </>
  );
}

export default App;
