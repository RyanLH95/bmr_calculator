import { useState } from 'react'
import { BmrMetric } from './BmrMetric.jsx'
import { BmrUs } from './BmrUs.jsx'
import "./App.css"

export default function App() {
  return (
      <>
      <h1 className="title">BMR Calculator</h1>
        <form className="form">
          <button type="button" className="btn btn-dark us" id="us-btn">US Units</button>
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

              <BmrMetric />
              <BmrUs />
              
              <button type="button" className="btn btn-dark calc">Calculate BMR</button>
              <button type="button" className="btn btn-dark clear">Clear</button>
            </div>
        </form>
      </>
  )
}
