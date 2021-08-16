import React from 'react';
import SVG from 'react-inlinesvg';
import iconFast from '../icon/icon-fast.svg';
import iconEasy from '../icon/icon-easy.svg';
import iconDynamic from '../icon/icon-dynamic.svg';
import iconResponsive from '../icon/icon-responsive.svg';

class About extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        const nav = document.getElementById("nav");
        this.setState({navTop: nav.offsetTop})
    }

    render(){
        let aboutClass = this.props.lastScrollY > this.state.navTop ? "about--padding" : ""
        return(
            <div id="about" className={"about "+ aboutClass}>
                <div className="about-inner">

                    <div className="about-left">
                        <header className="about-title__container">
                            <h1 className="about-title">About Me</h1>
                        </header>

                        <p>Hello, I wanted to share some insight into my mindset for when I do development work. </p>
                        <p>I am a developer who enjoys learning new concepts and dabbling in new technologies. For the past few years, I have been working everyday professionally with Vanilla JS, jQuery, Handlebars, HTML5, CSS3, Liquid and much more. </p>
                        <p>My work consists of working closely with designers where I would bring their mocks which they create on programs such as Photoshop, Sketch, or Zeplin to life. I enjoy building things from scratch when I can; however when I need to, I do integrate other apps and use their API's.</p>
                        <p>I value taking my time to organize and structure my code in a clean way, because I have experienced working with code that is very sloppy or hard to read.</p>
                    </div>
                    <div className="about-right about-right__image-container">
                        <img className="about-right__image" alt="about-me" src="https://images.pexels.com/photos/9410/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </div>


                    <div className="about-left">
                        <div className="about-left__details-container">
                            <h1>test me</h1>
                            <div className="about-left__details-image">
                            </div>
                            <div className="about-left__details-text-container">
                                <header className="about-title__container">
                                    <h1 className="about-title">What I Do</h1>
                                </header>
                                <p>In my spare time, I enjoy working with technologies such as Node and React (This portfolio was made in React!). Learning syntax takes some time; however, as a developer, once we understand a concept, I feel a key skill is to be able to transfer the concept over into other technologies. This is crucial as newer technologies develop.</p>
                                <p>An example of this is me using Liquid in my work has taught me how to create resusable components, and that is relatable to the components that I use in my React Apps. </p>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="about-right__icons-container">
                            <header className="about-title__container">
                                <h1 className="about-title">Qualities</h1>
                            </header>
                            <div className="about-right__icons-each">
                                <div className="about-right__icons-each-image-container">
                                    <div className="about-right__icons-each-image">
                                        <SVG src={iconFast} />
                                    </div>
                                </div>
                                <div className="about-content__text">
                                    <h1 className="about-right__icons-each-title">Fast</h1>
                                    <p className="about-right__icons-each-subtitle">Fast load times and lag free interaction are important in all builds.</p>
                                </div>
                            </div>
                            <div className="about-right__icons-each">
                                <div className="about-right__icons-each-image-container">
                                    <div className="about-right__icons-each-image">
                                        <SVG src={iconDynamic} />
                                    </div>
                                </div>
                                <div className="about-content__text">
                                    <h1 className="about-right__icons-each-title">Dynamic</h1>
                                    <p className="about-right__icons-each-subtitle">Websites don't have to be static, I love making pages come to life.</p>
                                </div>
                            </div>
                            <div className="about-right__icons-each">
                                <div className="about-right__icons-each-image-container">
                                    <div className="about-right__icons-each-image">
                                        <SVG src={iconEasy} />
                                    </div>
                                </div>
                                <div className="about-content__text">
                                    <h1 className="about-right__icons-each-title">Intuitive</h1>
                                    <p className="about-right__icons-each-subtitle">Strong preference for easy to use, intuitive UX/UI.</p>
                                </div>
                            </div>
                            <div className="about-right__icons-each">
                                <div className="about-right__icons-each-image-container">
                                    <div className="about-right__icons-each-image">
                                        <SVG src={iconResponsive} />
                                    </div>
                                </div>
                                <div className="about-content__text">
                                    <h1 className="about-right__icons-each-title">Responsive</h1>
                                    <p className="about-right__icons-each-subtitle">The websites I create are cross-browser compatible and responsive.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        )
    }
}

export default About
