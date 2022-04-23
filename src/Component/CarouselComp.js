import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselComp = () => {
  return (
    <div className='' align="center">
    <Carousel>
  <Carousel.Item>
    <img
      className="carousel__img"
      src={require('../resources/Reviews/Whatsapp (2).jpeg')}
      alt="First slide"
      width={"40%"}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel__img"
      src={require('../resources/Reviews/Whatsapp (3).jpeg')}
      alt="Second slide"
      width={"40%"}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel__img"
      src={require('../resources/Reviews/Whatsapp (4).jpeg')}
      alt="Third Slide"
      width={"40%"}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel__img"
      src={require('../resources/Reviews/Whatsapp (5).jpeg')}
      alt="Fourth slide"
      width={"40%"}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="carousel__img"
      src={require('../resources/Reviews/Whatsapp (6).jpeg')}
      alt="Fifth slide"
      width={"40%"}
    />
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="carousel__img"
      src={require('../resources/Reviews/Whatsapp.jpeg')}
      alt="Seventh slide"
      width={"40%"}
    />
  </Carousel.Item>
</Carousel>
</div>
  )
}

export default CarouselComp

