import React, { useState, useEffect } from 'react'
import { CustomInput } from 'reactstrap'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'

import { fetchPrediction, fetchProduction } from '../../redux/graphs/actions'

function ProductionUI(props) {
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])
  const [data, setData] = useState({})

  const [predictionLabels, setPredictionLabels] = useState([])
  const [predictionValues, setPredictionValues] = useState([])
  const [predictionToggler, setPredictionToggler] = useState(false)
  const [predictionTime, setPredictionTime] = useState(4)

  useEffect(() => {
    props.fetchProduction()
  }, [])

  useEffect(() => {
    setValues(props.values)
    setLabels(props.labels)
  }, [props.labels, props.values])

  useEffect(() => {
    setPredictionLabels(props.predictionLabels)
    setPredictionValues(props.predictionValues)
  }, [props.predictionLabels, props.predictionValues])

  const pink = 'rgb(255, 99, 132)'
  const blue = 'rgb(30,144,255)'

  useEffect(() => {
    if (predictionToggler && predictionLabels !== undefined) {
      setData({
        labels: labels?.concat(predictionLabels),
        datasets: [
          {
            label: 'Watts',
            backgroundColor: pink,
            borderColor: pink,
            data: values,
          },
          {
            label: 'Prediction Watts',
            backgroundColor: blue,
            borderColor: blue,
            data: values.concat(predictionValues),
          },
        ],
      })
    } else {
      setData({
        labels: labels,
        datasets: [
          {
            label: 'Watts',
            backgroundColor: pink,
            borderColor: pink,
            data: values,
          },
        ],
      })
    }
  }, [values, labels, predictionValues, predictionLabels, predictionToggler])

  const handleOnChange = (e) => {
    if (predictionToggler) {
      setPredictionTime(e.target.value)
      props.fetchPrediction(e.target.value)
    }
  }

  const handlePredictionToggler = (e) => {
    setPredictionToggler(!predictionToggler)
    if (!predictionToggler) props.fetchPrediction(predictionTime)
  }

  return (
    <div className="container consumption-page">
      <div className="row">
        <div className="col-md-7 border ml-auto">
          <h3 className="text-center my-3">Solar Power</h3>
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
          <div className="w-75 mx-auto h5">
            <CustomInput
              className="mt-5"
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
              label="Predictive Data"
              value={predictionToggler}
              onChange={handlePredictionToggler}
            />
            <CustomInput
              className="mt-5"
              type="select"
              id="exampleCustomSelect"
              name="customSelect"
              disabled={predictionToggler ? false : true}
              onChange={handleOnChange}
            >
              <option value="1">1 Hour</option>
              <option value="2">2 Hours</option>
              <option value="3">3 Hours</option>
              <option selected value="4">
                4 Hours
              </option>
            </CustomInput>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

const mapStateToProps = (state) => ({
  labels: state.graphs.production.labels,
  values: state.graphs.production.values,
  predictionValues: state.graphs.prediction.values,
  predictionLabels: state.graphs.prediction.labels,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduction: () => dispatch(fetchProduction()),
  fetchPrediction: (hours) => dispatch(fetchPrediction(hours)),
})

export const ProductionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductionUI)
