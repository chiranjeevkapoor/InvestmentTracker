import { Fragment, useState } from "react";
import Axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Fragment>
      <label>Login Here</label>
      <form onSubmit={submitHandler}>
        <label>username</label>
        <input onChange={userNameHandler} />
        <label>password</label>
        <input type="password" onChange={userPasswordHandler} />
        <button onClick={login}>Login</button>
      </form>
    </Fragment>
  );
};

export default Login;
