import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-12">
                    <Carousel>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/kXCTvXNY/Banner-resort.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 className="text-primary tx-bg" >Cox's Bazar
                                    <p className="text-primary tx-inside" >City of Nature. Best seabeach in the world.</p>
                                </h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/Y2NnJHjG/resort-hub-banner-1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="text-primary tx-bg">Ratar Gul
                                    <p className="text-primary tx-inside">Amazing environment with beautiful nature .</p>
                                </h3>

                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/yd1gxcXz/resort-hub-banner-3.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 className="text-primary tx-bg" >Shat Gombuj
                                    <p className="text-primary tx-inside" >Beautiful and amazing Mosque in the bangladesh.</p>
                                </h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>

        </div>
    );
};

export default Home;