import React, { useState } from 'react';
import Metric from './components/Metric';
import US from './components/US';
import './App.css'

// Metric Measurements
interface Metric {
  heightInCentimetres: number,
  weightInKilos: number,
  age: number
}

// US measurements
interface US {
  heightInFeet: number,
  heightInInches: number,
  weightInPounds: number,
  age: number
}

const App = () => {
  const [changeMeasurement, setChangeMeasurement] = useState<boolean>(true);
  const [result, setResult] = useState<string>('')

  // Metric measurement state 
  const [metricMeasurement, setMetricMeasurement] = useState<Metric>({
    heightInCentimetres: 0,
    weightInKilos: 0,
    age: 0,
  });

  // US measurement state
  const [usMeasurement, setUsMeasurement] = useState<US>({
    heightInFeet: 0,
    heightInInches: 0,
    weightInPounds: 0,
    age: 0
  });

  const handleChange = () => {
    setChangeMeasurement(!changeMeasurement);
  };

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();

    let weight, height, age;

    if (changeMeasurement) {
      weight = metricMeasurement.weightInKilos;
      height = metricMeasurement.heightInCentimetres;
      age = metricMeasurement.age;
    } else {
      weight = (usMeasurement.weightInPounds ?? 0);
      height = (usMeasurement.heightInFeet ?? 0) * 30.48 + (usMeasurement.heightInInches ?? 0) * 2.58;
      // Could also use "height = usMeasurement.heightInFeet! * 30.48 + usMeasurement.heightInInches! * 2.54;""
      age = usMeasurement.age
    }

    if (weight === 0 || height === 0) {
      alert('A valid number is required for calculation');
    } else {
      const result = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      setResult(result.toFixed(1));
    };
  };

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>,
    measurementType: "metric" | "us"
  ) => {
    const { name, value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      measurementType === "metric" ? 
      setMetricMeasurement((prev) => ({ ...prev, [name]: Number(value) })) :
      setUsMeasurement((prev) => ({ ...prev, [name]: Number(value)}))
    } else {
      setMetricMeasurement((prev) => ({ ...prev, [name]: "" }))
      setUsMeasurement((prev) => ({ ...prev, [name]: "" }))
    }
  };

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
          {changeMeasurement ? (
            <Metric 
              metricMeasurement={metricMeasurement} 
              setMetricMeasurement={setMetricMeasurement} 
              handleNumericInput={handleNumericInput}
            />
          ) : (
            <US 
              usMeasurement={usMeasurement} 
              setUsMeasurement={setUsMeasurement} 
              handleNumericInput={handleNumericInput}
            />
          )}
        </form>
        <div>
          <p>{result}</p>
        </div>
      </div>
    </div>
  )
}

export default App
