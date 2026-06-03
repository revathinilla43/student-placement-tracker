import { useState } from "react";
function StudentForm({students,setStudents}){
    const[status,setStatus]=useState("Applied");
    const[name,setName]=useState("");
    const[rollNo,setRollNo]=useState("");
    const addStudent=()=>{
        const newStudent={
            name:name,
            rollNo:rollNo,
            status:status,
        };
        setStudents([...students,newStudent]);

        setName("");
        setRollNo("");
        setStatus("Applied");
    };
     
    return(
        <>
        <h2>🎓Add Student</h2>

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

        <select 
              value={status}
              onChange={(e)=>setStatus(e.target.value)}>

                <option value="Applied">📝Applied</option>
                <option value="Interview">💬Interview</option>
                <option value="Selected">🎉Selected</option>
                <option value="Rejected">❌Rejected</option>
              </select>
              <br /><br />
        


        <button onClick={addStudent}>➕Add Student</button>

        <p>👤Name:{name}</p>
        <p>🔢Roll No:{rollNo}</p>
        <p>📌Status:{status}</p>
        </>

        
    );
}
export default StudentForm;