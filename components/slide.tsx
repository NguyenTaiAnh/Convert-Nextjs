import React from 'react'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox';


export default class Slide extends React.Component<any, any>{

    constructor(props) {
        super(props);

        this.state = {
            images: ['/img/chungcu.jpg','/img/3.jpg'],
            current: ''
        }
    }

    getSliderSettings() {
        return {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

    handleClickImage = (e, image) => {
        e && e.preventDefault();

        this.setState({
            current: image
        })
    }

    handleCloseModal = (e) => {
        e && e.preventDefault();

        this.setState({
            current: ''
        })
    }

    render() {
        const settings = this.getSliderSettings();
        const { images, current } = this.state;

        return (
            <div style={{ width: "50%", textAlign: "center" }}>
            {/* <div> */}
                <Slider {...settings}>
                    {images.map(image => (
                        <img src={image} onClick={e => this.handleClickImage(e, image)} />

                    ))}
                </Slider>

                {current &&
                    <Lightbox
                        mainSrc={current}

                        onCloseRequest={this.handleCloseModal}
                    />
                }
            </div>
        )
    }

}