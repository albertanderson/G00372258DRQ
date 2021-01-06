import React from 'react';
import {CarType} from './cartype';
import '../App.css';


export class Cars extends React.Component{

    render(){
        return this.props.cars.map( (car)=>{  //map breaks them apart
            return <CarType key={car._id} car={car} ReloadData={this.props.ReloadData}></CarType>

        })
            

    }
}