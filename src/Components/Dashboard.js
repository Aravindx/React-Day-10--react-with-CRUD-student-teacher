import React from 'react'
import Card from './Card'
import {faBook, faChildReaching, faClipboardCheck, } from '@fortawesome/free-solid-svg-icons';
import Details from '../Details';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Dashboard({Student,setStudent}) {
 
  return (
  <>
   <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-900">Dashboard</h1>
        
                    </div>
                    <div class="row">
                   
                     <Card title="Total Students"  value="6" color="primary" icon={faChildReaching} />
                     <Card title="Total Attendance" value="93%"color="success" icon={faClipboardCheck}/>  
                     <Card title="Total subjects" value="6"color="info" icon={faBook}/>  
              
                            </div>
                            <Link to="/portal/add" >
     <Button style={{marginLeft:'68rem',marginBottom:"5px"}} variant="primary" >Add Student</Button>
     </Link>
                            <Details  Student={Student} setStudent={setStudent}/> 


                           
                    
  </>
  )
}

export default Dashboard
