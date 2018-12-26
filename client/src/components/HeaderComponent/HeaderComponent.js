import React, {Component, Fragment} from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input
} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
class HeaderComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        }
    }
    toggleModal =()=>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    };
    toggleNav = ()=> {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };
    handleLogin = (event)=>{
        this.toggleModal();
        alert(`Username: ${this.email.value} Password: ${this.password.value} `);
    };
    render() {
        return (
            <Fragment>
                <Navbar dark expand="md" className="fixed-top navbar-dark -inverse">
                    <NavbarBrand ><NavLink to='/' className="navbar-brand"><span className="fa fa-home fa-lg"> Real Estate</span></NavLink></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink to="/list" className="nav-link">
                                    Buy
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink to="/rent" className="nav-link">
                                    Rent
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink to="/addproperty" className="nav-link">
                                   Add Property
                                </NavLink>
                            </NavItem>
                            <NavItem className="mr-1">
                                <NavLink to="/signup" className="nav-link">
                                    Sign Up
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-link" onClick={this.toggleModal}>
                                    Sign In
                            </NavItem>
                            <Link to='/list'>
                                <Button className="btn btn-green">List Properties</Button>
                            </Link>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-sm">
                    <ModalHeader className="m-auto">Sign In</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Input type="email" id="email" name="email"
                                       innerRef={(input) => this.email = input}
                                       placeholder="Email"

                                />
                                <Input type="password" id="password" name="password"
                                       innerRef={(input) => this.password = input}
                                       placeholder="Password"
                                />
                                <Label className="small">Don't Have an account? <NavLink className="link-green" to="/">sign up</NavLink></Label>
                            </FormGroup>
                            <Button className="btn btn-block btn-green" type="submit" value="submit" >Sign In</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default HeaderComponent;