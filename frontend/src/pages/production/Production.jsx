import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../css/style.css';

export default function Production(props) {

    return (
        <div className="production-page container">
            <div class="row">
                <div className="col-3 filter bg-light">
                    <h2 className="m-1">Filter</h2>
                    <Form className="m-1 productionForm">
                        <FormGroup>
                            <Label for="hours">Hours</Label>
                            <Input type="email" name="email" id="hours" className="border border-1 rounded" placeholder="Hours to show" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="time">Time</Label>
                            <Input type="text" name="time" id="time" className="border border-1 rounded" placeholder="Time"/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" id="prediction" className="border border-1 rounded" />{' '}
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