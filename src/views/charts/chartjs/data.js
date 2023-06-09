const line = {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
    ],
    datasets: [{
        label: "Sales Analytics",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(85, 110, 230, 0.2)",
        borderColor: "#405189",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#405189",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#405189",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80],
      },
      {
        label: "Monthly Earnings",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(235, 239, 242, 0.2)",
        borderColor: "#0AB39C",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#0AB39C",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#0AB39C",
        pointHoverBorderColor: "#eef0f2",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36],
      },
    ],
  },
  options: {
    x: {
      ticks: {
        font: {
          family: 'Poppins',
        },
      },
    },
    y: {
      ticks: {
        font: {
          family: 'Poppins',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            family: 'Poppins',
          }
        }
      },
    },
  },

};

const pie = {
  type: "pie",
  data: {
    labels: ["Desktops", "Tablets"],
    datasets: [{
      data: [300, 180],
      backgroundColor: ["#0AB39C", "#ebeff2"],
      hoverBackgroundColor: ["#0AB39C", "#ebeff2"],
      hoverBorderColor: "#fff",
    }, ],
  },
  options: {
    maintainAspectRatio: true,
    responsive: true,
  },
};

const Doughnut = {
  type: "doughnut",
  data: {
    labels: ["Desktops", "Tablets"],
    datasets: [{
      data: [300, 210],
      backgroundColor: ["#405189", "#ebeff2"],
      hoverBackgroundColor: ["#405189", "#ebeff2"],
      hoverBorderColor: "#fff",
      borderWidth: 0,
      radius: "90%",
      innerRadius: "75%",
    }, ],
  },
  options: {
    maintainAspectRatio: true,
  },
};

const radar = {
  type: 'radar',
  data: {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running',
    ],
    datasets: [{
        label: 'Desktops',
        backgroundColor: 'rgba(52, 195, 143, 0.2)',
        borderColor: '#34c38f',
        pointBackgroundColor: '#34c38f',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#34c38f',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'Tablets',
        backgroundColor: 'rgba(85, 110, 230, 0.2)',
        borderColor: '#405189',
        pointBackgroundColor: '#405189',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#405189',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      position: 'top',
    },
  }
}

const bar = {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [{
      barPercentage: 0.4,
      label: "Sales Analytics",
      backgroundColor: "rgba(52, 195, 143, 0.8)",
      borderColor: "rgba(52, 195, 143, 0.8)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(52, 195, 143, 0.9)",
      hoverBorderColor: "rgba(52, 195, 143, 0.9)",
      data: [65, 59, 81, 45, 56, 80, 50, 20],
    }, ],
  },
  options: {
    x: {
      ticks: {
        font: {
          family: 'Poppins',
        },
      },
    },
    y: {
      ticks: {
        font: {
          family: 'Poppins',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'Poppins',
          }
        }
      },
    }
  }
};

const PolarArea = {
  type: "polarArea",
  data: {
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    datasets: [{
      data: [11, 16, 7, 18],
      backgroundColor: ["#f46a6a", "#34c38f", "#f1b44c", "#405189"],
      label: "My dataset", // for legend
      hoverBorderColor: "#fff",
    }, ],
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      position: "top",
    },
  },
};

export {
  line,
  pie,
  Doughnut,
  radar,
  bar,
  PolarArea
};