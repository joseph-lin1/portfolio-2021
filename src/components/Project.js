import React from 'react';

class Project extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        let disabled = this.props.project.disabled === true ? "disabled" : ""
        let learnMoreButton = this.props.project.disabled === true ? "" : <button className="portfolio-content__image-overlay-btn">Learn More</button>
        let brandName = this.props.project.disabled === true ? this.props.project.disabledTitle : ""
        return(
            <div className={"portfolio-content " + disabled}>
                <div className="portfolio-content__image-container" 
                    onClick={()=>this.props.triggerModal(this.props.project)} >
                    <img 
                        className="portfolio-content__image"
                        src={"images/" + this.props.project.featuredImage} 
                        alt="josephlin.dev"/>
                    <div className="portfolio-content__image-overlay">
                        <img className="portfolio-content__image-title" src={"images/" + this.props.project.title}/>
                        <h2 className="portfolio-content__image-disabled-title">{brandName}</h2>
                        {learnMoreButton}
                    </div>
                </div>
            </div>
        )
    }
}
export default Project