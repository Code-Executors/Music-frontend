import React, { Component } from 'react'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
export class Main extends Component {
    render() {
        return (
           <>
           <Header />
            <App />
            <Footer/>
            </>
        )
    }
}

export default Main
