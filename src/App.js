import React, { Component } from 'react';
import Contacts from "./components/Contacts";
import Header from "./components/Header";


import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
         {/* <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" /> */}
         {/* <Contact name="Kristen Smith" email="ksmith@gmail.com" phone="555-555-5000" /> */}
         <Contacts />
         </div>
      </div>
    );
  }
}

export default App;
