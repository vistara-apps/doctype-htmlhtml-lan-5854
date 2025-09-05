import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const SalesChart = ({ data, timeFilter }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#cbd5e1',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        titleColor: '#f1f5f9',
        bodyColor: '#cbd5e1',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 11
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 11
          },
          callback: function(value) {
            return '$' + value.toLocaleString()
          }
        }
      }
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6
      },
      line: {
        tension: 0.4
      }
    }
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Penjualan',
        data: data.sales,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2
      },
      {
        label: 'Target',
        data: data.target,
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        fill: false,
        borderDash: [5, 5],
        pointBackgroundColor: 'rgb(168, 85, 247)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2
      }
    ]
  }

  return (
    <div className="chart-container p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Tren Penjualan</h2>
        <span className="text-sm text-blue-200 bg-blue-500/20 px-3 py-1 rounded-full">
          {timeFilter}
        </span>
      </div>
      <div className="h-80">
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}

export default SalesChart