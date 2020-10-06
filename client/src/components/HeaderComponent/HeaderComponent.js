import React, {Component, Fragment} from 'react';
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem,
    Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input
} from 'reactstrap';
import {NavLink, Link } from 'react-router-dom';


class HeaderComponent extends Component{


    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false,
            isSignUpModalOpen: false,
            toggleSignUpModal:false
        }
    }


    toggleModal =()=>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    };
    toggleSignUpModal=()=>{
        this.setState({
            isSignUpModalOpen: !this.state.isSignUpModalOpen
        })
    };
    toggleNav = ()=> {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };
    handleLogin = (event)=>{
        event.preventDefault();
        this.toggleModal();
        const userData = {
            email: this.loginemail.value,
            password: this.loginpassword.value
        };
        this.props.loginUser(userData);
        console.log(this.props.auth);

    };
    handleSignUp = (event)=>{
        event.preventDefault();
        if (this.password.value === this.password2.value){
            const newUser = {
                name: this.name.value,
                email: this.email.value,
                password: this.password.value,
            };
            this.props.registerUser(newUser);
            this.toggleSignUpModal();
        }
        else {
            alert('Password Does not Match');
        }

    };
    logout =(event)=>{
        this.props.logoutUser();
    };

    render() {
        return (
            <Fragment>
                <Navbar dark expand="md" >
                    <NavLink to='/' className="navbar-brand"><span className="fa fa-home fa-lg"> Real Estate</span></NavLink>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav role='navigation' className="ml-auto" navbar>
                            <NavItem role='link' >
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </NavItem>
                            {
                                this.props.auth.isAuthenticated ?
                                  <Fragment>
                                      <NavItem role='link' >
                                          <NavLink to="/property/add" className="nav-link">
                                              Add Property
                                          </NavLink>
                                      </NavItem>
                                      <NavItem role='link'>
                                          <NavLink to="/user/dashboard" className="nav-link">
                                              My Properties
                                          </NavLink>
                                      </NavItem>
                                      <NavItem role='button' className="nav-link" onClick={this.logout}>
                                          Logout
                                      </NavItem>
                                  </Fragment>



                                    :
                                    <Fragment >
                                        <NavItem role='button' className="mr-1 nav-link cursor-pointer"  onClick={this.toggleSignUpModal}>
                                            Sign Up
                                        </NavItem>
                                        <NavItem role='button' className="mr-1 nav-link cursor-pointer" onClick={this.toggleModal}>
                                            Sign In
                                        </NavItem>
                                    </Fragment>



                            }


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
                                <Input type="email" id="loginemail" name="loginemail"
                                       innerRef={(input) => this.loginemail = input}
                                       placeholder="Email"

                                />
                                <Input type="password" id="loginpassword" name="loginpassword"
                                       innerRef={(input) => this.loginpassword = input}
                                       placeholder="Password"
                                />
                                <Label className="small">Don't Have an account? <span className="link-green" onClick={this.toggleSignUpModal}>sign up</span></Label>
                            </FormGroup>
                            <Button className="btn btn-block btn-green" type="submit" value="submit" >Sign In</Button>
                        </form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal} className="modal-sm">
                    <ModalHeader className="m-auto">Sign In</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSignUp}>
                            <FormGroup>
                                <Input type="text" id="name" name="name"
                                       innerRef={(input) => this.name = input}
                                       placeholder="Your Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" id="email" name="email"
                                       innerRef={(input) => this.email = input}
                                       placeholder="Email"

                                />
                            </FormGroup>

                            <FormGroup>
                                <Input type="password" id="password" name="password"
                                               innerRef={(input) => this.password = input}
                                               placeholder="Password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" id="password2" name="password2"
                                       innerRef={(input) => this.password2 = input}
                                       placeholder="Confirm Password"
                                />
                            </FormGroup>
                            <Button className="btn btn-block btn-green" type="submit" value="submit" >Sign Up</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default HeaderComponent;