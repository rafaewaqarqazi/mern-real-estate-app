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
import PropertyDetail from './PropertyDetailComponent/PropertyDetailComponent';
import { loginUser, logoutUser, registerUser } from "../redux/actions/authActions";
import PrivateRoute from '../routes/PrivateRoute';
import {
    addImageToServer,
    addProperty,
    fetchProperties,
    fetchRecentProperties, removeProperty,
    sendEmailToOwner
} from "../redux/actions/propertyActions";
import {actions} from "react-redux-form";

const mapStateToProps = state => {
    return {
        auth: state.auth,
        properties: state.properties,
        recent:state.recent,
        myProperties: state.myProperties
    }
};

const mapDispatchToProps = (dispatch) => ({
    loginUser: (userData)=> dispatch(loginUser(userData)),
    logoutUser: ()=>{dispatch(logoutUser())},
    registerUser:(userData)=> dispatch(registerUser(userData)),
    addProperty:(newProperty)=>dispatch(addProperty(newProperty)),
    addImageToServer:(image)=>dispatch(addImageToServer(image)),
    fetchProperties: ()=>{dispatch(fetchProperties())},
    fetchRecentProperties:()=>{dispatch(fetchRecentProperties())},
    resetAddPropertyForm: ()=> {dispatch(actions.reset('addProperty'))},
    resetEmailOwnerForm:()=>{dispatch(actions.reset('contact'))},
    sendEmailToOwner:(data)=>{dispatch(sendEmailToOwner(data))},
    removeProperty: (id) => dispatch(removeProperty(id))
});


class Main extends Component {



    componentDidMount() {
        this.props.fetchProperties();
        this.props.fetchRecentProperties();
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
                    <Route exact path="/" component={()=> <HomePage isLoading={this.props.properties.isLoading}
                                                                    errMess={this.props.properties.errMess}
                                                                    recentProperties={this.props.recent.recent}
                                                        />}
                    />
                    <Route path="/list" component={()=> <ListPropertiesComponent
                                                            properties={this.props.properties.properties}
                                                            isLoading={this.props.properties.isLoading}
                                                            errMess={this.props.properties.errMess}
                                                        />}
                    />
                    <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard}/>
                    <PrivateRoute exact path="/user/dashboard" component={()=><UserDashboard
                                                                                myProperties={this.props.myProperties.myProperties}
                                                                                isLoading={this.props.myProperties.isLoading}
                                                                                errMess={this.props.myProperties.errMess}
                                                                                removeProperty={this.props.removeProperty}
                                                                                />}
                    />
                    <PrivateRoute path="/property/add" component={() => <AddPropertyComponent
                                                                    addProperty={this.props.addProperty}
                                                                    addImageToServer={this.props.addImageToServer}
                                                                    resetAddPropertyForm={this.props.resetAddPropertyForm}
                                                                    auth={this.props.auth}
                                                                />}
                    />
                    <Route path="/property/:id" component={({match})=><PropertyDetail
                        property={this.props.properties.properties.filter(property => property._id === match.params.id)[0]}
                        isLoading={this.props.properties.isLoading}
                        errMess={this.props.properties.errMess}
                        resetEmailOwnerForm={this.props.resetEmailOwnerForm}
                        sendEmailToOwner={this.props.sendEmailToOwner}
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
