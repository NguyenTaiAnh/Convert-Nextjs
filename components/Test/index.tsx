// // @flow
// import * as React from 'react';
import style from './test.module.scss'
import React, { Component } from "react";
import Slider from "react-slick";
import Lightbox from 'react-image-lightbox';

export default class Test extends React.Component <any,any> {
  constructor(props) {
    super(props);

    this.state = {
        images: ['/img/chungcu.jpg'],
        current: '',
        
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
    const {images, current} = this.state
    const settings = {
      dots: true,
      infinite: 1,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,  
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#495057",
            padding: "10px"
          }}
        >
           <img src={images} style={{width:"10%"}} alt=""/> 
        </div>
      ),

    };
    return (
      <div style={{  textAlign: "center",background:"#495057" }}>
        <Slider {...settings}>
        {images.map(image => (
                        <img src={image} className="editImage" onClick={e => this.handleClickImage(e, image)} />

                    ))}
                    <div></div>
        </Slider>
        {current &&
                    <Lightbox
                        mainSrc={current}

                        onCloseRequest={this.handleCloseModal}
                    />
                }
                <style jsx>
                {`
                    .editImage{
                      padding-top:10px;
                        width: 30% !important;
                        height: 350px !important;
                    }
                `}
                </style>
      </div>
    );
  }
}