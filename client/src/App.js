import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";

import Spinner from "./components/Spinner/Spinner";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Order = lazy(() => import("./pages/Order/Order"));

const App = () => {
  const userSignedIn = useSelector((state) => state.userSignedIn);
  const { userInfo } = userSignedIn;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={Home} />
            <Route path="/products/:id" component={ProductDetails} />

            <Route path="/cart" component={Checkout} />

            <Route exact path="/signin">
              {userInfo ? <Redirect to="/" /> : <SignIn />}
            </Route>

            <Route exact path="/signup">
              {userInfo ? <Redirect to="/" /> : <SignUp />}
            </Route>

            <Route path="/order" component={Order} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
