import React from 'react';
import {Button} from "reactstrap";

const PropertyComponent = ()=>{
    return(

        <div className="card card-hover">

            <img src="/background.jpg" className="card-img-top prop-image"/>

            <div className="card-footer" >
                <div className="d-flex flex-row justify-content-around">
                    <div>
                        <p className="card-property-title">Property Name</p>
                        <p className="card-property-address">Address</p>
                    </div>
                    <div>
                        <p>Price</p>
                    </div>
                </div>
                <Button className="btn-block btn-green">View</Button>

            </div>
        </div>

    );
};

export default PropertyComponent;