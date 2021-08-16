import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navTop: ""
    };
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  componentDidMount(){
    const nav = document.getElementById("nav");
    const about = document.getElementById("about");
    const portfolio = document.getElementById("portfolio");
    const footer = document.getElementById("footer");
    this.setState({
      navTop: nav.offsetTop,
      aboutTop: about.offsetTop,
      portfolioTop: portfolio.offsetTop,
      footerTop: footer.offsetTop,
      footerHeight: footer.offsetHeight
    })
  }
  
  scrollToSection(event){
    const currentId = event.target.getAttribute("data-id")
    const currentElement = document.getElementById(currentId)
    var scrollTop = currentElement.offsetTop;
    var scrollTopAdjusted;
    
    if ( currentId === 'about'){
      scrollTopAdjusted = scrollTop;
    }
    else if ( currentId === 'portfolio'){
      scrollTopAdjusted = scrollTop;
    }
    else{
      scrollTopAdjusted = scrollTop - 52;
    }

    window.scrollTo({
      top: scrollTopAdjusted,
      behavior: 'smooth'
    });

  }
  
  render(){
    let navClass = this.props.lastScrollY > this.state.navTop ? "nav--fixed" : "";
    let homeActive = this.props.lastScrollY > -1 && this.props.lastScrollY < this.state.aboutTop - 52 ? "active" : "";
    let aboutActive = this.props.lastScrollY > this.state.aboutTop - 52 && this.props.lastScrollY < this.state.portfolioTop - 52 ? "active" : "";
    let portfolioActive = this.props.lastScrollY > this.state.portfolioTop - 52 ? "active" : "";
    // let footerActive = this.props.lastScrollY > this.state.footerTop  - 52 + this.state.footerHeight ? "active" : "";
    return (
      <nav id="nav" className={"nav " + navClass}>
          <a href="/" className="nav-logo">JL</a>
          <div className="nav-linklist">
              <button data-id="hero" className={"nav-linklist__link " + homeActive} onClick={this.scrollToSection}>HOME</button>
              <button data-id="about"  className={"nav-linklist__link " + aboutActive} onClick={this.scrollToSection}>ABOUT</button>
              <button data-id="portfolio"  className={"nav-linklist__link " + portfolioActive} onClick={this.scrollToSection}>PORTFOLIO</button>
          </div>
      </nav>
    );
  }
}

export default Header;
