"use strict";
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
            // stepSize: 1,
            // max: findMaxBarVal() + 10,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});
