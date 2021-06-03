import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Chart, Line } from 'react-chartjs-2'

import { fetchConsumption } from '../../redux/graphs/actions'

function ConsumptionPageUI(props) {
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])

  const [data, setData] = useState({})
  useEffect(() => {
    props.fetchConsumption()
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
    <div className="consumption-page container">
      <h1 className="text-center mt-5 ">EV Power</h1>
        <div className="row my-auto consumptionGraphics">
          <div className="col-md-4 col-11 border mx-auto consGraph">
            <Line data={data} width={100} height={50} />
          </div>
          <div className="col-md-4 col-11 border mx-auto consGraph">
            <Line data={data} width={100} height={50} />
          </div>
          <div className="col-md-4 col-11 border mx-auto consGraph">
            <Line data={data} width={100} height={50} />
          </div>
        </div><br/>
        <div className="row my-auto consumptionGraphics">
        <div className="col-md-4 col-11 border mx-auto consGraph">
            <Line data={data} width={100} height={50} />
          </div>
          <div className="col-md-4 col-11 border mx-auto consGraph">
            <Line data={data} width={100} height={50} />
          </div>
          <div className="col-md-4 col-11 border mx-auto consGraph">
            <Line data={data} width={100} height={50} />
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => ({
  labels: state.graphs.consumption.labels,
  values: state.graphs.consumption.values,
})

const mapDispatchToProps = (dispatch) => ({
  fetchConsumption: () => dispatch(fetchConsumption()),
})

export const ConsumptionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsumptionPageUI)