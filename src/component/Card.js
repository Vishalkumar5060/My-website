import React, { Component } from 'react'

export class card extends Component {
  render() {
    return (
      <div>
        <div class="card" >
  <img src="./images/code.jpg" class="card-img-top" alt="error"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href=".images/code.jpg" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default card
