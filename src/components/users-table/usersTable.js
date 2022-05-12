import {Button, Table} from 'react-bootstrap';
import React from 'react'
import EditHoursModal from './modals/EditHoursModal';


export default function UsersTable() {
  
      
     return  <div class="scrollme mt-3" style={{maxHeight:'230px'}}> 
     <h3 className="fw-bold mt-3 fs-5 bg-white py-3 px-3" style={{marginBottom:'-1px', margin:'0 1.5px'}}>Table h3</h3>
      <Table  bordered hover size="sm" className='rounded' >
        
     <thead>
       <tr>
         <th>Przerwa</th>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Username</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>
         <Button variant="info mx-2 my-2 px-2 py-1" href="auth"> <i class="fa-solid fa-pause text-white me-2 "></i>Przerwa </Button>
         </td>
    
         <td className='fw-bold text-warning '>    <i className="fa-solid fa-pen me-2 fa-lg  text-warning" style={{marginTop:'10px'}}></i>Mark</td>
         <td>Otto</td>
         <td>
        <EditHoursModal/>
       
       
         <Button variant="success my-2 mx-2"> <i class="fa-solid fa-arrow-right-from-bracket text-white"></i> Wyloguj </Button>
         </td>
       </tr>
       <tr>
        <td>
        <Button variant="danger my-2">
       
       <p style={{marginBottom:'-5px'}}>23 min na przerwie</p>  
       <i class="fa-solid fa-play me-2  text-white"></i>   Wróć z przerwy </Button>
        </td>
   
         <td className='fw-bold '>Jacob</td>
         <td>Thornton</td>
         <td>
         <EditHoursModal/>
         <Button variant="success mx-2 my-2"> <i class="fa-solid fa-arrow-right-from-bracket text-white"></i> Wyloguj </Button>
        
         </td>
       </tr>
       
     </tbody>
   </Table></div>
      
}


