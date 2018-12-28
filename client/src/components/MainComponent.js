import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './HomeComponent/HomeComponent';
import Header from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import ListPropertiesComponent from './ListPropertiesComponent/ListPropertiesComponent';
import AdminDashboard from './AdminDashboardComponent/AdminDashboardComponent';
import UserDashboard from './UserDashboardComponent/UserDashboardComponent';
import AddPropertyComponent from "./AddPropertyComponent/AddPropertyComponent";
import { loginUser, logoutUser, registerUser } from "../redux/actions/authActions";
import PrivateRoute from '../routes/PrivateRoute';
import {addImageToServer, addProperty, fetchProperties} from "../redux/actions/propertyActions";
const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
};

const mapDispatchToProps = (dispatch) => ({
    loginUser: (userData)=> dispatch(loginUser(userData)),
    logoutUser: ()=>{dispatch(logoutUser())},
    registerUser:(userData)=> dispatch(registerUser(userData)),
    addProperty:(newProperty)=>dispatch(addProperty(newProperty)),
    addImageToServer:(image)=>dispatch(addImageToServer(image)),
    fetchProperties: ()=>{dispatch(fetchProperties())}
});


class Main extends Component {


    componentDidMount() {
        this.props.fetchProperties();
    }

    render() {

        return (
            <div>
                <Header
                    loginUser={this.props.loginUser}
                    registerUser={this.props.registerUser}
                    logoutUser={this.props.logoutUser}
                    auth={this.props.auth}
                />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/list" component={ListPropertiesComponent}/>
                    <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard}/>
                    <PrivateRoute exact path="/user/dashboard" component={UserDashboard}/>
                    <Route path="/addproperty" component={() => <AddPropertyComponent
                                                                    addProperty={this.props.addProperty}
                                                                    addImageToServer={this.props.addImageToServer}
                                                                />}
                    />
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
