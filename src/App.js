import React, { Component } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Card from './component/Card'



export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Card />
      </div>
    )
  }
}

export default App;

