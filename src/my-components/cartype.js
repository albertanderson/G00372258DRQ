import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';   //change url
import Button from 'react-bootstrap/Button'; // delete button
import axios from 'axios';

export class CarType extends React.Component {

    constructor(){
        super();

        this.DeleteCar = this.DeleteCar.bind(this);  // function when called deletes
    }

    DeleteCar(e){
        e.preventDefault(); //stops multiple deletes
        console.log("Delete: "+this.props.car._id); // log car id to console
        
        axios.delete("http://localhost:4000/api/cars/"+this.props.car._id)
        .then(()=>{
            this.props.ReloadData()  // reloads data
        })
        .catch();

    }

    render() {
        return (
            <div>
                 <style>{'body { background-color: grey; }'}</style>  
                <Card>
                    <Card.Header>{this.props.car.model}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.car.poster} width="400" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.car.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/update/"+ this.props.car._id} className="btn btn-success" >Update</Link>
               <Button variant="danger" onClick={this.DeleteCar}size="sm">Delete</Button> 
                </Card>

            </div>

        );
    }
}