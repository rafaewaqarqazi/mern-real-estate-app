import axios from "axios";
import {ADD_PROPERTIES, ADD_PROPERTY} from "./types";

export const addProperty = (newProperty) => dispatch => {
    axios.post("http://localhost:5000/api/uploads/property",newProperty)
        .then((response) => {
            dispatch(addNewProperty(newProperty));
            alert("The Property is successfully uploaded");
        }).catch((error) => {
    });
};
export const fetchProperties = ()=>dispatch =>{
    axios.get("http://localhost:5000/api/property/all")
        .then((response) => {
            dispatch(addProperties(response));
        }).catch((error) => {
    });
};
export const addNewProperty=(property)=>({
    type: ADD_PROPERTY,
    payload: property
});
export const addProperties=(properties)=>({
    type:ADD_PROPERTIES,
    payload: properties
});
export const addImageToServer= ( image ) => dispatch =>{
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("http://localhost:5000/api/uploads/image",image,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });
};