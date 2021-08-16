import React from 'react';
import Slider from "react-slick";

class Brands extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){

        // Slick Settings
        var settings = {
            dots: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
            adaptiveHeight: true,
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 5
                }
              },
              {
                breakpoint: 620,
                settings: {
                  slidesToShow: 3
                }
              }
            ]
        };

        const eachBrand = this.props.brandsData.map( brand => <img alt="brand" src={brand.image} key={brand.id} />)
        return( 
            <div id="brands" className="brands">
                <div className="brands-inner">
                    <header className="brands-title__container">
                        <h1 className="brands-title">Other Brands I've worked with</h1>
                    </header>
                    <div className="brands-content__container">
                        <Slider {...settings}>
                                {eachBrand}
                        </Slider>
                    </div>
                    <p className="brands__chrome-extension-shout">For anyone who uses the computer often and would like to prevent eyestrain, I created a neat chrome extension that helps you with eye exercises! <a target="_blank" href="https://chrome.google.com/webstore/detail/eyebrowse/ldbbekapbjidinbknfmhkhhfhfldcdek"><u>Click here</u></a> to view Eyebrowse</p>
                </div>
            </div>
        )
    }
}
export default Brands