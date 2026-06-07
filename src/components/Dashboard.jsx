function Dashboard({ students }) {
  const selectedCount = students.filter(
    (student) => student.status === "Selected"
  ).length;

  const interviewCount = students.filter(
    (student) => student.status === "Interview"
  ).length;

  const rejectedCount = students.filter(
    (student) => student.status === "Rejected"
  ).length;
  const totalStudents = students.length;

const placementRate =
  totalStudents === 0
    ? 0
    : Math.round((selectedCount / totalStudents) * 100);

    const appliedCount = students.filter(
  student => student.status === "Applied"
).length;

  return (
    <>
      <h2 className="dashboard-title">📊 Dashboard</h2>

      <div className="dashboard-cards">

        <div className="card">
          <h3>👥 Total</h3>
          <p>{students.length}</p>
        </div>

        <div className="card">
          <h3>🎉 Selected</h3>
          <p>{selectedCount}</p>
        </div>

        <div className="card">
          <h3>💬 Interview</h3>
          <p>{interviewCount}</p>
        </div>

        <div className="card">
          <h3>❌ Rejected</h3>
          <p>{rejectedCount}</p>
        </div>
        <div className="card">
  <h3>📈 Placement Rate</h3>
  <p>{placementRate}%</p>
</div>
<div className="card">
  <h3>📝 Applied</h3>
  <p>{appliedCount}</p>
</div>

      </div>
    </>
  );
}

export default Dashboard;