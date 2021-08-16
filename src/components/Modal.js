import React from 'react';
import Slider from "react-slick";
import SVG from 'react-inlinesvg';
import iconClose from '../icon/icon-close.svg';

class Modal extends React.Component {
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
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        };

        let imageGroup;
        if ( this.props.projectInfo.image ){
            imageGroup = this.props.projectInfo.image.map( (imageEach, index) => {
                return(
                    <div className="modal-image__each-container" key={index}>
                        <img className="modal-image" src={"images/" + imageEach} alt="modalImage"/>
                    </div>
                )
            })
        }
        let activeClass = this.props.modalActive ? 'modal-container--show' : '';
        return(
            <div className={"modal-container "+ activeClass}>
                <div className="modal">
                    <div className="modal-inner">
                        <button className="modal-close" onClick={this.props.closeModal}>
                            <SVG src={iconClose} />
                        </button>
                        <div className="modal-image__container">
                            <Slider {...settings}>
                                {imageGroup}
                            </Slider>
                        </div>
                        <div className="modal-info">
                            <p className="modal-info__tech"><span className="modal-info__tech-label">TECHS USED:</span>{this.props.projectInfo.techs}</p>
                            <img className="modal-info__title" src={"images/" + this.props.projectInfo.modalTitle}/>
                            <p className="modal-info__description">{this.props.projectInfo.description}</p>
                            <p className="modal-info__description">{this.props.projectInfo.description2}</p>
                        </div>
                    </div>
                </div>
                <div id="modal-overlay" onClick={this.props.closeModal}>
                </div>
            </div>
        )
    }
}
export default Modal