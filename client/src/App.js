import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./pages/login.js"
import Home from "./pages/home.js"
import { useState, useEffect } from "react"

export default function App(){

  const [onloginStatus, setLoginstatus] = useState(
    () => JSON.parse(localStorage.getItem("onloginStatus")) || ""
  )
useEffect(() => {
  localStorage.setItem("onloginStatus", JSON.stringify(onloginStatus))
},[onloginStatus])
  return (
    <div>
      <Router>
        <Routes>
          <Route
           path="/"
           element=
           {
           <Login 
            loginStatus={onloginStatus} 
           setLoginStatus={setLoginstatus}  
           />
          } 
          />
          <Route 
          path="/home" 
          element=
          {
          <Home 
          loginStatus={onloginStatus} 
          setLoginStatus={setLoginstatus} 
          />
        }
           />
        </Routes>
      </Router>
 
      
     
      
    </div>
  )

  }