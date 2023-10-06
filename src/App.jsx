import { useState } from 'react'
import "./App.css"

export default function App() {
  return (
      <>
      <h1 className="title">BMR Calculator</h1>
        <form className="form">
          <button type="button" className="btn btn-dark us">US Units</button>
          <button type="button" className="btn btn-dark metric">Metric Units</button>
            <div className="bmr-box">
              <h5>Gender</h5>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              </label>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
              </label>
              <h5 className="age">Age</h5>
              <label className="age-box">
                <input type="text" className="box"/>
              </label>
              <div className="metric-unit">
                <h5 className="height">Height</h5>
                <label class="metric-height">
                  <input type="text" className="box"/>
                  cm
                </label>
                <h5 className="weight">Weight</h5>
                <label>
                  <input type="text" className="box"/>
                  kg
                </label>
              </div>
              <div className="us-unit">
                <h5 className="height">Height</h5>
                <label className="us-height">
                  <input type="text" className="box"/>
                  feet
                  <input type="text" className="box"/>
                  inches
                </label>
                <h5 className="weight">Weight</h5>
                <label>
                  <input type="text" className="box"/>
                  lbs
                </label>
              </div>
              <button type="button" className="btn btn-dark calc">Calculate BMR</button>
              <button type="button" className="btn btn-dark clear">Clear</button>
            </div>
        </form>
      </>
  )
}
