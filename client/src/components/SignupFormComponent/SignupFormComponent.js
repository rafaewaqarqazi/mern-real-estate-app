import React, {Component} from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap/src";
import {NavLink} from "react-router-dom";

class SignUpFormComponent extends Component{

    handleSignUp =()=>{

    };
    render() {
        return (
            <div>
                <ModalHeader className="m-auto">Sign In</ModalHeader>
                <ModalBody>
                    <form onSubmit={this.handleSignUp}>
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
            </div>
        );
    }
}

export default SignUpFormComponent;