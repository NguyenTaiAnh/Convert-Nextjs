import React from 'react'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox';


export default class Slide extends React.Component<any, any>{

    constructor(props) {
        super(props);

        this.state = {
            images: ['/img/chungcu.jpg'],
            current: '',
            
        }
    }

    getSliderSettings() {
        return {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => (
                <div
                  style={{
                    backgroundColor: "#495057",
                    padding: "10px"
                  }}
                >
                   <img src={this.state.images} style={{width:"10%"}} alt=""/> 
                </div>
              ),
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
            <div style={{  textAlign: "center",background:"#495057",overflow:"hidden" }}>
            {/* <div> */}
                <Slider {...settings}>
                    {images.map(image => (
                        <img src={image} className="editImage" onClick={e => this.handleClickImage(e, image)} />

                    ))}
                    <div></div>
                </Slider>

                {/* {current &&
                    <Lightbox
                        mainSrc={current}

                        onCloseRequest={this.handleCloseModal}
                    />
                } */}
                <style jsx>
                {`
                    .editImage{
                        padding-top: 20px;
                        width: 50% !important;
                    }
                `}
                </style>
            </div>
        )
    }

}