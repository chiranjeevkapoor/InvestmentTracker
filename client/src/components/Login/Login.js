import { Fragment, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

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
    });

    navigate("/userPage");
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
