import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './HomeComponent';
import {actions} from "react-redux-form";


// const mapStateToProps = state => {
//     return {
//         dishes: state.dishes,
//         comments: state.comments,
//         promotions: state.promotions,
//         leaders: state.leaders
//     }
// };

const mapDispatchToProps = (dispatch) => ({

});

class Main extends Component {



    render() {

        return (
            <div >
                <Switch>
                    <Route path="/" component={HomePage}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapDispatchToProps)(Main));
