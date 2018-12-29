import React, {Component} from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText, Label} from "reactstrap";
import PropertyComponent from '../PropertyComponent/PropertyComponent';
import HomePage from "../MainComponent";

class ListPropertiesComponent extends Component{

   constructor(props){
       super(props);
       this.state={
           city:'All',
           for:'All'
       }
   }
    onChangeCity = (event)=>{
        alert(event.target.value);
        this.setState({
            city:event.target.value
        })
    };
    onChangeFor = (event)=>{
      alert(event.target.value);
        this.setState({
            for:event.target.value
        })
    };
    render() {
        return(
            <div >
                <div className="text-white">
                    <div className="bg-green text-center p-4" >
                        <h3>Filter Your Results</h3>
                    </div>
                    <div className="container mt-5">
                        <InputGroup className="form-group">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <span className="fa fa-search"/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Search for Houses..."/>
                        </InputGroup>
                        <div className="form-group">
                            <Label>Property Type:</Label>
                            <select className="form-control" onChange={this.onChangeFor} value={this.state.for}>
                                <option>All</option>
                                <option>Buy</option>
                                <option>Rent</option>
                            </select>
                        </div>
                        <div className="form-inline">
                            <Label>City:</Label>
                            <div className="m-2">
                                <select className="form-control" onChange={this.onChangeCity} value={this.state.city}>
                                    <option>All</option>
                                    <option>Rawalpindi</option>
                                    <option>Islamabad</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <PropertyComponent properties={this.props.properties}
                                           isLoading={this.props.isLoading}
                                           errMess={this.props.errMess}
                        />
                    </div>
                </div>



            </div>
        )
    }
}

export default ListPropertiesComponent;