import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'


function AddStudent({Student,setStudent}) {
    const his=useNavigate();
        const myFormik=useFormik({
            initialValues:{
                id:'',
                name:"",
                gender:"",
                gpa:"",
                dob:"",
                average:"",
                

            },
            validate:(values)=>{
                let errors={}
                if(!values.id){
                    errors.id="Please enter a employee id"
                }
                if(!values.name){
                    errors.name="Please enter a value"
                }
                else if(values.name.length<3){
                    errors.name="Length should be higher than 3"
                }
              
                if(!values.gender){
                    errors.gender="Please enter a Gender"
                }
                if(!values.gpa){
                    errors.gpa="Please enter a Gpa"
                }
              
                if(!values.average){
                    errors.average="Please enter average"
                }
              
                return(errors);
            },
            onSubmit:(values)=>{
                console.log(values)
               setStudent([...Student,values])
            console.log(Student)
               his("/portal/dashboard")
            },
        });

   
  return (
 <>
<div className="container " style={{marginTop:"50px"}}>
   <form onSubmit={myFormik.handleSubmit}> 
   <div className="row">
   <div className="col-lg-4">
            <label>Student Id</label>
            <input name="id" type={""} className= {`form-control  ${  myFormik.errors.id ?"is-invalid" :"is-valid" }` }value={myFormik.values.id}  onChange={myFormik.handleChange}/>
            <span style={{color:"red"}}>{myFormik.errors.id}</span>
        </div>
        <div className="col-lg-4">

            <label> Student Name</label>
            <input  name="name" type={"text"} className={`form-control  ${myFormik.errors.name ?"is-invalid" :"is-valid" }` } value={myFormik.values.name}
             onChange={myFormik.handleChange} 
              
              />
               <span style={{color:"red"}}>{myFormik.errors.name}</span>
             
        </div>
        <div className="col-lg-4">
            <label>Gender</label>
            <input name="gender" type={"text"} className={`form-control  ${myFormik.errors.gender ?"is-invalid" :"is-valid" }` }value={myFormik.values.gender}  onChange={myFormik.handleChange}/>
          
            <span style={{color:"red"}}>{myFormik.errors.gender}</span>
        </div>
        <div className="col-lg-4">
            <label>DOB</label>
            <input name="dob" type={"date"} className={`form-control  ${myFormik.errors.dob ?"is-invalid" :"is-valid" }` }value={myFormik.values.dob}  onChange={myFormik.handleChange}/>
            <span style={{color:"red"}}>{myFormik.errors.dob}</span>
        </div>
      
        <div className="col-lg-4">
            <label>GPA of Old school</label>
            <input name="gpa" type={"text"} className={`form-control  ${myFormik.errors.gpa?"is-invalid" :"is-valid" }` }value={myFormik.values.gpa}   onChange={myFormik.handleChange}/>
            <span style={{color:"red"}}>{myFormik.errors.gpa}</span>
        </div>

        <div className="col-lg-4">
            <label>Average of Old school</label>
            <input name="average" type={"text"} className={`form-control  ${myFormik.errors.average?"is-invalid" :"is-valid" }` }value={myFormik.values.average}   onChange={myFormik.handleChange}/>
            <span style={{color:"red"}}>{myFormik.errors.average}</span>
        </div>
      
        <div className="col-lg-3 mt-3">
        <input type="submit" value="Update"  className="btn btn-primary"></input>
       </div>
    </div>
   </form>
   
    {/* <pre> */}
    {/* <code>
    {JSON.stringify(myFormik.values)}
    </code> */}
    {/* <code>
    {JSON.stringify(myFormik.errors)}
    </code>
</pre> */}
</div>

   
 </>

  )

  }
export default AddStudent
