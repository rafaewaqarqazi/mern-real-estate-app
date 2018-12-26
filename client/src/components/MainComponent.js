import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './HomeComponent/HomeComponent';
import Header from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import ListPropertiesComponent from './ListPropertiesComponent/ListPropertiesComponent';

import {actions} from "react-redux-form";


// const mapStateToProps = state => {
//     return {
//         dishes: state.dishes,
//         comments: state.comments,
//         promotions: state.promotions,
//         leaders: state.leaders
//     }
// };
//
// const mapDispatchToProps = (dispatch) => ({
//
// });

class Main extends Component {



    render() {

        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/list" component={ListPropertiesComponent}/>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(null,null)(Main));
