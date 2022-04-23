import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./coursel.css"

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
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel__img"
      src={require('../resources/Reviews/Whatsapp (3).jpeg')}
      alt="Second slide"
      width={"40%"}
    />
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

