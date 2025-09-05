export const generateMockData = (timeFilter) => {
  const baseData = {
    Harian: {
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
      salesMultiplier: 1,
      transactionMultiplier: 1
    },
    Mingguan: {
      labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
      salesMultiplier: 7,
      transactionMultiplier: 7
    },
    Bulanan: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
      salesMultiplier: 30,
      transactionMultiplier: 30
    }
  }

  const currentData = baseData[timeFilter]
  
  // Generate sales trend data
  const salesData = currentData.labels.map((_, index) => {
    return Math.floor(Math.random() * 50000 + 30000) * currentData.salesMultiplier
  })
  
  const targetData = currentData.labels.map((_, index) => {
    return Math.floor(Math.random() * 55000 + 35000) * currentData.salesMultiplier
  })

  // Generate KPI data
  const totalSales = salesData.reduce((sum, val) => sum + val, 0)
  const totalTransactions = Math.floor(totalSales / 126) * currentData.transactionMultiplier
  
  return {
    kpis: {
      totalSales: `$${(totalSales / 1000).toFixed(0)}K`,
      totalTransactions: totalTransactions.toLocaleString(),
      growth: '+12%',
      averageOrder: '$126',
      salesChange: Math.floor(Math.random() * 20 + 5),
      transactionChange: Math.floor(Math.random() * 15 + 3),
      growthChange: Math.floor(Math.random() * 10 + 8),
      avgOrderChange: Math.floor(Math.random() * 8 + 2)
    },
    salesTrend: {
      labels: currentData.labels,
      sales: salesData,
      target: targetData
    },
    topProducts: {
      products: ['Smartphone', 'Laptop', 'Headphones', 'Tablet', 'Smartwatch'],
      sales: [450, 380, 320, 280, 220]
    }
  }
}