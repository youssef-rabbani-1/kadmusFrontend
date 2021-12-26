import React, { useRef } from "react"
import { Line } from "react-chartjs-2"

function Dashboard({ data }) {
  const opts = {
    plugins: {},
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <div className="dashboard">
      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
  )
}

export default Dashboard
