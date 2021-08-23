//
//
//
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { auth } from "./services/firebase";
import './styles.css';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
            <Redirect to="/chat" />
          )
      }
    />
  );
}

const App =()=>  {

  const [authed  , setAuthed] = useState(false);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setLoading(false)
      if (user)
        setAuthed(true);
      else
	setAuthed(false);
    });
    const cleanup = () => {
      console.log('cleanup!');
    };
    return cleanup;
  }, []);
    
  return loading === true ? (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">読み込み中</span>
    </div>
  ) : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path="/chat"
            authenticated={authed}
            component={Chat}
          />
          <PublicRoute
            path="/signup"
            authenticated={authed}
            component={Signup}
          />
          <PublicRoute
            path="/login"
            authenticated={authed}
            component={Login}
          />
        </Switch>
      </Router>
    );
}

export default App;
