import React, {Component} from 'react';
import Modal from './components/Modal';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import projectsData from './ProjectsData';
import Portfolio from './components/Portfolio';
import brandsData from './BrandsData';
import Brands from './components/Brands';
import Footer from './components/Footer';
import './App.scss';

class App extends Component{
  constructor(){
    super();
    this.state = {
      lastScrollY: "",
      projectData: projectsData,
      brandsData: brandsData,
      selectedProject: "",
      modalActive: false
    }
    this.triggerModal = this.triggerModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction(event){
    if(event.keyCode === 27) {
      if ( this.state.modalActive ){
        this.setState({modalActive: false})
        document.body.style.overflow = "auto"
      }
    }
  }

  componentDidMount() {
    // Sticky Header
    window.addEventListener('scroll', ()=> {
      this.setState({lastScrollY: window.scrollY})
    })
    document.addEventListener("keydown", this.escFunction, false);
  }

  triggerModal (project){
    document.body.style.overflow = "hidden"
    this.setState({
      selectedProject: project,
      modalActive: true
    })
  }

  closeModal(){
    document.body.style.overflow = "auto"
    this.setState({
      modalActive: false
    })
  }
  render(){
    return (
      <div className="App">
        <Modal modalActive={this.state.modalActive} projectInfo={this.state.selectedProject} closeModal={this.closeModal}/>
        <Hero />  
        <Header lastScrollY={this.state.lastScrollY}/>  
        <About lastScrollY={this.state.lastScrollY}/>
        <Portfolio triggerModal={this.triggerModal} projectData={this.state.projectData}/>
        <Brands brandsData={this.state.brandsData}/>
        <Footer />
      </div>
    );
  };
}

export default App;
