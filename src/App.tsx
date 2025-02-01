import React, { useState } from 'react';
import Metric from './components/Metric';
import US from './components/US';
import './App.css'

type Props = {
  calculate: (e: React.FormEvent) => void;
}

interface Measurement {
  // Metric Measurements
  heightInCm: number,
  weightInKilos: number,
  // US measurements
  heightInFeet: number,
  heightInInches: number,
  weightInPounds: number,
  age: number
}

let calculate = (e: any) => {
  e.preventDefault();

  if (weight === 0 || height === 0) {
    alert('A valid number must be entered to proceed with calculation')
  } else {
    let result = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
  }
} 

const App = ({ calculate }: Props) => {
  const [changeMeasurement, setChangeMeasurement] = useState<boolean>(true);
  const [result, setResult] = useState<string>('')

  // Metric measurement state 
  const [metricMeasurement, setMetricMeasurement] = useState<Measurement>({
    heightInCm: 0,
    weightInKilos: 0,
    age: 0,
  })

  // US measurement state
  const [usMeasurement, setUsMeasurement] = useState<Measurement>({
    heightInFeet: 0,
    heightInInches: 0,
    weightInPounds: 0,
    age: 0
  })

  const handleChange = () => {
    setChangeMeasurement(!changeMeasurement);
  }

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-designColour'>
      <div className='bg-white shadow-lg rounded p-10 h-4/5 w-2/4 text-center shadow-emerald-300'>
        <p className='text-3xl font-bold no-underline text-black'>
          BMR Calculator
        </p>

        <form id='bmr-form' onSubmit={calculate}>
          {/* MEASUREMNT BUTTONS */}
          <div className='flex gap-10 justify-center mt-5 relative'>
            <button 
              className='bg-blue-100 p-2 rounded active:scale-95'
              onClick={handleChange}
            >
              Metric
            </button>
            <button 
              className='bg-blue-100 p-2 px-5 rounded active:scale-95' 
              onClick={handleChange}
            >
              US
            </button>
          </div>
          {/* BMR FORM */}
          {changeMeasurement ? (<Metric {...calculate}/>) : (<US {...calculate}/>)}
        </form>
        <div>
          <p>{result}</p>
        </div>
      </div>
    </div>
  )
}

export default App
