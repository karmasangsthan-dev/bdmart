import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            {/* <img src="/images/Banner.png" alt="" /> */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/Banner.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/banner3.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/banner2.png"
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/banner4.png"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;