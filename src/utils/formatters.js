/**
 * Utility functions for formatting data in the Sales Dashboard
 */

/**
 * Format currency values
 * @param {number} value - The numeric value to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, currency = 'USD', locale = 'en-US') => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '$0'
  }

  // For large numbers, use K/M notation
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}

/**
 * Format percentage values
 * @param {number} value - The numeric value to format as percentage
 * @param {number} decimals - Number of decimal places (default: 1)
 * @returns {string} Formatted percentage string
 */
export const formatPercentage = (value, decimals = 1) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0%'
  }

  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(decimals)}%`
}

/**
 * Format large numbers with K/M notation
 * @param {number} value - The numeric value to format
 * @param {number} decimals - Number of decimal places (default: 0)
 * @returns {string} Formatted number string
 */
export const formatNumber = (value, decimals = 0) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0'
  }

  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(decimals)}M`
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(decimals)}K`
  }

  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })
}

/**
 * Format date for display
 * @param {Date|string} date - Date to format
 * @param {string} format - Format type ('short', 'medium', 'long')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, format = 'medium') => {
  const dateObj = date instanceof Date ? date : new Date(date)
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date'
  }

  const options = {
    short: { month: 'short', day: 'numeric' },
    medium: { month: 'short', day: 'numeric', year: 'numeric' },
    long: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
  }

  return dateObj.toLocaleDateString('en-US', options[format] || options.medium)
}

/**
 * Format time for display
 * @param {Date|string} time - Time to format
 * @param {boolean} includeSeconds - Whether to include seconds
 * @returns {string} Formatted time string
 */
export const formatTime = (time, includeSeconds = false) => {
  const timeObj = time instanceof Date ? time : new Date(time)
  
  if (isNaN(timeObj.getTime())) {
    return 'Invalid Time'
  }

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    ...(includeSeconds && { second: '2-digit' })
  }

  return timeObj.toLocaleTimeString('en-US', options)
}

/**
 * Get color class based on value change
 * @param {number} value - The change value
 * @returns {string} Tailwind color class
 */
export const getChangeColor = (value) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return 'text-gray-400'
  }

  if (value > 0) {
    return 'text-green-400'
  } else if (value < 0) {
    return 'text-red-400'
  } else {
    return 'text-gray-400'
  }
}

/**
 * Get trend icon based on value change
 * @param {number} value - The change value
 * @returns {string} Icon name for Lucide React
 */
export const getTrendIcon = (value) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return 'Minus'
  }

  if (value > 0) {
    return 'TrendingUp'
  } else if (value < 0) {
    return 'TrendingDown'
  } else {
    return 'Minus'
  }
}

/**
 * Calculate percentage change between two values
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {number} Percentage change
 */
export const calculatePercentageChange = (current, previous) => {
  if (typeof current !== 'number' || typeof previous !== 'number' || previous === 0) {
    return 0
  }

  return ((current - previous) / previous) * 100
}

/**
 * Generate random color for charts
 * @param {number} index - Index for consistent color selection
 * @param {number} opacity - Opacity value (0-1)
 * @returns {string} RGBA color string
 */
export const generateChartColor = (index, opacity = 0.8) => {
  const colors = [
    '59, 130, 246',   // Blue
    '168, 85, 247',   // Purple
    '34, 197, 94',    // Green
    '251, 146, 60',   // Orange
    '239, 68, 68',    // Red
    '6, 182, 212',    // Cyan
    '245, 158, 11',   // Amber
    '139, 92, 246',   // Violet
    '236, 72, 153',   // Pink
    '34, 197, 94'     // Emerald
  ]

  const colorIndex = index % colors.length
  return `rgba(${colors[colorIndex]}, ${opacity})`
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Validate and sanitize data for charts
 * @param {Array} data - Data array to validate
 * @returns {Array} Sanitized data array
 */
export const sanitizeChartData = (data) => {
  if (!Array.isArray(data)) {
    return []
  }

  return data.map(value => {
    if (typeof value === 'number' && !isNaN(value)) {
      return value
    }
    return 0
  })
}

/**
 * Generate accessible color palette for charts
 * @param {number} count - Number of colors needed
 * @returns {Array} Array of accessible color objects
 */
export const generateAccessibleColors = (count) => {
  const baseColors = [
    { bg: 'rgba(59, 130, 246, 0.8)', border: 'rgb(59, 130, 246)' },   // Blue
    { bg: 'rgba(168, 85, 247, 0.8)', border: 'rgb(168, 85, 247)' },   // Purple
    { bg: 'rgba(34, 197, 94, 0.8)', border: 'rgb(34, 197, 94)' },     // Green
    { bg: 'rgba(251, 146, 60, 0.8)', border: 'rgb(251, 146, 60)' },   // Orange
    { bg: 'rgba(239, 68, 68, 0.8)', border: 'rgb(239, 68, 68)' },     // Red
    { bg: 'rgba(6, 182, 212, 0.8)', border: 'rgb(6, 182, 212)' },     // Cyan
    { bg: 'rgba(245, 158, 11, 0.8)', border: 'rgb(245, 158, 11)' },   // Amber
    { bg: 'rgba(139, 92, 246, 0.8)', border: 'rgb(139, 92, 246)' },   // Violet
  ]

  const colors = []
  for (let i = 0; i < count; i++) {
    colors.push(baseColors[i % baseColors.length])
  }

  return colors
}
