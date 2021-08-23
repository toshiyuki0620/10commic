//
//
//
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle } from "../helpers/auth";

const SignUp =()=>  {

  const [error   , setError] = useState(null);
  const [email   , setEmail] = useState("");
  const [password, setPasswd] = useState("");

  const handleChange = async (value) => {
    setEmail(value);
    setPasswd();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signup(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  }

    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" onSubmit={handleSubmit}>
          <h1>
            Sign Up to
          <Link className="title ml-2" to="/">Chatty</Link>
          </h1>
          <p className="lead">Fill in the form below to create an account.</p>
          <div className="form-group">
            <input className="form-control" placeholder="Email" name="email" type="email" onChange={handleChange} value={email}></input>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" name="password" onChange={handleChange} value={password} type="password"></input>
          </div>
          <div className="form-group">
            {error ? <p className="text-danger">{error}</p> : null}
            <button className="btn btn-primary px-5" type="submit">Sign up</button>
          </div>
          <p>You can also sign up with any of these services</p>
          <button className="btn btn-danger mr-2" type="button" onClick={googleSignIn}>
            Googleアカウントでサインイン
          </button>
          <hr></hr>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    )
}

export default SignUp;
