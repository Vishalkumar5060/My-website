import React, { Component } from 'react'

export class navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="./Navbar.js">Techblog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="./Navbar.jsnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./Navbar.js">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./Navbar.js"> Video Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./Navbar.js"> Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./Navbar.js">Contact me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./Navbar.js">About me</a>
        </li>
        



      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar
