import { useState } from 'react';
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App(){
  const[students,setStudents]=useState([]);
  const[search,setSearch]=useState("");
  return(
    <>
      <h1>Student Placement Tracker</h1>
      <Dashboard />
      <StudentForm 
        students={students}
        setStudents={setStudents} 
      />
      <p>Total Students:{students.length}</p> 

      <input 
        type="text" 
        placeholder="Search students..." 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <StudentList students={students}
                   setStudents={setStudents}
                   search={search}/>

    </>
  );
}
export default App;