import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';

class Navbar extends Component {

    constructor( props ) {
        super(props);
        this.state = {addClass: 'Say hello' }
    }

    componentDidMount() {
       window.addEventListener('scroll', this.handleScroll.bind(this));
        
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll () {
        let lastScrollY = window.scrollY

       if( lastScrollY >= 60 ) {

         this.setState((state, props) => ({ 
            addClass: 'nav-sticky' 
        }) );

       } else {

        this.setState((state, props) => ({
            addClass: ''
        }));

       }
        
    }
    render() {

        let logoAlt = "Sandy";
        
        return (
            <div>
            <nav className={`${this.state.addClass} navbar navbar-inverse navbar-expand-lg header-nav fixed-top header`}>
                <div className="container">
                    <a className="navbar-brand logo" href={`${process.env.PUBLIC_URL}/`}>
                        <img className="logo-dark" src={process.env.PUBLIC_URL + '/assets/img/jgv.png'} alt={logoAlt}  style={{  height: '60px' }}/>
                        <img className="logo-light" src={process.env.PUBLIC_URL + '/assets/img/jgv.png'} alt={logoAlt} style={{height: '60px' }}/>
                    </a>
                    <button className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                        <i className="icofont-navigation-menu"></i>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarCodeply">
                        <ul className="nav navbar-nav ml-auto">
                            <li>
                                <HLink className="nav-link" smooth to={`/#home`}>Inicio</HLink>
                                <span className="" role="navigation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="icofont-rounded-down"></i>
                                </span>
                            </li>
                            <li><HLink className="nav-link" smooth to={`/#about`}>Acerca de</HLink></li>
                            <li><HLink className="nav-link" smooth to={`/#features`}>Servicios</HLink></li>
                            <li><HLink className="nav-link" smooth to={`/#screenshots`}>Portafolio</HLink></li>
                            <li>
                                <a className="nav-link" href='https://jgvabogados.com.mx/blog/author/4toadmin/'>Blog</a>
                                
                                
                            </li>
                            <li><HLink className="nav-link" smooth to={`/#contact`}>Contacto</HLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}


export default Navbar