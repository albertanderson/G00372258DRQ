import React from 'react';
import axios from 'axios'; // promise for http client

export class New extends React.Component {

// constructor
    constructor() {
        super();
        this.onChangeCarName = this.onChangeCarName.bind(this);  // selected values
        this.onChangeCarYear = this.onChangeCarYear.bind(this);
        this.onChangeCarPoster = this.onChangeCarPoster.bind(this);
        this.onSubmit = this.onSubmit.bind(this); // creates onSubmint when called
        this.state = {
            Model: '',
            Year: '',
            Poster: ''
        }
    }
    onChangeCarName(e) {
        this.setState({
            Model: e.target.value // search input
        });
    }
    onChangeCarYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    onChangeCarPoster(e) {
        this.setState({ // class constructor
            Poster: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        alert("Car: " + this.state.Model + " "  // text box for info added
            + this.state.Year + " " +
            this.state.Poster);

        const newCar = {
            model: this.state.Model,
            year: this.state.Year,
            poster: this.state.Poster  // new car details desplayed

        }
        axios.post('http://localhost:4000/api/cars/', newCar)
            .then((res) => {
                console.log(res)

            })
            .catch((err) => {
                console.log(err)
            })
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
                            className="form-control"  // wraps with proper spacing
                            value={this.state.Poster}
                            onChange={this.onChangeCarPoster} // excutes when select option changes
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Car" className="btn btn-success" />  
                    </div>
                </form>
            </div>
        );
    }
}
