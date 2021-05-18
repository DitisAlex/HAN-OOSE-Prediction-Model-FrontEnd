import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { Chart, Line } from 'react-chartjs-2'

import { fetchProduction } from '../../redux/graphs/actions'

function ProductionUI(props) {
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])

  const [data, setData] = useState({})
  useEffect(() => {
    props.fetchProduction()
  }, [])

  useEffect(() => {
    setValues(props.values)
    setLabels(props.labels)
  }, [props.labels, props.values])

  useEffect(() => {
    setData({
      labels: labels,
      datasets: [
        {
          label: 'Temperature',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: values,
        },
      ],
    })
  }, [values, labels])

  return (
    <div className="production-page container">
      <div class="row">
        <div className="col-3 filter bg-light">
          <h2 className="m-1">Filter</h2>
          <Form className="m-1 productionForm">
            <FormGroup>
              <Label for="hours">Hours</Label>
              <Input
                type="email"
                name="email"
                id="hours"
                className="border border-1 rounded"
                placeholder="Hours to show"
              />
            </FormGroup>
            <FormGroup>
              <Label for="time">Time</Label>
              <Input
                type="text"
                name="time"
                id="time"
                className="border border-1 rounded"
                placeholder="Time"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  id="prediction"
                  className="border border-1 rounded"
                />{' '}
                Prediction
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
        <div className="col-9 energyContainer">
          <h1>Energy production</h1>
          <p>On this page you can see the enrgy production</p>

          <div className="w-75 border mx-auto my-5">
            <Line data={data} width={100} height={50} />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  labels: state.graphs.production.labels,
  values: state.graphs.production.values,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduction: () => dispatch(fetchProduction()),
})

export const ProductionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductionUI)
