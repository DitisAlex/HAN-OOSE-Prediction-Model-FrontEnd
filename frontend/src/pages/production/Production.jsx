import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../css/style.css';

export default function Production(props) {

    return (
        <div className="production-page">
            <div class="row">
                <div className="col-3 filter">
                    <h2>Filter</h2>
                    <Form className="productionForm">
                        <FormGroup>
                            <Label for="hours">Hours</Label>
                            <Input type="email" name="email" id="hours" placeholder="Hours to show" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="time">Time</Label>
                            <Input type="text" name="time" id="time" placeholder="Time"/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" id="prediction" />{' '}
                            Prediction
                            </Label>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
                <div className="col-9 energyContainer">
                    <h1>Energy production</h1>
                    <p>Welcome</p>
                </div>
            </div>
        </div>
    )
}