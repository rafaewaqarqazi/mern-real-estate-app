import React, {Component} from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText, Label} from "reactstrap";
import PropertyComponent from '../PropertyComponent/PropertyComponent';

class ListPropertiesComponent extends Component{

    componentWillMount() {
        this.setState({
            property: this.props.properties,
            filteredProperties: this.props.properties,
            filteredByFor:this.props.properties,
            filteredByCity:this.props.properties
        })
    }

    constructor(props){
       super(props);
       this.state={
           text:'',
           city:'All',
           for:'All',
           property:[],
           filteredProperties:[],
           filteredByFor:[],
           filteredByCity:[]
       }
   }
    onChangeCity = (event)=>{
        this.setState({
            city:event.target.value
        },()=>{
            this.filterByCity();
        });

    };
    filterByCity = ()=>{
        this.setState({
            filteredProperties: this.state.city !== 'All' ? this.state.filteredByFor.filter(prop => prop.city === this.state.city)  : this.state.filteredByFor,
            filteredByCity:this.state.city !== 'All' ? this.state.filteredByFor.filter(prop => prop.city === this.state.city)  : this.state.filteredByFor
        })
    };
    onChangeFor = (event)=>{
        this.setState({
            for:event.target.value
        },()=>{
            this.filterByFor();
        });


    };
    filterByFor = ()=>{

        this.setState({
            filteredProperties: this.state.for !== 'All' ?this.state.property.filter(prop => prop.for === this.state.for) : this.state.property,
            filteredByFor:this.state.for !== 'All' ?this.state.property.filter(prop => prop.for === this.state.for) : this.state.property
        })
    };
    onChangeText = (event)=>{
        this.setState({
            text:event.target.value
        }, ()=>{
            this.filterByText()
        })
    };
    filterByText = ()=>{
        this.setState({
            filteredProperties: this.state.text !== '' ? this.state.filteredByCity.filter(prop => prop.propertytitle.toLowerCase().includes(this.state.text.toLowerCase()))  : this.state.filteredByCity
        })
    };
    render() {
        return(
            <div >
                <div className="text-white">
                    <div className="bg-green text-center p-4 mt-5" >
                        <h3>Filter Your Results</h3>
                    </div>
                    <div className="container mt-5">
                        <InputGroup className="form-group">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <span className="fa fa-search"/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Search for Houses..." onChange={this.onChangeText} value={this.state.text}/>
                        </InputGroup>
                        <div className="form-inline">
                            <Label className="mr-1">For</Label>
                            <select className="form-control mr-2" id="for" onChange={this.onChangeFor} value={this.state.for}>
                                <option>All</option>
                                <option>Sale</option>
                                <option>Rent</option>
                            </select>
                            <Label className="mr-1">City</Label>
                            <select className="form-control mr-2" onChange={this.onChangeCity} value={this.state.city}>
                                <option>All</option>
                                <option>Rawalpindi</option>
                                <option>Islamabad</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <PropertyComponent properties={this.state.filteredProperties}
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