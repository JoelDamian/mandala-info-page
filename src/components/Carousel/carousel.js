import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
    <MDBCarouselItem
      className='d-block w-100'
      itemId={1}
      src='https://drive.google.com/uc?export=view&id=1yD3aFFl3kBp6uvmFYoa2LBQr8TA86icF'
      alt='...'
    >
    </MDBCarouselItem>
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={2}
      src='https://drive.google.com/uc?export=view&id=1d37q4aqLy6LmZ5uxEIQXhobmfQP71lq9'
      alt='...'
    >
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={3}
      src='https://drive.google.com/uc?export=view&id=1FnqbGzeEKDy1ctyneT-4ShbgspPz5txM'
      alt='...'
    >
    </MDBCarouselItem>
  </MDBCarousel>
  );
}
