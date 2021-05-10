import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class Introduction extends Component{
    render(){
        return (
              <Jumbotron className="p-5">
                <h1 className="display-3">Welcome</h1>
                <p className="lead">On this site you can view the energy grid.</p>
                <p className="lead">
                  <Button color="primary">Get started</Button>
                </p>
              </Jumbotron>
          );
    }
}