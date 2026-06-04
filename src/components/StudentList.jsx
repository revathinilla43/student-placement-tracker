
function StudentList({students,setStudents,search,filterStatus,setEditIndex}){

    const deleteStudent=(indexToDelete)=>{
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
    <h2>📃Student List</h2>
    {filteredStudents.map((student,index)=>(

    <div key={index}>
        <p>
        {student.name}-{student.rollNo}-{student.status}
    </p>

    <button onClick={() => setEditIndex(index)}>
  Edit
</button>

<button onClick={() => deleteStudent(index)}>
  Delete
</button>
    </div>
    ))}
    </>
    );

}
export default StudentList;