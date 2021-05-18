import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';

const IndexCarousel = () => {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div className="row mt-2 ">
            <Carousel className="col-12 carousel_height " activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item className="index_carousel">
                    <img
                    className="d-block mx-auto image_height carousel_shadow "
                    src="https://images-na.ssl-images-amazon.com/images/I/81pViXqeVLL.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="carousel_caption">
                    <h3>Player's Handbook is kinda important!</h3>
                    <p>Kinda cringe if you don't own it bruv.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="index_carousel"> 
                    <img
                    className="d-block mx-auto image_height carousel_shadow"
                    src="https://images-na.ssl-images-amazon.com/images/I/71dETaFJZSL.jpg"
                    alt="Second slide"
                    />
            
                    <Carousel.Caption className="carousel_caption">
                    <h3>Super Masquerade set!</h3>
                    <p>Kinda fancy tho</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="index_carousel">
                    <img
                    className="d-block mx-auto image_height carousel_shadow"
                    src="https://gamingtrend.com/wp-content/uploads/2018/07/v1.png"
                    alt="Third slide" 
                    />
            
                    <Carousel.Caption className="carousel_caption">
                    <h3>More images!</h3>
                    <p>
                        Third image.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );   
};
export default IndexCarousel;
