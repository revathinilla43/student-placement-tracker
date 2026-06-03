
function Dashboard({students}){
    const selectedCount=students.filter(
        (student)=>student.status==="Selected"
    ).length;

    const interviewCount=students.filter(
        (student)=>student.status === "Interview"
    ).length;

    const rejectedCount=students.filter(
        (student)=>student.status === "Rejected"
    ).length;

    return(
    <>
    <h2>📊Dashboard</h2>

    <p>👥Total Students: {students.length}</p>
    <p>🎉Selected Students: {selectedCount}</p>
    <p>💬Interview Students: {interviewCount}</p>
    <p>❌Rejected Students: {rejectedCount}</p>
    </>
    );

}
export default Dashboard;