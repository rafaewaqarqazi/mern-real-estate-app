import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import PropertyComponent from '../PropertyComponent/PropertyComponent';
import axios from "axios";

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            city:{
                islamabad:'0',
                rawalpindi:'0'
            },
            for:{
                sale:'0',
                rent:'0'
            }
        }
    }
    componentWillMount() {

        axios.get("http://localhost:5000/api/property/count/Islamabad")
            .then((response) => {
                this.setState({
                    city:{
                        ...this.state.city,
                        islamabad: response.data
                    }
                },()=>{
                    console.log(this.state)
                })
            }).catch((error) => {
        });
        axios.get("http://localhost:5000/api/property/count/Rawalpindi")
            .then((response) => {
                this.setState({
                    city:{
                        ...this.state.city,
                        rawalpindi: response.data
                    }
                },()=>{
                    console.log(this.state)
                })
            }).catch((error) => {
        });
        axios.get("http://localhost:5000/api/property/count/for/Sale")
            .then((response) => {
                this.setState({
                    for:{
                        ...this.state.for,
                        sale: response.data
                    }
                },()=>{
                    console.log(this.state)
                })
            }).catch((error) => {
        });
        axios.get("http://localhost:5000/api/property/count/for/Rent")
            .then((response) => {
                this.setState({
                    for:{
                        ...this.state.for,
                        rent: response.data
                    }
                },()=>{
                    console.log(this.state)
                })
            }).catch((error) => {
        });

    }

    render() {
        const {recentProperties, isLoading, errMess} = this.props;
        return (
            <Fragment>
                <div className="container">
                <div className="text-white">
                    <div className="container pt-5">
                        <div className="row mt-5 ">
                            <div className="col-12 col-md p-5 text-center">
                                <h1 className="home-title">Now It is Easy to Find Your Dream House</h1>
                                <h2 className="home-subtitle">With Geek's Crew's - Real Estate App</h2>
                                <Link to="/list" className="btn btn-green btn-md mt-3">Check Out</Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-2">
                            <div className="col-6 col-md-3 ">
                                <div className="card">
                                    <div className="card-title link-green text-center p-2">
                                        <h3 className="text">Property Purpose</h3>
                                    </div>
                                    <div className="card-body text-dark text-center">
                                        <p>Sale <span className="badge badge-primary">{this.state.for.sale}</span></p>
                                        <p>Rent <span className="badge badge-success">{this.state.for.rent}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 ">
                                <div className="card">
                                    <div className="card-title link-green text-center p-2">
                                        <h3 className="text">Cities</h3>
                                    </div>
                                    <div className="card-body text-dark text-center">
                                        <p>Islamabad <span className="badge badge-danger">{this.state.city.islamabad}</span>
                                        </p>
                                        <p>Rawalpindi <span
                                            className="badge badge-warning">{this.state.city.rawalpindi}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 bg-green">
                        <div className="col-12 col-md p-2 text-center">
                            <h3 className="home-subtitle">Recently Listed Properties</h3>
                            <p>Checkout Latest Listed Properties for sale and rent</p>
                        </div>
                    </div>


                </div>

                <div className="container mt-5">
                    <div className="row ">
                        <PropertyComponent properties={recentProperties}
                                           isLoading={isLoading}
                                           errMess={errMess}
                        />
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;