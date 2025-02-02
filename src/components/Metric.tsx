import React, { useState } from "react";

// Type props for metric measurements
type MetricProps = {
  metricMeasurement: {
    heightInCentimetres: number;
    weightInKilos: number;
    age: number;
  };
  setMetricMeasurement: React.Dispatch<
    React.SetStateAction<{
      heightInCentimetres: number;
      weightInKilos: number;
      age: number;
    }>
  >
  handleNumericInput: (e: React.ChangeEvent<HTMLInputElement>, measurementType: "metric" | "us") => void;
}

const Metric: React.FC<MetricProps> = ({ metricMeasurement, setMetricMeasurement, handleNumericInput }) => {
  const [gender, setGender] = useState(false);

  return (
    <div className='mt-5'>
      <div className='flex justify-center gap-10 scale-150'>
        <div className='gap-2'>
          <p className='relative top-2.5 text-xs'>Male</p>
          <input 
            name='male'
            checked={gender === false} 
            className='bg-slate-100 border h-10 border-slate-300 cursor-pointer' 
            type='checkbox'
            onChange={() => setGender(Boolean(false))}
          />
        </div>
        <div className='gap-2'>
          <p className='relative top-2.5 text-xs'>Female</p>
          <input 
            name='female' 
            checked={gender === true} 
            className='bg-slate-100 border h-10 border-slate-300 cursor-pointer' 
            type='checkbox'
            onChange={() => setGender(Boolean(true))}
          />
        </div>
      </div>
      <div className='flex gap-1'>
        {/* HEIGHT INPUT */}
        <p className='relative top-5'>Height</p>
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          placeholder="cm"
          type='text'
          value={metricMeasurement.heightInCentimetres || ''}
          onChange={(e) => {
            setMetricMeasurement({
              ...metricMeasurement,
              heightInCentimetres: Number(e.target.value)
            });
            handleNumericInput(e, "metric");
          }}
        />
      </div>
      <div className='flex gap-0'>
        {/* WEIGHT INPUT */}
        <p className='relative top-5'>Weight</p>
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          placeholder="kg"
          type='text'
          value={metricMeasurement.weightInKilos || ''}
          onChange={(e) => {
            setMetricMeasurement({
              ...metricMeasurement,
              weightInKilos: Number(e.target.value)
            })
            handleNumericInput(e, "metric")
          }}
        />
      </div>
      <div className='flex gap-6'>
        {/* AGE INPUT */}
        <p className='relative top-5'>Age</p>
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          type='text'
          value={metricMeasurement.age || ''}
          onChange={(e) => {
            setMetricMeasurement({
              ...metricMeasurement,
              age: Number(e.target.value)
            })
            handleNumericInput(e, "metric")
          }}
        />
      </div>
    </div>
  )
}

export default Metric