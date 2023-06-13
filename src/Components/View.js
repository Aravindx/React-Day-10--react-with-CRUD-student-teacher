import React, { Fragment } from 'react'
import { useParams } from 'react-router'

import { ListGroup } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function View({Student}) {
    const params=useParams();
    const index=Student.findIndex((el)=>el.id==params.id);
    const list=Student[index];
  return (
 <Fragment>
    <Fragment>
<div className="container py-4 h-100 " style={{width:"30rem",marginTop:"80px"}}>
            <div className="row  justify-content-center align-items-center h-100 ">
<ListGroup as="ul" style={{width:"35rem"}}>
    <h1 style={{marginBottom:"30px",textAlign:"center"}}>Student Details</h1>
      <ListGroup.Item  variant="primary" style={{textAlign:"center",fontSize:"22px"}}> {list.name}</ListGroup.Item>
      <ListGroup.Item  style={{ textAlign:"center",  fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"}}>Gender : {list.gender}</ListGroup.Item>
      <ListGroup.Item  style={{ textAlign:"center",  fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"}}>Fathers'name: {list.father}</ListGroup.Item>
      <ListGroup.Item  style={{ textAlign:"center",  fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"}}>Mother's Name: {list.mother}</ListGroup.Item>


      <ListGroup.Item  style={{ textAlign:"center",  fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"}}>DOB: {list.dob}</ListGroup.Item>
      <ListGroup.Item  style={{ textAlign:"center",  fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"}}>Contact Number: {list.num}</ListGroup.Item>
      <ListGroup.Item  style={{ textAlign:"center",  fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"}}> Father's Occupation: {list.job}</ListGroup.Item>

    </ListGroup>
    <Link to="/portal/dashboard">
        <Button variant="primary" style={{margin:"10px",marginLeft:"25rem"}}>Back</Button>
    </Link>
    </div>
    </div>
</Fragment>
 </Fragment>
  )
}

export default View
