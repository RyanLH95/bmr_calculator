import React, { useState } from 'react';
import Metric from './components/Metric';
import US from './components/US';
import './App.css'
import Result from './components/Result';

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

type ResultType = {
  baseBmr: string,
  activityLevel: { level: string; adjustedBmr: string}[]
} | null;

type MeasurementType = "metric" | "us";

const App = () => {
  const [changeMeasurement, setChangeMeasurement] = useState<MeasurementType>("metric");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState<ResultType>(null)
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

  const activityMultipliers: Record<string, number> = {
    "Sendetary:": 1.2,
    "Lightly active:": 1.375,
    "Moderately active:": 1.55,
    "Very active:": 1.725,
    "Extra active:": 1.9,
  }

  const handleChange = (measurementType: "metric" | "us") => {
    setChangeMeasurement(measurementType);
  };

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();

    let weight, height, age;

    if (changeMeasurement === "metric") {
      weight = metricMeasurement.weightInKilos;
      height = metricMeasurement.heightInCentimetres;
      age = metricMeasurement.age;
    } else {
      weight = usMeasurement.weightInPounds / 2.20462;
      height = (usMeasurement.heightInFeet ?? 0) * 30.48 + (usMeasurement.heightInInches ?? 0) * 2.54;
      // Could also use "height = usMeasurement.heightInFeet! * 30.48 + usMeasurement.heightInInches! * 2.54;"
      age = usMeasurement.age;
    }

    if (weight === 0 || height === 0) {
      setResult(null)
    } else {
      const bmr = gender === "male"
      ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
      : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
     
      const activityLevelResults = Object.keys(activityMultipliers).map((level) => {
        return {
          level,
          adjustedBmr: (bmr * activityMultipliers[level as keyof typeof activityMultipliers]).toFixed(0)
        };
      });
      setResult({
        baseBmr: bmr.toFixed(0),
        activityLevel: activityLevelResults,
      });
    };
  };

  const handleNumericInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    measurementType: "metric" | "us"
  ) => {
    const { name, value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      if (measurementType === "metric") { 
        setMetricMeasurement((prev) => ({ ...prev, [name]: Number(value) }))
      } else {
        setUsMeasurement((prev) => ({ ...prev, [name]: Number(value) }))
      }
    }
  };  

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-designColour'>
      <div className='bg-white shadow-lg rounded p-10 h-screen w-5/6 text-center shadow-emerald-300 overflow-auto lg:w-2/4'>
        <p className='text-3xl font-bold no-underline text-black'>
          BMR Calculator
        </p>
        <form id='bmr-form' onSubmit={calculate}>
          {/* MEASUREMNT BUTTONS */}
          <div className='flex gap-10 justify-center mt-5 relative'>
            <button 
              className='bg-blue-100 p-2 rounded active:scale-95'
              onClick={() => handleChange("metric")}
            >
              Metric
            </button>
            <button 
              className='bg-blue-100 p-2 px-5 rounded active:scale-95' 
              onClick={() => handleChange("us")}
            >
              US
            </button>
          </div>
          {/* GENDER */}
          <div className='mt-5 flex justify-center gap-10 scale-150'>
            <div className='gap-2 flex'>
              <label className='relative top-2.5 text-xs'>Male</label>
              <input 
                name='male'
                checked={gender === "male"} 
                className='bg-slate-100 border h-10 border-slate-300 cursor-pointer' 
                type='checkbox'
                onChange={() => setGender("male")}
              />
            </div>
            <div className='gap-2 flex'>
              <label className='relative top-2.5 text-xs'>Female</label>
              <input 
                name='female' 
                checked={gender === "female"} 
                className='bg-slate-100 border h-10 border-slate-300 cursor-pointer' 
                type='checkbox'
                onChange={() => setGender("female")}
              />
            </div>
          </div>
          <p className='mt-3'>
            BMR (Basil Metabolic Rate) is the amount of energy needed while 
            resting to maintain your current your bodyweight. Enter your height, 
            weight and age to find out your BMR today.
          </p>
          {/* BMR FORM */}
          <div className='mt-6'>
            {changeMeasurement === "metric" ? 
              <Metric 
                metricMeasurement={metricMeasurement} 
                setMetricMeasurement={setMetricMeasurement} 
                handleNumericInput={handleNumericInput}
              />
             : 
              <US 
                usMeasurement={usMeasurement} 
                setUsMeasurement={setUsMeasurement} 
                handleNumericInput={handleNumericInput}
              />
            }
          </div>
        </form>
        <div>
          <button 
            onClick={calculate} 
            className='mt-5 bg-blue-100 p-2 px-4 rounded active:scale-95' 
            type="submit"
          >
            Submit
          </button>
          {result ? (
            <Result 
              baseBmr={result.baseBmr}
              activityLevel={result.activityLevel}
            />
          ): null} 
        </div>
        <p className='mt-10 text-blue-600/100 opacity-70'>Using the Harris-Benedict BMR formula</p>
      </div>
    </div>
  )
}

export default App
