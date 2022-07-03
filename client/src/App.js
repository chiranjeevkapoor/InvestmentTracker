import "./App.css";
import { Fragment } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <Fragment>
      <Register />
      <Login />
    </Fragment>
  );
}

export default App;
