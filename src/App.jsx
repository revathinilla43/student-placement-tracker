import "./App.css";
import { useState,useEffect } from 'react';
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App(){
 const [students, setStudents] = useState(() => {
  return JSON.parse(localStorage.getItem("students")) || [];
});
  const[search,setSearch]=useState("");
  useEffect(()=>{
    localStorage.setItem("students",
      JSON.stringify(students));
  },[students]);

  const [editIndex, setEditIndex] = useState(null);
  const[filterStatus,setFilterStatus]=useState("All");
  return(
    <>
      <h1>Student Placement Tracker</h1>
      <Dashboard  students={students}/>
      <StudentForm 
        students={students}
        setStudents={setStudents} 
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      <p>Total Students:{students.length}</p> 

      <input 
        type="text" 
        placeholder="Search students..." 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <select
      value={filterStatus}
       onChange={(e) => setFilterStatus(e.target.value)}
>
  <option value="All">All</option>
  <option value="Selected">Selected</option>
  <option value="Interview">Interview</option>
  <option value="Rejected">Rejected</option>
  <option value="Applied">Applied</option>
</select>
      <StudentList students={students}
                   setStudents={setStudents}
                   search={search}
                   editIndex={editIndex}
                    filterStatus={filterStatus}
                   setEditIndex={setEditIndex}/>

    </>
  );
}
export default App;