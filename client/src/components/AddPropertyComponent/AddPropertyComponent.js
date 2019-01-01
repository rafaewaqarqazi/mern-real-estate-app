import React, {Component} from 'react';
import { Control, Form, Errors } from "react-redux-form";
import {Button, Label, Col, Row } from 'reactstrap';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = val => !isNaN(Number(val));


class AddPropertyComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            image:'',
            imageFile:null,
            latitude:'',
            longitude:''
        }
    }
    componentDidMount() {
        this.props.resetAddPropertyForm();
    }

    handleSubmit = values => {
        if (this.state.imageFile === null){
            alert('Please add Image of Property');
        }else if(this.state.latitude === ''){
            alert('Please Add Location');
        }
        else {
            const val = {
                ...values,
                image: this.state.image,
                latitude:this.state.latitude,
                longitude:this.state.longitude,
                email: this.props.auth.user.email
            };
            const formData = new FormData();
            formData.append('image',this.state.imageFile);
            this.props.addImageToServer(formData);
            this.props.addProperty(val);
            this.props.resetAddPropertyForm();
        }
    };

    imageHandler = (event) => {
        if (event.target.files.length > 0)
        {
            this.setState(prevState=>({
                image:event.target.files[0].name,
                imageFile: event.target.files[0]
            }));

        }

    };

    getLocation=(event)=>{
        if(!navigator.geolocation){
            return alert('Location not Supported by your browser');
        }


        navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
                });

            alert('Got Your Location :D');
        });

    };

    render() {
        return (
            <div className="container pt-5">
                <div className="card ">
                    <div className="card-title text-center p-4 bg-green text-white" >
                        <h3>Add New Property</h3>
                    </div>
                    <div className="card-body">
                        <Form model="addProperty" onSubmit={value => this.handleSubmit(value)}>
                            <Row className="form-group">
                                <Label htmlFor="propertytitle" md={2}>Property Title</Label>
                                <Col md={6}>

                                    <Control.text model=".propertytitle" id="propertytitle" name="propertytitle"
                                                  placeholder="Property Title"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(3), maxLength: maxLength(30)
                                                  }}
                                    />
                                    <Errors model=".propertytitle"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength: 'Must be less than 30 Characters'
                                            }}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="for" md={2}>For</Label>
                                <Col md={6}>
                                    <Control.select model=".for" name="for" className="form-control" defaultValue="Sale">
                                        <option>Sale</option>
                                        <option>Rent</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="bedrooms" md={2}>No. of Bedrooms</Label>
                                <Col md={6}>
                                    <Control.text model=".bedrooms" id="bedrooms" name="bedrooms"
                                                  placeholder="Bedrooms"
                                                  className="form-control"
                                                  validators={{
                                                      required,isNumber
                                                  }}
                                    />
                                    <Errors model=".bedrooms"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                isNumber: 'Must be Number'
                                            }}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="bathrooms" md={2}>No. of Bathrooms</Label>
                                <Col md={6}>
                                    <Control.text model=".bathrooms" id="bathrooms" name="bathrooms"
                                                  placeholder="bathrooms"
                                                  className="form-control"
                                                  validators={{
                                                      required, isNumber
                                                  }}
                                    />
                                    <Errors model=".bathrooms"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                isNumber: 'Must be Number'
                                            }}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 1, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".garage" name="garage" className="form-check-input"/>{' '}
                                            Garage
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 1, offset: 1}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".lounge" name="lounge" className="form-check-input"/>{' '}
                                            Lounge
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="address" md={2}>Address</Label>
                                <Col md={6}>
                                    <Control.text model=".address" id="address" name="address"
                                                  placeholder="Address"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(3), maxLength: maxLength(50)
                                                  }}
                                    />
                                    <Errors model=".address"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength: 'Must be less than 50 Characters'
                                            }}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="city" md={2}>City</Label>
                                <Col md={6}>
                                    <Control.select model=".city" name="city" className="form-control" defaultValue="Rawalpindi">
                                        <option>Rawalpindi</option>
                                        <option>Islamabad</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="area" md={2}>Area</Label>
                                <Col md={3}>
                                    <Control.text model=".area" id="area" name="area"
                                                  placeholder="Area"
                                                  className="form-control"
                                                  validators={{
                                                      required,isNumber
                                                  }}
                                    />
                                    <Errors model=".area"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                isNumber: 'Must be Number'
                                            }}
                                    />


                                </Col>
                                <Col md={3}>
                                    <Control.select model=".areaUnit" name="areaUnit" className="form-control" defaultValue="Marla">
                                        <option>Marla</option>
                                        <option>Kanal</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="location" md={2}>Location</Label>
                                <Col md={{size:6, offset: 0}}>
                                    <Button className="btn-green" onClick={this.getLocation}>
                                        <span className="fa fa-location-arrow"> Get Location</span>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="images" md={2}>Upload Images</Label>
                                <Col md={6}>
                                    <Control.file model="image1" id="image1" name="image1"
                                                  className="form-control-file mb-2"
                                                  accept="image/jpg, image/jpeg"
                                                  onChange={this.imageHandler}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="price" md={2}>Price</Label>
                                <Col md={3}>
                                    <Control.text model=".price" id="price" name="price"
                                                  placeholder="Price"
                                                  className="form-control"
                                                  validators={{
                                                      required,isNumber
                                                  }}
                                    />
                                    <Errors model=".price"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                isNumber: 'Must be Number'
                                            }}
                                    />
                                </Col>
                                <Col md={3}>
                                    <Control.select model=".priceUnit" name="priceUnit" className="form-control" defaultValue="Lac">
                                        <option>Lac</option>
                                        <option>Crore</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="contact" md={2}>Contact No</Label>
                                <Col md={3}>
                                    <Control.text model=".contact" id="contact" name="contact"
                                                  placeholder="03*********"
                                                  className="form-control"
                                                  validators={{
                                                      required,isNumber, minLength: minLength(11), maxLength: maxLength(11)
                                                  }}
                                    />
                                    <Errors model=".contact"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength:'Invalid Number',
                                                maxLength:'Invalid Number',
                                                isNumber: 'Must be Number'
                                            }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="description" md={2} >Detail Description</Label>
                                <Col md={6}>
                                    <Control.textarea model=".description" id="description" name="description"
                                                      rows="12"
                                                      className="form-control"
                                                      placeholder="Your Description goes here..."
                                                      validators={{
                                                          required
                                                      }}
                                    />
                                    <Errors model=".description"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                            }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset: 2}}>
                                    <Button type="submit" className="btn-block btn-green">
                                        Add Property
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </div>
            </div>

        );
    }
}

export default AddPropertyComponent;