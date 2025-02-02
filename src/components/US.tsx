import React, { useState } from 'react';

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
}

const US: React.FC<USProps> = ({ usMeasurement, setUsMeasurement }) => {
  const [gender, setGender] = useState<boolean>(false);

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
          value={usMeasurement.heightInFeet}
          onChange={(e) => {
            setUsMeasurement({
              ...usMeasurement,
              heightInFeet: Number(e.target.value)
            })
          }}
        />
        {/* (Inches) */}
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          name='heightInches'
          placeholder="inches"
          type='text'
          value={usMeasurement.heightInInches}
          onChange={(e) => {
            setUsMeasurement({
              ...usMeasurement,
              heightInInches: Number(e.target.value)
            })
          }}
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
          value={usMeasurement.weightInPounds}
          onChange={(e) => {
            setUsMeasurement({
              ...usMeasurement,
             weightInPounds: Number(e.target.value)
            })
          }}
        />
      </div>
      <div className='flex gap-6'>
        {/* AGE INPUT */}
        <p className='relative top-5'>Age</p>
        <input 
          className='m-3 bg-slate-100 border w-4/5 h-10 border-slate-300 rounded pl-1' 
          name='age'
          type='text'
          value={usMeasurement.age}
          onChange={(e) => {
            setUsMeasurement({
              ...usMeasurement,
             age: Number(e.target.value)
            })
          }}
        />
      </div>
    </form>
  )
}

export default US