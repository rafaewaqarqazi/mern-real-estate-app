import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "reactstrap";
import PropertyComponent from '../PropertyComponent/PropertyComponent';

const Home = ({recentProperties, isLoading, errMess})=> (
    <Fragment >
        <div className="text-white">
            <div className="container pt-5">
                <div className="row mt-5 ">
                    <div className="col-12 col-md p-5 text-center">
                        <h1 className="home-title">Now It is Easy to Find Your Dream House</h1>
                        <h5 className="home-subtitle">With Geek's Crew's - Real Estate App</h5>
                        <NavLink to="/list"><Button className="btn-green mt-2">Check Out</Button></NavLink>
                    </div>
                </div>
            </div>
            <div className="row mt-5 bg-green">
                <div className="col-12 col-md p-2 text-center ">
                    <h5 className="home-subtitle">Recently Listed Properties</h5>
                    <p>Checkout Latest Listed Properties for sale and rent</p>
                </div>
            </div>
        </div>

        <div className= "container">
            <div className="row mt-5">
                <PropertyComponent properties={recentProperties}
                                   isLoading={isLoading}
                                   errMess={errMess}
                />
            </div>
        </div>
    </Fragment>


);

export default Home;