/**
 * Test suite for formatter utility functions
 */

import {
  formatCurrency,
  formatPercentage,
  formatNumber,
  formatDate,
  formatTime,
  getChangeColor,
  getTrendIcon,
  calculatePercentageChange,
  generateChartColor,
  sanitizeChartData,
  generateAccessibleColors
} from '../formatters'

describe('formatCurrency', () => {
  test('formats small numbers correctly', () => {
    expect(formatCurrency(100)).toBe('$100')
    expect(formatCurrency(999)).toBe('$999')
  })

  test('formats thousands with K notation', () => {
    expect(formatCurrency(1000)).toBe('$1K')
    expect(formatCurrency(1500)).toBe('$2K')
    expect(formatCurrency(999999)).toBe('$1000K')
  })

  test('formats millions with M notation', () => {
    expect(formatCurrency(1000000)).toBe('$1.0M')
    expect(formatCurrency(1500000)).toBe('$1.5M')
    expect(formatCurrency(2750000)).toBe('$2.8M')
  })

  test('handles invalid inputs', () => {
    expect(formatCurrency(NaN)).toBe('$0')
    expect(formatCurrency('invalid')).toBe('$0')
    expect(formatCurrency(null)).toBe('$0')
    expect(formatCurrency(undefined)).toBe('$0')
  })
})

describe('formatPercentage', () => {
  test('formats positive percentages with + sign', () => {
    expect(formatPercentage(12.5)).toBe('+12.5%')
    expect(formatPercentage(0.1)).toBe('+0.1%')
  })

  test('formats negative percentages', () => {
    expect(formatPercentage(-5.2)).toBe('-5.2%')
    expect(formatPercentage(-0.1)).toBe('-0.1%')
  })

  test('formats zero percentage', () => {
    expect(formatPercentage(0)).toBe('+0.0%')
  })

  test('handles custom decimal places', () => {
    expect(formatPercentage(12.345, 2)).toBe('+12.35%')
    expect(formatPercentage(12.345, 0)).toBe('+12%')
  })

  test('handles invalid inputs', () => {
    expect(formatPercentage(NaN)).toBe('0%')
    expect(formatPercentage('invalid')).toBe('0%')
    expect(formatPercentage(null)).toBe('0%')
  })
})

describe('formatNumber', () => {
  test('formats small numbers', () => {
    expect(formatNumber(100)).toBe('100')
    expect(formatNumber(999)).toBe('999')
  })

  test('formats thousands with K notation', () => {
    expect(formatNumber(1000)).toBe('1K')
    expect(formatNumber(1500)).toBe('2K')
  })

  test('formats millions with M notation', () => {
    expect(formatNumber(1000000)).toBe('1M')
    expect(formatNumber(1500000)).toBe('2M')
  })

  test('handles decimal places', () => {
    expect(formatNumber(1500, 1)).toBe('1.5K')
    expect(formatNumber(1500000, 1)).toBe('1.5M')
  })

  test('handles invalid inputs', () => {
    expect(formatNumber(NaN)).toBe('0')
    expect(formatNumber('invalid')).toBe('0')
  })
})

describe('formatDate', () => {
  const testDate = new Date('2025-09-05T12:00:00Z')

  test('formats date with medium format by default', () => {
    const result = formatDate(testDate)
    expect(result).toMatch(/Sep \d+, 2025/)
  })

  test('formats date with short format', () => {
    const result = formatDate(testDate, 'short')
    expect(result).toMatch(/Sep \d+/)
  })

  test('formats date with long format', () => {
    const result = formatDate(testDate, 'long')
    expect(result).toMatch(/\w+, September \d+, 2025/)
  })

  test('handles string dates', () => {
    const result = formatDate('2025-09-05')
    expect(result).toMatch(/Sep \d+, 2025/)
  })

  test('handles invalid dates', () => {
    expect(formatDate('invalid')).toBe('Invalid Date')
    expect(formatDate(null)).toBe('Invalid Date')
  })
})

describe('formatTime', () => {
  const testTime = new Date('2025-09-05T14:30:45Z')

  test('formats time without seconds by default', () => {
    const result = formatTime(testTime)
    expect(result).toMatch(/\d{1,2}:\d{2} [AP]M/)
  })

  test('formats time with seconds when requested', () => {
    const result = formatTime(testTime, true)
    expect(result).toMatch(/\d{1,2}:\d{2}:\d{2} [AP]M/)
  })

  test('handles invalid times', () => {
    expect(formatTime('invalid')).toBe('Invalid Time')
    expect(formatTime(null)).toBe('Invalid Time')
  })
})

