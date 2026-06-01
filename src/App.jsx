import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App(){
  return(
    <>
      <h1>🎓Student Placement Tracker</h1>

      <Dashboard />
      <StudentForm />
      <StudentList />
    </>
  );
}
export default App;
