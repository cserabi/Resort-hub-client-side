import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-12">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/Y2NnJHjG/resort-hub-banner-1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="text-primary">Ratar Gul</h3>
                                <p className="text-primary">Amazing environment with beautiful nature .</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/kXCTvXNY/Banner-resort.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 className="text-primary" >Cox's Bazar</h3>
                                <p className="text-primary" >City of Nature.Best seabeach in the world.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/yd1gxcXz/resort-hub-banner-3.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 className="text-primary" >Shat Gombuj</h3>
                                <p className="text-primary" >Beautiful and amazing Mosque in the bangladesh.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>

        </div>
    );
};

export default Home;