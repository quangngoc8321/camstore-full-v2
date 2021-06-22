import React from "react";
import Header from "./components/layout/Header";
import { Divider } from "antd";
import Footer from "./components/layout/Footer";
import ProductContainer from "./components/product/ProductContainer";
import LoginForm from "./components/form/LoginForm";
import RegisterForm from "./components/form/RegisterForm";
import ProductDetail from "./components/product/ProductDetail";
import AdminProductList from "./components/product/AdminProductList";
import MyOrders from "./components/order/MyOrders";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartContainer from "./components/cart/CartContainer";
import AdminProductCreate from "./components/product/AdminProductCreate";
import AdminProductUpdate from "./components/product/AdminProductUpdate";
import CustomerOrders from "./components/order/CustomerOrders";
import Shipping from "./components/checkout/Shipping";
import PaymentMethod from "./components/checkout/PaymentMethod";
import PlaceOrder from "./components/checkout/PlaceOrder";
import Profile from "./components/profile/Profile";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Divider />
      <main>
        <Switch>
          <Route exact path="/">
            <ProductContainer />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/cart">
            <CartContainer />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/register">
            <RegisterForm />
          </Route>
          <Route exact path="/products/:slug">
            <ProductDetail />
          </Route>
          {/* check out */}
          <Route exact path="/shipping">
            <Shipping />
          </Route>
          <Route exact path="/payment-method">
            <PaymentMethod />
          </Route>
          <Route exact path="/place-order">
            <PlaceOrder />
          </Route>
          {/* user route */}
          <Route exact path="/my-orders">
            <MyOrders />
          </Route>

          {/* admin route */}
          <Route exact path="/admin/customer-orders">
            <CustomerOrders />
          </Route>
          <Route exact path="/admin/products">
            <AdminProductList />
          </Route>
          <Route exact path="/admin/products/create">
            <AdminProductCreate />
          </Route>
          <Route exact path="/admin/products/update/:slug">
            <AdminProductUpdate />
          </Route>
          <Route path="*">
            <h1>404: Not Found</h1>
          </Route>
        </Switch>
      </main>
      <Divider />
      <Footer />
    </Router>
  );
};

export default App;