describe('getChangeColor', () => {
  test('returns green for positive values', () => {
    expect(getChangeColor(5)).toBe('text-green-400')
    expect(getChangeColor(0.1)).toBe('text-green-400')
  })

  test('returns red for negative values', () => {
    expect(getChangeColor(-5)).toBe('text-red-400')
    expect(getChangeColor(-0.1)).toBe('text-red-400')
  })

  test('returns gray for zero', () => {
    expect(getChangeColor(0)).toBe('text-gray-400')
  })

  test('handles invalid inputs', () => {
    expect(getChangeColor(NaN)).toBe('text-gray-400')
    expect(getChangeColor('invalid')).toBe('text-gray-400')
  })
})

describe('getTrendIcon', () => {
  test('returns TrendingUp for positive values', () => {
    expect(getTrendIcon(5)).toBe('TrendingUp')
    expect(getTrendIcon(0.1)).toBe('TrendingUp')
  })

  test('returns TrendingDown for negative values', () => {
    expect(getTrendIcon(-5)).toBe('TrendingDown')
    expect(getTrendIcon(-0.1)).toBe('TrendingDown')
  })

  test('returns Minus for zero', () => {
    expect(getTrendIcon(0)).toBe('Minus')
  })

  test('handles invalid inputs', () => {
    expect(getTrendIcon(NaN)).toBe('Minus')
    expect(getTrendIcon('invalid')).toBe('Minus')
  })
})

describe('calculatePercentageChange', () => {
  test('calculates positive percentage change', () => {
    expect(calculatePercentageChange(110, 100)).toBe(10)
    expect(calculatePercentageChange(150, 100)).toBe(50)
  })

  test('calculates negative percentage change', () => {
    expect(calculatePercentageChange(90, 100)).toBe(-10)
    expect(calculatePercentageChange(50, 100)).toBe(-50)
  })

  test('handles zero previous value', () => {
    expect(calculatePercentageChange(100, 0)).toBe(0)
  })

  test('handles invalid inputs', () => {
    expect(calculatePercentageChange('invalid', 100)).toBe(0)
    expect(calculatePercentageChange(100, 'invalid')).toBe(0)
    expect(calculatePercentageChange(NaN, 100)).toBe(0)
  })
})

describe('generateChartColor', () => {
  test('generates consistent colors for same index', () => {
    const color1 = generateChartColor(0)
    const color2 = generateChartColor(0)
    expect(color1).toBe(color2)
  })

  test('generates different colors for different indices', () => {
    const color1 = generateChartColor(0)
    const color2 = generateChartColor(1)
    expect(color1).not.toBe(color2)
  })

  test('handles custom opacity', () => {
    const color = generateChartColor(0, 0.5)
    expect(color).toContain('0.5')
  })

  test('cycles through colors for large indices', () => {
    const color1 = generateChartColor(0)
    const color2 = generateChartColor(10) // Should cycle back
    expect(color1).toBe(color2)
  })
})

describe('sanitizeChartData', () => {
  test('keeps valid numbers', () => {
    const input = [1, 2, 3, 4, 5]
    const result = sanitizeChartData(input)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  test('converts invalid values to zero', () => {
    const input = [1, 'invalid', NaN, null, undefined, 5]
    const result = sanitizeChartData(input)
    expect(result).toEqual([1, 0, 0, 0, 0, 5])
  })

  test('handles non-array input', () => {
    expect(sanitizeChartData('invalid')).toEqual([])
    expect(sanitizeChartData(null)).toEqual([])
    expect(sanitizeChartData(undefined)).toEqual([])
  })

  test('handles empty array', () => {
    expect(sanitizeChartData([])).toEqual([])
  })
})

describe('generateAccessibleColors', () => {
  test('generates correct number of colors', () => {
    const colors = generateAccessibleColors(5)
    expect(colors).toHaveLength(5)
  })

  test('each color has bg and border properties', () => {
    const colors = generateAccessibleColors(3)
    colors.forEach(color => {
      expect(color).toHaveProperty('bg')
      expect(color).toHaveProperty('border')
      expect(typeof color.bg).toBe('string')
      expect(typeof color.border).toBe('string')
    })
  })

  test('cycles through colors for large counts', () => {
    const colors = generateAccessibleColors(10)
    expect(colors).toHaveLength(10)
    // Should cycle back to first color
    expect(colors[0].bg).toBe(colors[8].bg)
  })

  test('handles zero count', () => {
    const colors = generateAccessibleColors(0)
    expect(colors).toHaveLength(0)
  })
})
