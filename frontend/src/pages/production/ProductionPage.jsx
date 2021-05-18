import React from 'react'
import { CustomInput } from 'reactstrap'

export default function ProductionPage(props) {
  return (
    <div className="consumption-page">
      <div className="d-flex flex-row my-5">
        <div className="w-50 border ml-auto mr-5">
          <h3 className="text-center my-3">Energy Production</h3>
          <img
            className="w-100"
            src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png"
            alt=""
          ></img>
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
            >
              <option value="">Prediction Time Ahead</option>
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
