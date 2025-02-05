import React from 'react';

type ResultProps = {
  baseBmr: string;
  activityLevel: { level: string; adjustedBmr: string }[];
}

const Result: React.FC<ResultProps> = ({ baseBmr, activityLevel }) => {
  let reload = () => {
    window.location.reload();
  }
  return (
    <>
      <div className='mt-6 mb-5 block justify-center gap-20 md:flex text-center'>
        <div>
          <p className='text-black text-3xl pt-4 mb-4 md:pt-16'>
            <span className='text-green-600 font-bold mr-1'>{baseBmr}</span>
              Kcal per day
          </p>
        </div>
        <div className='block text-center md:text-left'>
          {activityLevel.map(({ level, adjustedBmr }) => (
            <p key={level} className='mt-2'>
              {level}
              <span className='text-green-600 ml-1 '>{adjustedBmr}</span> kcal
            </p>
          ))}
        </div>
      </div>
      <button className='mt-7 bg-blue-100 p-2 px-4 rounded active:scale-95' onClick={reload} type="submit">Reload</button>
    </>
  )
}

export default Result