import React from 'react'
import AddEmployerModal from '../../components/add-employer-modal'
import EditHoursModal from '../../components/edit-hours-modal/editHoursModal'
import Navigation from '../../components/navigation'
import UsersTable from '../../components/users-table'

export default function Main() {
  return (
    <>
    {/* <AddEmployerModal/> */}
      {/* <EditHoursModal/> */}
     
    <div className='mt-2'>
    <Navigation/>
    <Navigation/>
    </div>
   
    <UsersTable/>
    <UsersTable/>
  
    </>
  )
}
