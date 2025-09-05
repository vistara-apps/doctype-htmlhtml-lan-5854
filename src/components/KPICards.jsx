import React from 'react'
import { DollarSign, ShoppingCart, TrendingUp, Receipt } from 'lucide-react'

const KPICards = ({ data }) => {
  const cards = [
    {
      title: 'Total Penjualan',
      value: data.totalSales,
      icon: DollarSign,
      color: 'from-green-400 to-green-600',
      change: data.salesChange
    },
    {
      title: 'Transaksi',
      value: data.totalTransactions,
      icon: ShoppingCart,
      color: 'from-blue-400 to-blue-600',
      change: data.transactionChange
    },
    {
      title: 'Pertumbuhan',
      value: data.growth,
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
      change: data.growthChange
    },
    {
      title: 'Rata-rata Order',
      value: data.averageOrder,
      icon: Receipt,
      color: 'from-orange-400 to-orange-600',
      change: data.avgOrderChange
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <div
            key={index}
            className="card-gradient p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${card.color}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${
                card.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {card.change >= 0 ? '+' : ''}{card.change}%
              </span>
            </div>
            
            <div>
              <h3 className="text-sm text-blue-200 mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-white">{card.value}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default KPICards