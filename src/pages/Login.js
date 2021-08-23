//
//
//
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle } from "../helpers/auth";

const Login =()=>  {
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
      await signin(email, password);
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
      <form
        className="mt-5 py-5 px-5"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>
        テンシステムの公式チャンネルへようこそ
        </h1>
         <p className="lead">サインイン方法を選択してください</p>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            type="password"
          />
        </div>
        <div className="form-group">
          {error ? (<p className="text-danger">{error}</p>) : null}
          <button className="btn btn-primary px-5" type="submit">ログイン</button>
        </div>
        <p>You can also log in with any of these services</p>
        <button className="btn btn-danger mr-2" type="button" onClick={googleSignIn}>
          Googleアカウントでサインイン
        </button>
        <hr />
        <p>アカウントをお持ちでは、ありませんか？<Link to="/signup">Sign up</Link></p>
      </form>

    </div>
  );
}

export default Login;
