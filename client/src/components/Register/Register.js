import { Fragment, useState } from "react";
import Axios from "axios";
const Register = () => {
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

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Fragment>
      <label>Register Here</label>
      <form onSubmit={submitHandler}>
        <label>username</label>
        <input onChange={userNameHandler} />
        <label>password</label>
        <input type="password" onChange={userPasswordHandler} />
        <button onClick={register}>Submit</button>
      </form>
    </Fragment>
  );
};

export default Register;
