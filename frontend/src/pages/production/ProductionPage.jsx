import React, { useState, useEffect } from 'react'
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
    <div className="production-page">
      <h1 className="text-center mt-5">Energie Production</h1>
      <div className="d-flex flex-row">
        <div>
          <div className="w-75 border mx-auto my-5">
            <Line data={data} width={100} height={50} />
          </div>
          <div className="w-75 border mx-auto my-5">
            <h3 className="text-center my-3">V1</h3>
            <img
              className="w-100"
              src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
              alt=""
            ></img>
          </div>
          <div className="w-75 border mx-auto my-5">
            <h3 className="text-center my-3">V1</h3>
            <img
              className="w-100"
              src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
              alt=""
            ></img>
          </div>
        </div>
        <div>
          <div className="w-75 border mx-auto my-5">
            <h3 className="text-center my-3">V1</h3>
            <img
              className="w-100"
              src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
              alt=""
            ></img>
          </div>
          <div className="w-75 border mx-auto my-5">
            <h3 className="text-center my-3">V1</h3>
            <img
              className="w-100"
              src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
              alt=""
            ></img>
          </div>
          <div className="w-75 border mx-auto my-5">
            <h3 className="text-center my-3">V1</h3>
            <img
              className="w-100"
              src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
              alt=""
            ></img>
          </div>
        </div>
        <div>
          <div className="w-75 border mx-auto my-5">
            <h3 className="text-center my-3">V1</h3>
            <img
              className="w-100"
              src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
              alt=""
            ></img>
          </div>
          <div className="w-75 border mx-auto my-5">
            <h3 className="text-center my-3">V1</h3>
            <img
              className="w-100"
              src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
              alt=""
            ></img>
          </div>
          <div className="w-75 border mx-auto my-5">
            <h3 className="text-center my-3">V1</h3>
            <img
              className="w-100"
              src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
              alt=""
            ></img>
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
