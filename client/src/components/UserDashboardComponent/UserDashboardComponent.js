import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Loading} from "../LoadingComponent/LoadingComponent";
import Moment from 'react-moment';
import {Button} from "reactstrap";



class UserDashboardComponent extends Component {

    handleRemove = (val) => event => {
        this.props.removeProperty(val);
    };
    render() {
        const {myProperties, isLoading, errMess} =this.props;
        if(isLoading){
            return(
                <div className="col-12 col-md p-5">
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
                <div className="container pt-5">
                    <div className="card ">
                        <div className="card-title text-center p-4 bg-green text-white" >
                            <h3>My Properties</h3>
                        </div>
                        <div className="card-body">

                            { myProperties.length === 0 ?
                                <div className="text-center p-4" >
                                    <h5>You Don't have any properties yet</h5>
                                </div>
                                :myProperties.map(property => {
                                return (
                                    <div className="row border p-1" key={property._id}>
                                        <div className="col-12 col-md-4 ">
                                            <img src={`/uploads/${property.image}`} alt={`${property.propertytitle}`} className="w-100" height="300"/>
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                                            <Link to={`/property/${property._id}`}><h4>{property.propertytitle}</h4></Link>
                                            <p>{`Price: Rs. ${property.price} ${property.priceUnit}`}</p>
                                            <p><Moment format="MMM, DD, YYYY">{property.date}</Moment></p>
                                        </div>
                                        <div className="col-12 col-md-2 d-flex flex-column justify-content-center">
                                            <Button className="btn-danger btn-block" onClick={this.handleRemove(property._id)}>Remove</Button>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            );
        }
    }
}



export default UserDashboardComponent;