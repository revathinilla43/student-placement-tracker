import { useState } from 'react';
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App(){
  const[students,setStudents]=useState([]);
  return(
    <>
      <h1>Student Placement Tracker</h1>
      <Dashboard />
      <StudentForm 
        students={students}
        setStudents={setStudents} 
      />
      <p>Total Students:{students.length}</p> 
      <StudentList students={students}
                   setStudents={setStudents}/>

    </>
  );
}
export default App;