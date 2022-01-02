import React, { Component } from 'react'
import '../css/bhome.css'


export class home extends Component {
  render() {
    return (
      <div>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./IMAGES/CODE.JPG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./IMAGES/CODE.JPG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./IMAGES/CODE.JPG" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
  </div>

    )
  }
}

export default home
