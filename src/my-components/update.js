import React from 'react';
import axios from 'axios'; // import for http client

export class Update extends React.Component {


    constructor() {
        super();
        this.onChangeCarName = this.onChangeCarName.bind(this); // when element changes
        this.onChangeCarYear = this.onChangeCarYear.bind(this);
        this.onChangeCarPoster = this.onChangeCarPoster.bind(this);  // new function when this keyword is called
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Model: '',
            Year: '',
            Poster: ''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id); // passes into every route the is rendered

        axios.get('http://localhost:4000/api/cars/'+this.props.match.params.id) // api for cars
        .then(response => {
            this.setState({  // function
                _id:response.data._id,
                Model:response.data.model,
                Year:response.data.year,
                Poster:response.data.poster    
            })
        })
        .catch((error)=>{
            console.log(error); // catch error
        })
    }
    onChangeCarName(e) {
        this.setState({   // function for model
            Model: e.target.value
        });
    }
    onChangeCarYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    onChangeCarPoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }
    onSubmit(e) {  // event
        e.preventDefault();
        alert("Car: " + this.state.Model + " "  // pop up
        + this.state.Year + " "+
        this.state.Poster);
        
        const newCar = {
            model: this.state.Model,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id  // new car details

        }
       axios.put('http://localhost:4000/api/cars/'+this.state._id, newCar)  // new car in cars
       .then(res =>{
           console.log(res.data)
       })
       .catch()
        
    }
    render() {
        return (
            <div className="App">
                <h2>Enter Car Details</h2>
                <style>{'body { background-color: grey; }'}</style>  
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Make: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Model}
                            onChange={this.onChangeCarName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Year: </label> 
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeCarYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Image: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeCarPoster} 
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Ad" className="btn btn-success" /> 
                    </div>
                </form>
            </div>
        );
    }
}
