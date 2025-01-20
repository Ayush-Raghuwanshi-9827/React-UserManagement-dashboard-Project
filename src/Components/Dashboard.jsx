import React from 'react'
import UserList from './UserList'
import Summary from './Summary'


const Dashboard = () => {
  return (
    <>
     <div>
      <div className="container mx-auto p-2">
        <Summary />
        <UserList />
      </div>
    </div>
   
    
    </>
  )
}

export default Dashboard