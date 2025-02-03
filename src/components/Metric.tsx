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
  const [gender, setGender] = useState<"male" | "female">("male");

  return (
    <div className='mt-5'>
      <div className='flex justify-center gap-10 scale-150'>
        <div className='gap-2'>
          <p className='relative top-2.5 text-xs'>Male</p>
          <input 
            name='male'
            checked={gender === "male"} 
            className='bg-slate-100 border h-10 border-slate-300 cursor-pointer' 
            type='checkbox'
            onChange={() => setGender("male")}
          />
        </div>
        <div className='gap-2'>
          <p className='relative top-2.5 text-xs'>Female</p>
          <input 
            name='female' 
            checked={gender === "female"} 
            className='bg-slate-100 border h-10 border-slate-300 cursor-pointer' 
            type='checkbox'
            onChange={() => setGender("female")}
          />
        </div>
      </div>
      <div className='flex ml-0.5'>
        {/* HEIGHT INPUT */}
        <label className='relative top-5 right-1'>Height</label>
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
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
        <label className='relative top-5 right-0.5'>Weight</label>
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
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
        <label className='relative top-5'>Age</label>
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
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