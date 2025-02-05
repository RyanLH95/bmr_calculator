import React from 'react';

// type props for US measurement
type USProps = {
  usMeasurement: {
    heightInFeet: number;
    heightInInches: number;
    weightInPounds: number;
    age: number;
  };
  setUsMeasurement: React.Dispatch<
    React.SetStateAction<{
      heightInFeet: number;
      heightInInches: number;
      weightInPounds: number;
      age: number;
    }>
  >
  handleNumericInput: (e: React.ChangeEvent<HTMLInputElement>, measurementType: "metric" | "us") => void;
}

const US: React.FC<USProps> = ({ usMeasurement, handleNumericInput }) => {

  return (
    <div className='mt-5'>
      <div className='w-full'>
        {/* HEIGHT INPUT */}
        <div className='flex ml-0.5'>
        <label className='relative top-5 right-1'>Height</label>
        {/* (feet) */}
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
          name='heightInFeet'
          placeholder="ft"
          type='text'
          value={usMeasurement.heightInFeet || ''}
          onChange={(e) => handleNumericInput(e, "us")}
        />
        {/* (Inches) */}
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
          name='heightInInches'
          placeholder="inches"
          type='text'
          value={usMeasurement.heightInInches || ''}
          onChange={(e) => handleNumericInput(e, "us")}
        />
        </div>
      </div>
      <div className='flex gap-0'>
        {/* WEIGHT INPUT */}
        <label className='relative top-5 right-0.5'>Weight</label>
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
          name='weightInPounds'
          placeholder="lbs"
          type='text'
          value={usMeasurement.weightInPounds || ''}
          onChange={(e) => handleNumericInput(e, "us")}
        />
      </div>
      <div className='flex gap-6'>
        {/* AGE INPUT */}
        <label className='relative top-5'>Age</label>
        <input 
          className='m-3 bg-slate-100 border w-full h-10 border-slate-300 rounded pl-1' 
          name='age'
          placeholder="ages 16 - 80"
          type='text'
          value={usMeasurement.age || ''}
          onChange={(e) => handleNumericInput(e, "us")}
        />
      </div>
    </div>
  )
}

export default US