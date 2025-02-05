import React from "react";

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

const Metric: React.FC<MetricProps> = ({ metricMeasurement, handleNumericInput }) => {

  return (
    <div className='mt-5'>
      <div className='flex ml-0.5'>
        {/* HEIGHT INPUT */}
        <label className='relative top-5 right-1'>Height</label>
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
          name="heightInCentimetres"
          placeholder="cm"
          type='text'
          value={metricMeasurement.heightInCentimetres || ''}
          onChange={(e) => handleNumericInput(e, "metric")}
        />
      </div>
      <div className='flex gap-0'>
        {/* WEIGHT INPUT */}
        <label className='relative top-5 right-0.5'>Weight</label>
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
          name="weightInKilos"
          placeholder="kg"
          type='text'
          value={metricMeasurement.weightInKilos || ''}
          onChange={(e) => handleNumericInput(e, "metric")}
        />
      </div>
      <div className='flex gap-6'>
        {/* AGE INPUT */}
        <label className='relative top-5'>Age</label>
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
          name="age"
          placeholder="ages 16 - 80"
          type='text'
          value={metricMeasurement.age || ''}
          onChange={(e) => handleNumericInput(e, "metric")}
        />
      </div>
    </div>
  )
}

export default Metric