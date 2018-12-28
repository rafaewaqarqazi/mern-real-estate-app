import React from 'react';
import {Button} from "reactstrap";
import { Loading } from '../LoadingComponent/LoadingComponent';
import Moment from 'react-moment';
const PropertyComponent = ({properties, isLoading, errMess})=>{
    if(isLoading){
        return(
            <div className="col-12 col-md">
                <Loading/>
            </div>

        );
    }
    else if (errMess){
        return(
            <div className="col-12 col-md m-5 d-flex justify-content-center">
                <h4 className="text-danger">{errMess}</h4>
            </div>

        );
    }
    else {
        return (
            properties.map(property => {
                return( <div className="card card-hover col-12 col-md-4 m-2" key={property._id}>

                    <img src={`/uploads/${property.image}`} className="card-img-top prop-image"/>

                    <div className="card-footer">
                        <div className="d-flex flex-row justify-content-around">
                            <div>
                                <p className="card-property-title">{property.propertytitle}</p>
                                <p className="card-property-address">{property.address}</p>
                            </div>
                            <div>
                                <p>{`RS: ${property.price}`}</p>
                            </div>

                        </div>
                        <div className="small m-3">
                            <Moment format="MMM DD, YYYY">{property.date}</Moment>
                        </div>
                        <Button className="btn-block btn-green">View</Button>

                    </div>
                </div>)
            })

        );
    }






};

export default PropertyComponent;