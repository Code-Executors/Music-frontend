
import React, { Component } from 'react';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './screens/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Playlist from './components/Playlist';

export class MainApp extends Component {

  render() {
    return (
      <>
        <Header />

        <Router>
          <Switch>

            <Route exact path="/">
              <App />
            </Route>

            <Route path="/about">
              <AboutUs />
            </Route>

            <Route path="/playlist">
              <Playlist />
            </Route>

          </Switch>
        </Router>

        <Footer />
      </>
    )
  }
}

export default MainApp
