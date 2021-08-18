import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import './App.css'

const code = new URLSearchParams(window.location.search).get("code");

export class App extends Component {
  render() {
    return (
     <>
      {code ? <Dashboard code={code} /> : <Login />}
      </>
      )
    }
  } 
export default App