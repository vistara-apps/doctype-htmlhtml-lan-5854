import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const ProductChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        titleColor: '#f1f5f9',
        bodyColor: '#cbd5e1',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return context.parsed.y + ' units sold'
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
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
          }
        }
      }
    }
  }

  const chartData = {
    labels: data.products,
    datasets: [
      {
        data: data.sales,
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(251, 146, 60, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(168, 85, 247)',
          'rgb(34, 197, 94)',
          'rgb(251, 146, 60)',
          'rgb(239, 68, 68)'
        ],
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false
      }
    ]
  }

  return (
    <div className="chart-container p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Produk Terlaris</h2>
        <span className="text-sm text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
          Top 5
        </span>
      </div>
      <div className="h-80">
        <Bar data={chartData} options={options} />
      </div>
      
      {/* Product list */}
      <div className="mt-4 space-y-2">
        {data.products.map((product, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className="text-blue-200">{product}</span>
            <span className="text-white font-medium">{data.sales[index]} units</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductChart