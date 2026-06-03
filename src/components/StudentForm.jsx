import { useState } from "react";
function StudentForm({students,setStudents}){
    const[name,setName]=useState("");
    const[rollNo,setRollNo]=useState("");
    const addStudent=()=>{
        const newStudent={
            name:name,
            rollNo:rollNo
        };
        setStudents([...students,newStudent]);

        setName("");
        setRollNo("");
    };
     
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

        <button onClick={addStudent}>Add Student</button>

        <p>Name:{name}</p>
        <p>Roll No:{rollNo}</p>
        </>

    );
}
export default StudentForm;