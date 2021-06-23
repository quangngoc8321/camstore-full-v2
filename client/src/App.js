import React, { Suspense } from 'react';
import Header from "./components/layout/Header";
import { Divider } from "antd";
import Footer from "./components/layout/Footer";
import {  Route, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import CartContextProvider from "./components/context/CartContextProvider";
import UserRoute from './components/protectedRoute/UserRoute';
import AdminRoute from './components/protectedRoute/AdminRoute';
const ProductContainer = React.lazy(() => import("./components/product/ProductContainer"));
const LoginForm = React.lazy(() => import("./components/form/LoginForm"));
const RegisterForm = React.lazy(() => import("./components/form/RegisterForm"));
const ProductDetail = React.lazy(() => import("./components/product/ProductDetail"));
const AdminProductList = React.lazy(() => import("./components/product/AdminProductList"));
const MyOrders = React.lazy(() => import("./components/order/MyOrders"));
const CartContainer = React.lazy(() => import("./components/cart/CartContainer"));
const AdminProductCreate = React.lazy(() => import("./components/product/AdminProductCreate"));
const AdminProductUpdate = React.lazy(() => import("./components/product/AdminProductUpdate"));
const CustomerOrders = React.lazy(() => import("./components/order/CustomerOrders"));
const Shipping = React.lazy(() => import("./components/checkout/Shipping"));
const PaymentMethod = React.lazy(() => import("./components/checkout/PaymentMethod"));
const PlaceOrder = React.lazy(() => import("./components/checkout/PlaceOrder"));
const Profile = React.lazy(() => import("./components/profile/Profile"));

const App = () => {
  return (
    <CartContextProvider>
      <ScrollToTop />
      <Header />
      <Divider />
      <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <ProductContainer />
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
          <UserRoute>
            <MyOrders />
            
            </UserRoute>
          </Route>
          <Route exact path="/profile">
          <UserRoute>
          <Profile />
            
            </UserRoute>
           
          </Route>
          {/* admin route */}
          <Route exact path="/admin/customer-orders">
            <AdminRoute>
              
            <CustomerOrders />
            </AdminRoute>
          </Route>
          <Route exact path="/admin/products">
          <AdminRoute>
              
            <AdminProductList />
              </AdminRoute>
          </Route>
          <Route exact path="/admin/products/create">
          <AdminRoute>
              
            <AdminProductCreate />
              </AdminRoute>
          </Route>
          <Route exact path="/admin/products/update/:slug">
          <AdminRoute>
              
            <AdminProductUpdate />
              </AdminRoute>
          </Route>
          <Route path="*">
            <h1>404: Not Found</h1>
          </Route>
        </Switch>
        </Suspense>
      </main>
      <Divider />
      <Footer />
    </CartContextProvider>
  );
};

export default App;
