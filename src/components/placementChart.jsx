import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function PlacementChart({ students }) {

  const data = [
    {
      name: "Applied",
      value: students.filter(
        s => s.status === "Applied"
      ).length,
    },
    {
      name: "Interview",
      value: students.filter(
        s => s.status === "Interview"
      ).length,
    },
    {
      name: "Selected",
      value: students.filter(
        s => s.status === "Selected"
      ).length,
    },
    {
      name: "Rejected",
      value: students.filter(
        s => s.status === "Rejected"
      ).length,
    },
  ];

  const COLORS = [
    "#3b82f6",
    "#f59e0b",
    "#22c55e",
    "#ef4444",
  ];

  return (
    <div className="chart-container">
      <h2 className="chart-title">📊 Placement Analytics</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>

      <PieChart width={500} height={350}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
      </div>
    </div>
  );
}

export default PlacementChart;