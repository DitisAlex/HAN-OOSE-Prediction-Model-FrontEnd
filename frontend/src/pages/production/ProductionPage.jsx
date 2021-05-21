import React, { useState, useEffect } from 'react'
import { CustomInput } from 'reactstrap'
import { connect } from 'react-redux'
import { Chart, Line } from 'react-chartjs-2'

import { fetchProduction, setHours } from '../../redux/graphs/actions'

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

  const handleOnChange = (e) => {
    props.setHours(e.target.value)
  }

  return (
    <div className="consumption-page">
      <div className="d-flex flex-row my-5">
        <div className="w-50 border ml-auto mr-5">
          <h3 className="text-center my-3">Energy Production</h3>

          <div className="w-75 border mx-auto my-5">
            <Line data={data} width={100} height={50} />
          </div>
        </div>
        <div className="w-25 border ml-5 mr-auto">
          <h3 className="text-center my-3">Settings</h3>
          <hr />
          <div className="w-75 mx-auto h5">
            <CustomInput
              className="mt-5"
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
              label="Predictive Data"
            />
            <CustomInput
              className="mt-5"
              type="select"
              id="exampleCustomSelect"
              name="customSelect"
              onChange={handleOnChange}
              value="4"
            >
              <option value="1">1 Hour</option>
              <option value="2">2 Hours</option>
              <option value="3">3 Hours</option>
              <option value="4">4 Hours</option>
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
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduction: () => dispatch(fetchProduction()),
  setHours: (hours) => dispatch(setHours(hours)),
})

export const ProductionPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductionUI)
