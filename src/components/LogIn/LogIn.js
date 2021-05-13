import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../FireBase";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./LogIn.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      let data = await axios("http://localhost:8000/admin");
      let admin = data.data;
      console.log(email, admin.email);
      console.log(password, admin.password);
      if (admin.email == email.value || admin.password == password.value) {
        history.push("/admin");
        return;
      }
      try {
        alert('1')
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        alert('2')
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

 

  return (
    <>
      <div className="login-block">
        <img
          className="login-img"
          src="" 
          alt=""
        />
        <div className="login-inp">
     
          <form onSubmit={handleLogin}>
            <label>
              <input
                className="login-email"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </label>
            <label>
              <input
                className="login-password"
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
            <button className="login-btn" type="Submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;