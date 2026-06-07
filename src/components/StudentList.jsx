
function StudentList({students,setStudents,search,filterStatus,setEditIndex}){

    const deleteStudent=(indexToDelete)=>{
     const confirmDelete =
    window.confirm("Delete this student?");

  if(!confirmDelete) return;
        const updatedStudents=students.filter((_,index)=>index!==indexToDelete);
        setStudents(updatedStudents);
    };

    const filteredStudents = students.filter((student) => {
  const matchesSearch = student.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesStatus =
    filterStatus === "All" ||
    student.status === filterStatus;

  return matchesSearch && matchesStatus;
});
     
    return (
  <>
    <h2>📃 Student List</h2>

    {filteredStudents.length === 0 ? (
      <p>📭 No students found.</p>
    ) : (
      filteredStudents.map((student, index) => (
        <div className="student-card" key={index}>
          <p><strong>👤 Name:</strong> {student.name}</p>

          <p><strong>🆔 Roll No:</strong> {student.rollNo}</p>

          <p>
                <strong>📌 Status:</strong>

                 <span className={`status ${student.status}`}>
                        {student.status}
                          </span>
</p>

          <button
            className="edit-btn"
            onClick={() => setEditIndex(index)}
          >
            ✏️ Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteStudent(index)}
          >
            🗑️ Delete
          </button>
        </div>
      ))
    )}
  </>
);
}
export default StudentList;