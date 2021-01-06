import React from 'react';
import Image from 'react-bootstrap/Image'
import { Cars } from './cars';
import axios from 'axios';  // http client for browser

export class Ads extends React.Component {

    constructor() {
        super(); // call constructor

        this.ReloadData = this.ReloadData.bind(this)  // reloads the data
    }
    state = {
        cars: []
    }

    // executes after render
    componentDidMount() {  
        axios.get('http://localhost:4000/api/cars')
            .then(response => {
                this.setState({ cars: response.data });  // returns a promise
            })
            .catch((error) => {
                console.log(error)
            })
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/cars') // link to cars api
            .then(response => {
                this.setState({ cars: response.data });
            })
            .catch((error) => {
                console.log(error)  // catches the error
            })

    }

    render() {
        return (
            <div>
                <h1>AA CAR SALES</h1>
                <Cars cars={this.state.cars} ReloadData={this.ReloadData}></Cars>

            </div>
        );
    }
}