import React, { Component } from 'react'
import App from './App'
import Header from './components/Header'

export class Main extends Component {
    render() {
        return (
           <>
           <Header />
            <App />
            </>
        )
    }
}

export default Main
