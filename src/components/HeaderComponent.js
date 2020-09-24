import React,{ Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron,Nav,NavbarToggler,Collapse,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        };

        /* the left side is the variabe*/
        //the right side is the function
        // .bind() connects the variable on the left with the function on the right
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        alert("Set State works!!");
    }
    render(){
        return(
            <>
                <div>
                    <Navbar dark expand="md">
                        <div className="container">
                            {/* expand="", will expand the navbar at specified width. */}
                            <NavbarToggler onClick={this.toggleNav}/>
                            <NavbarBrand className="mr-auto" href="/">
                                <img src="assets/images/logo.png" alt="Ristorante Con Fusion" height="30" width="41"/>
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        {/* to="/" specifies the page to go*/}
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"/>Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg"/>About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg"/>Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg"/>Contact
                                        </NavLink>
                                    </NavItem>        
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                    <Jumbotron>
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-12 col-sm-6">
                                    <h1>Ristorante Con Fusion</h1>
                                    <p>
                                        We take inspiration from the World's best cuisines, and create a unique fusion experience.
                                        Our lipsmacking creations will tickle your culinary senses!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
                </div>
            </>
        );
    }
}

export default Header;