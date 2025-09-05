import React from 'react'
import { TrendingUp } from 'lucide-react'

const Header = ({ timeFilter, onTimeFilterChange }) => {
  const timeOptions = ['Harian', 'Mingguan', 'Bulanan']

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
          <TrendingUp className="w-8 h-8 text-blue-300" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Sales Dashboard
          </h1>
          <p className="text-blue-200 text-sm mt-1">Real-time analytics and insights</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-blue-200">Period:</span>
        <select
          value={timeFilter}
          onChange={(e) => onTimeFilterChange(e.target.value)}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          {timeOptions.map(option => (
            <option key={option} value={option} className="bg-blue-900 text-white">
              {option}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}

export default Header