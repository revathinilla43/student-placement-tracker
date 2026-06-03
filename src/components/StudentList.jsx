
function StudentList({students,setStudents}){
    const deleteStudent=(indexToDelete)=>{
        const updatedStudents=students.filter((_,index)=>index!==indexToDelete);
        setStudents(updatedStudents);
    };
    
    return (
    <>
    <h2>Student List</h2>
    {students.map((student,index)=>(

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