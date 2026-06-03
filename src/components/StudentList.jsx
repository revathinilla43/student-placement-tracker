
function StudentList({students,setStudents,search}){

    const deleteStudent=(indexToDelete)=>{
        const updatedStudents=students.filter((_,index)=>index!==indexToDelete);
        setStudents(updatedStudents);
    };

    const filteredStudents=students.filter(student=>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(search.toLowerCase())
    );
     
    return (
    <>
    <h2>Student List</h2>
    {filteredStudents.map((student,index)=>(

    <div key={index}>
        <p>
        {student.name}-{student.rollNo} 
    </p>

    <button onClick={()=>deleteStudent(index)}>Delete</button>
    </div>
    ))}
    </>
    );

}
export default StudentList;