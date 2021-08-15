import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import './App.css'


import React, { Component } from 'react'


const code = new URLSearchParams(window.location.search).get("code");

export class App extends Component {
  render() {
    return (
     <>
     <img className="img" src="https://i.pinimg.com/originals/e6/0e/53/e60e531bb26f15c5f69c2cb35633bf46.jpg" alt=""/>
    
      {code ? <Dashboard code={code} /> : <Login />
      
      }
      </>
      )
    }
  }
  
export default App
  
  

// const code = new URLSearchParams(window.location.search).get("code");
  
  // function App() {
  //   return (
  
  //       code ? <Dashboard code={code} /> : <Login />
  
  //   );
  // }
  
  // export default App;