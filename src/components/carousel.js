import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class ControlledCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100 h-50'
                        src='ari.jpg'
                        alt='Ariel Barboza - Software Engineer'
                        style={{ width: '500px', height: '600px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100 h-50'
                        src='ariel_barboza.jpg'
                        alt='Ariel Barboza'
                        style={{ width: '500px', height: '600px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100 h-50'
                        src='army1.JPG'
                        alt='Ariel Barboza- Army 1'
                        style={{ width: '500px', height: '600px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100 h-50'
                        src='army2.JPG'
                        alt='Ariel Barboza - Army 2'
                        style={{ width: '500px', height: '600px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100 h-50'
                        src='army3.jpg'
                        alt='Ariel Barboza - Army'
                        style={{ width: '500px', height: '600px' }}
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default ControlledCarousel;
