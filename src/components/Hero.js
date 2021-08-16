import React, {Component} from 'react';
import Particles from 'react-particles-js';

const particleOpt = {
  "particles": {
        "line_linked": {
          "color":"#fc3565",
          "distance": 150,
        },
        "color": {
          "value": "#fc3565"
        },
        "number": {
            "value": 30
        },
        "size": {
            "value": 3
        },
        "shape": {
          "type": "triangle"
        },
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

class Hero extends Component{
    constructor(props){
        super(props)
        this.scrollTo = this.scrollTo.bind(this);
    }
    scrollTo(){
        const portfolio = document.getElementById("portfolio")
        const portfolioTop = portfolio.offsetTop;
        window.scrollTo({
            top: portfolioTop - 52,
            behavior: "smooth"
        })
    }
    render(){
        return (
        <div id="hero" className="hero">
            <Particles 
                params={particleOpt}
            /> 
            <div className="hero-text">
                <h1 className="hero-text__title">
                    Hello, I'm 
                    <span className="hero-text__title-color">
                        Joseph Lin
                    </span>.
                    <br/>
                    I'm a front-end developer
                </h1>
                <button onClick={this.scrollTo} className="btn hero-text__hero-btn">View my work</button>
            </div>
        </div>
        );
    };
}

export default Hero;
