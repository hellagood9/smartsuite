import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { selectSignedInUser } from "./store/user/user.selectors";

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
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  const allState = useSelector((state) => state);
  const userInfo = selectSignedInUser(allState);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={ProductDetails} />

            <Route path="/cart" component={Checkout} />

            <Route path="/signin">
              {userInfo ? <Redirect to="/" /> : <SignIn />}
            </Route>

            <Route path="/signup">
              {userInfo ? <Redirect to="/" /> : <SignUp />}
            </Route>

            <Route path="/order" component={Order} />

            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
