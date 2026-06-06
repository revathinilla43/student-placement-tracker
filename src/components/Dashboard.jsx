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

  return (
    <>
      <h2>📊 Dashboard</h2>

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

      </div>
    </>
  );
}

export default Dashboard;