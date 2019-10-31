import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

class ControlledCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="army1.JPG"
                        alt="First slide"
                        style={{ width: "500px", height: "600px" }}
                    />
                    <Carousel.Caption>
                        <h3>Fort Bliss, Texas</h3>
                        <p>White 4G - Charlie Company</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="army2.JPG"
                        alt="Third slide"
                        style={{ width: "500px", height: "600px" }}
                    />

                    <Carousel.Caption>
                        <h3>White Sands Missle Range, New Mexico</h3>
                        <p>Coming Back from the field</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="army3.jpg"
                        alt="Third slide"
                        style={{ width: "500px", height: "600px" }}
                    />

                    <Carousel.Caption>
                        <h3>For Bliss, Texas</h3>
                        <p>Tanker Boots</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default ControlledCarousel;