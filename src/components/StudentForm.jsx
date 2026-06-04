import { useState,useEffect } from "react";

function StudentForm({students,setStudents,editIndex,setEditIndex}){
    const[status,setStatus]=useState("Applied");
    const[name,setName]=useState("");
    const[rollNo,setRollNo]=useState("");

    useEffect(()=>{
        if(editIndex!==null){
            setName(students[editIndex].name);
            setRollNo(students[editIndex].rollNo);
            setStatus(students[editIndex].status);
        }
    },[editIndex,students]);

    const addStudent=()=>{
        const newStudent={
            name:name,
            rollNo:rollNo,
            status:status,
        };
        if(editIndex!=null){
            const updatedStudents=[...students];
            updatedStudents[editIndex] = newStudent;
            setStudents(updatedStudents);
            setEditIndex(null);
          } else {
             setStudents([...students, newStudent]);
         }

   

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
        


        <button onClick={addStudent}>
          {editIndex !== null ? "✏️ Update Student" : "➕ Add Student"}
        </button>

        <p>👤Name:{name}</p>
        <p>🔢Roll No:{rollNo}</p>
        <p>📌Status:{status}</p>
        </>

        
    );
}
export default StudentForm;