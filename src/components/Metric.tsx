import React, { useState } from "react";

interface Measurement {
  height: number
  weight: number
  age: number
}

const Metric = () => {
  const [gender, setGender] = useState(false);
  const [measurement, setMeasurement] = useState<Measurement>({
    height: 0,
    weight: 0,
    age: 0,
  })

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setMeasurement((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setMeasurement((prev) => ({ ...prev, [name]: "" }));
    }
  }

  /*
  let calculate = (e: any) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('A valid number must be entered to proceed with calculation')
    } else {
      let result = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    }
  } */

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
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          placeholder="cm"
          type='text'
          value={measurement.height || ''}
          onChange={handleNumericInput}
        />
      </div>
      <div className='flex gap-0'>
        {/* WEIGHT INPUT */}
        <p className='relative top-5'>Weight</p>
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          placeholder="kg"
          type='number'
          value={measurement.weight || ''}
          onChange={handleNumericInput}
        />
      </div>
      <div className='flex gap-6'>
        {/* AGE INPUT */}
        <p className='relative top-5'>Age</p>
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          type='number'
          value={measurement.age || ''}
          onChange={handleNumericInput}
        />
      </div>
    </form>
  )
}

export default Metric