import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = ({ expenses }) => {

  // 🔹 Convert data
  const categoryData = expenses.reduce((acc, exp) => {
    if (!acc[exp.category]) {
      acc[exp.category] = 0;
    }
    acc[exp.category] += exp.amount;
    return acc;
  }, {});

  // 🔹 Chart data
  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          "#22c55e",
          "#3b82f6",
          "#a855f7",
          "#f59e0b"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
  responsive : true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "left", labels: {padding:20,}
    },
  },
  };

  return <Doughnut data={data} options={options} /> ;
};

export default CategoryChart;