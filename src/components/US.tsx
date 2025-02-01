import React, { useState } from 'react';

interface Measurement {
  heightFeet: number
  heightInches: number
  weight: number
  age: number
}

const US = () => {
  const [gender, setGender] = useState<boolean>(false);
  const [measurement, setMeasurement] = useState<Measurement>({
    heightFeet: 0,
    heightInches: 0,
    weight: 0,
    age: 0
  })

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setMeasurement((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setMeasurement((prev) => ({ ...prev, [name]: "" }));
    }
    console.log(Number(""))
  };

  return (
    <form className='mt-5'>
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
        {/* (feet) */}
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          name='heightFeet'
          placeholder="ft"
          type='text'
          value={measurement.heightFeet || ''}
          onChange={handleNumericInput}
        />
        {/* (Inches) */}
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          name='heightInches'
          placeholder="inches"
          type='text'
          value={measurement.heightInches || ''}
          onChange={handleNumericInput}
        />
      </div>
      <div className='flex gap-0'>
        {/* WEIGHT INPUT */}
        <p className='relative top-5'>Weight</p>
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          name='weight'
          placeholder="lbs"
          type='text'
          value={measurement.weight || ''}
          onChange={handleNumericInput}
        />
      </div>
      <div className='flex gap-6'>
        {/* AGE INPUT */}
        <p className='relative top-5'>Age</p>
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          name='age'
          type='text'
          value={measurement.age || ''}
          onChange={handleNumericInput}
        />
      </div>
    </form>
  )
}

export default US