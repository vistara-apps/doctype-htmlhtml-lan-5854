import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import KPICards from './components/KPICards'
import SalesChart from './components/SalesChart'
import ProductChart from './components/ProductChart'
import { generateMockData } from './utils/mockData'

function App() {
  const [timeFilter, setTimeFilter] = useState('Harian')
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {
    // Simulate data loading based on time filter
    const data = generateMockData(timeFilter)
    setDashboardData(data)
  }, [timeFilter])

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
        <Header timeFilter={timeFilter} onTimeFilterChange={setTimeFilter} />
        
        <div className="mt-8 space-y-8">
          <KPICards data={dashboardData.kpis} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart data={dashboardData.salesTrend} timeFilter={timeFilter} />
            <ProductChart data={dashboardData.topProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App