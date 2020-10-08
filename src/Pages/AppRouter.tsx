import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
  import React, { Component } from 'react'
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
  
  export default class AppRouter extends Component {
      render() {
          return (
              <Router>
                  <Route path= '/'  exact component ={HomePage} />
                  <Route path= '/about' component ={AboutPage} />
                  <Route path= '/contact' component ={ContactPage} />
                  
              </Router>
          )
      }
  }
  