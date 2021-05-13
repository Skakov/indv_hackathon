import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import PaymentForm from './components/PaymentForm/PaymentForm';
import AddProduct from './components/AddProduct/AddProduct';
import ProductListAdmin from './components/ProductListAdmin/ProductsListAdmin';
import Login from './components/LogIn/LogIn';
import Modal from './components/EditModal/Modal';
import ProductsListUser from './components/ProductListUser/ProductListUser';
import Cart from './components/Cart/Cart';
import AuthContextProvider from './context/AuthContext';
import ProductsContextProvider from './context/ProductsContext';
import PrivateRoute from './components/PrivateRoute';
import EditModal from './components/EditModal/Modal';
import Jackets from './components/Jackets/Jackets';
import Tshirts from './components/Tshirts/Tshirts';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Accessories from './components/Accessories/Accessories';
import Cars from './components/Cars/Cars';
import Gift from './components/Gift/Gift';



const Routes = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute exact path ="/admin" component={Admin} />
            <Route exact path ="/" component={Home} />
            <Route exact path = "/signup" component={SignUp} />
            <Route exact path = "/payment" component={PaymentForm} />
            <Route exact path = "/addproduct" component={AddProduct} />
            <Route exact path = "/market" component={ProductListAdmin} />
            {/* <Route exact path="/details" component={Details} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/edit/:id" component={EditModal} />
            <Route exact path="/modal" component={Modal} />
            <Route exact path="/shop" component={ProductsListUser} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/jackets" component={Jackets} />
            <Route exact path="/tshirts" component={Tshirts} />
            <Route exact path="/accessories" component={Accessories} />
            <Route exact path="/cars" component={Cars} />
            <Route exact path="/gift" component={Gift} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );

};

export default Routes;