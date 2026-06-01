import { useState } from "react";
function StudentForm(){
    const[name,setName]=useState("");
    const[rollNo,setRollNo]=useState("");
     
    return(
        <>
        <h2>Add Student</h2>

        <input type="text" 
               placeholder="Enter Name" 
               value={name}
               onChange={(e)=>setName(e.target.value)}/>
        <br></br>

        <input type="text"
               placeholder="Enter Roll Number"
               value={rollNo} 
               onChange={(e)=>setRollNo(e.target.value)}/>
        <br></br>

        <button>Add Student</button>

        <p>Name:{name}</p>
        <p>Roll No:{rollNo}</p>
        </>

    );
}
export default StudentForm;