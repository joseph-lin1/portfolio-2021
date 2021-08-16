import React from 'react';
import SVG from 'react-inlinesvg';
import iconFooterTop from '../icon/footer-top.svg';
import iconArrowUp from '../icon/icon-dual-arrow-up.svg';
import iconGithub from '../icon/icon-github.svg';
import iconLinkedin from '../icon/icon-linkedin.svg';
import iconEmail from '../icon/icon-email.svg';



class Footer extends React.Component{
    constructor(){
        super();
        this.scrollTop = this.scrollTop.bind(this);
    }
    scrollTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    render(){
        const year = new Date().getFullYear()
        return (
            <div id="footer" className="footer">
                <div className="footer-top">
                    <SVG src={iconFooterTop} />
                </div>
                <div className="footer-inner">
    
                    <button onClick={this.scrollTop} className="footer-up-trigger">
                        <SVG src={iconArrowUp} />
                    </button>
    
                    <p className="footer-subtext">Have a question or want to work together?</p>
                    <div className="footer-link__container">
                        <a rel="noopener noreferrer" target="_blank" className="footer-link" href="https://github.com/joseph-lin1">
                            <SVG src={iconGithub} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" className="footer-link" href="https://www.linkedin.com/in/joseph-lin/">
                            <SVG src={iconLinkedin} />
                        </a>
                        <a className="footer-link" href="mailto:josephlin550@gmail.com">
                            <SVG src={iconEmail} />
                        </a>
                    </div>
                    <p className="footer-copyright-text">Joseph Lin <span className="footer-copyright-text__year">©{year}</span></p>
                </div>
            </div>
        )
    }
}
export default Footer