import React, {Component} from "react"
import {Link, Route, Routes} from "react-router-dom"
import Users from "./containers/Users"
import asyncComponent from "./hoc/asyncComponent"
import Smartphone from "./containers/Smartphone"

const AsyncSmartPhone=asyncComponent(()=>{
    return import("./containers/Smartphone")
})    



class App extends Component{
   render(){
      return (
        <div>
            <div>
                <Link to="/">Users</Link> |
                <Link to="/smartphone">SmartPhone</Link>
            </div>

            <div>
                <Routes>
                    <Route path="/" element={<Users/>}/>
                    <Route path="/smartphone" exact element={<AsyncSmartPhone/>}/>
                </Routes>
            </div>
        </div>
      )
   }
  

}

export default App