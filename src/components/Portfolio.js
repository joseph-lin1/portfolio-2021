import React from 'react';
import Project from './Project';

class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        const newData = this.props.projectData.map( project => <Project key={project.id} project={project} triggerModal={this.props.triggerModal} />)
        return(
            <div id="portfolio" className="portfolio">
                <header className="portfolio-title__container">
                    <h1 className="portfolio-title">Portfolio</h1>
                </header>
                <p className="portfolio-description">Here are some of the projects that I have worked on recently, feel free to take a look!</p>
                <div className="portfolio-content__container">
                    {newData}
                </div>
            </div>
        )
    }
}
export default Portfolio