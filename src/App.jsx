import PlacementChart from "./components/";
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

  const exportCSV = () => {

  const headers = [
    "Name",
    "Roll No",
    "Status"
  ];

  const rows = students.map(student => [
    student.name,
    student.rollNo,
    student.status
  ]);

  const csvContent = [
    headers,
    ...rows
  ]
    .map(row => row.join(","))
    .join("\n");

  const blob = new Blob(
    [csvContent],
    { type: "text/csv" }
  );

  const url =
    window.URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;

  a.download = "students.csv";

  a.click();
};
const [darkMode, setDarkMode] = useState(true);
  return(
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h1>🎓 Student Placement Tracker 🚀</h1>
      <p className="subtitle">
  Manage and track student placement status efficiently 🚀
</p>
<button className="theme-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
      <Dashboard  students={students}/>
      <PlacementChart students={students} />
      <StudentForm 
        students={students}
        setStudents={setStudents} 
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      <div className='toolbar'>
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
<button onClick={exportCSV}>
  📥 Export CSV
</button>
</div>

      <StudentList students={students}
                   setStudents={setStudents}
                   search={search}
                   editIndex={editIndex}
                    filterStatus={filterStatus}
                   setEditIndex={setEditIndex}/>

    </div>
  );
}
export default App;