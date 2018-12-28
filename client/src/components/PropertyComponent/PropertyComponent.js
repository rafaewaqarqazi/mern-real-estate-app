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
                return( <div className="card card-hover col-12 col-md-4" key={property._id}>
                    <div className="card-body p-0">
                        <img src={`/uploads/${property.image}`} className="prop-image card-img" alt={property.propertytitle}/>
                    </div>


                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-property-title">{property.propertytitle}</p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-success">{`RS: ${property.price}`}</p>
                            </div>
                        </div>
                        <div className="row card-property-address ml-auto">
                            {property.address}
                        </div>
                        <div className="small">
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