import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'

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
          label: 'Watts',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: values,
        },
      ],
    })
  }, [values, labels])

  return (
    <div className="container consumption-page">
      <div className="row">
        <div className="col-md-7 border ml-auto">
          <h3 className="text-center my-3">EV Power</h3>
          <div>
            {(() => {
              if (data.labels == undefined || data.labels.length < 1) {
                return <div className="w-75 mx-auto">No data found</div>
              }
            })()}
          </div>
          <div className="w-75 border mx-auto my-5">
            <Line data={data} width={100} height={50} />
          </div>
        </div>
        <div className="col-md-4 mr-auto border">
          <h3 className="text-center my-3">Settings</h3>
          <hr />
        </div>
      </div>
      <hr />
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
