import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  /**this is a public stripe key, don't need to hide it or gitignore */
  "pk_test_51IY6UlC1XM3tYf8dfQTMdzpJS5LtrQQAMRXAv3btpL4pZgl1G9hWmML30fISimV1fDkLQsWrvVcg5HtC7HgtdWRS00B5BORYBq"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        //the user just logged in / the user was logged in

        //if logged in send info to the data layer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out

        //if logged out destroy the info that was set in the data layer
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
