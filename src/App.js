import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Header } from './my-components/header';
import { Footer } from './my-components/footer';
import { Ads } from './my-components/ads';
import { New } from './my-components/new';   
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './content';
import { Navbar, Nav } from 'react-bootstrap';

// imports 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Update } from './my-components/update';

// extends to pass to a class 
class App extends Component {
  render() {
    return (
      <Router>

      
        <div className="App">  

          {/* nav bar */}

          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">AA CAR SALES</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link> 
                <Nav.Link href="/new">Place Ad</Nav.Link>
                <Nav.Link href="/ads">Ads</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>
              </Nav>
          </Navbar>

          <br />

      {/* routes */}

          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/new' component={New} exact />
            <Route path='/ads' component={Ads} exact />
            <Route path='/reviews' component={Footer} exact />
            <Route path ='/update/:id' component={Update} exact/>
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
