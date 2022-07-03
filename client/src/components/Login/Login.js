import { Fragment, useState } from "react";

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

  return (
    <Fragment>
      <label>Login Here</label>
      <form onSubmit={submitHandler}>
        <label>username</label>
        <input onChange={userNameHandler} />
        <label>password</label>
        <input type="password" onChange={userPasswordHandler} />
        <button>Login</button>
      </form>
    </Fragment>
  );
};

export default Login;
