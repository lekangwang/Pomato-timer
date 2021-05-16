"use strict";
//find the bar in the bar chart that has the highest value
const findMaxBarVal = function () {
  const workMin = myChart.data.datasets[0].data[0];
  const breakMin = myChart.data.datasets[0].data[1];

  return Math.max(workMin, breakMin);
};

const addMinuteToGraph = function () {
  const currentMode = findCurrentMode();

  //add elapsed time to the correct bar in the chart
  if (currentMode === "work") {
    myChart.data.datasets[0].data[0]++;
  } else {
    myChart.data.datasets[0].data[1]++;
  }
  myChart.update();
};

const pomatoChart = document.getElementById("pomato-chart").getContext("2d");
const myChart = new Chart(pomatoChart, {
  type: "bar",
  data: {
    labels: ["Work", "Break"],
    datasets: [
      {
        label: "# of minutes",
        data: [0, 0],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        responsive: true,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            precision: 0,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});
