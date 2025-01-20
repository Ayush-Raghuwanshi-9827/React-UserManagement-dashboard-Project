import React from 'react'
import Dashboard from '../Components/Dashboard'

const HomePage = () => {
  return (
   <>
   <div className='mx-[10%] h-full w-[80%] bg-slate-200
   rounded shadow-[1px 2px 10px rgba(0, 0, 0, 0.2)]
    border-gray-500 '>
    <div className='
    mt-5 p-5  flex flex-col items-center  justify-center
   
    '>
      <h1 className='
       text-4xl 
       font-bold  '>Welcome to User Details  Dashboard</h1>
    </div>
    
   
    <div className=''>
     <Dashboard/>
    </div>
    </div>

   </>
  )
}

export default HomePage