# Sales Dashboard API Documentation

## Overview

This document outlines the API specifications for the Sales Dashboard application. Currently, the application uses mock data, but this documentation serves as a blueprint for future backend integration.

## Base URL

```
Production: https://api.salesdashboard.com/v1
Staging: https://staging-api.salesdashboard.com/v1
Development: http://localhost:3001/api/v1
```

## Authentication

### Future Implementation
```http
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

## Endpoints

### 1. Dashboard KPIs

#### Get Dashboard KPIs
```http
GET /dashboard/kpis
```

**Query Parameters:**
- `period` (string, optional): Time period filter. Values: `daily`, `weekly`, `monthly`. Default: `daily`
- `start_date` (string, optional): Start date in ISO 8601 format
- `end_date` (string, optional): End date in ISO 8601 format

**Response:**
```json
{
  "status": "success",
  "data": {
    "totalSales": "$120K",
    "totalTransactions": "950",
    "growth": "+12%",
    "averageOrder": "$126",
    "salesChange": 8.5,
    "transactionChange": 5.2,
    "growthChange": 12.0,
    "avgOrderChange": 3.1,
    "period": "daily",
    "lastUpdated": "2025-09-05T20:56:49Z"
  },
  "meta": {
    "timestamp": "2025-09-05T20:56:49Z",
    "version": "1.0.0"
  }
}
```

**Error Response:**
```json
{
  "status": "error",
  "error": {
    "code": "INVALID_PERIOD",
    "message": "Invalid period specified. Must be one of: daily, weekly, monthly",
    "details": {
      "provided": "invalid_period",
      "allowed": ["daily", "weekly", "monthly"]
    }
  },
  "meta": {
    "timestamp": "2025-09-05T20:56:49Z",
    "version": "1.0.0"
  }
}
```

### 2. Sales Trend Data

#### Get Sales Trend
```http
GET /dashboard/sales-trend
```

**Query Parameters:**
- `period` (string, optional): Time period filter. Values: `daily`, `weekly`, `monthly`. Default: `daily`
- `start_date` (string, optional): Start date in ISO 8601 format
- `end_date` (string, optional): End date in ISO 8601 format

**Response:**
```json
{
  "status": "success",
  "data": {
    "labels": ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
    "sales": [45000, 52000, 48000, 61000, 55000, 67000, 58000],
    "target": [50000, 55000, 52000, 65000, 60000, 70000, 62000],
    "period": "daily",
    "currency": "USD",
    "lastUpdated": "2025-09-05T20:56:49Z"
  },
  "meta": {
    "timestamp": "2025-09-05T20:56:49Z",
    "version": "1.0.0"
  }
}
```

### 3. Top Products Data

#### Get Top Products
```http
GET /dashboard/top-products
```

**Query Parameters:**
- `limit` (integer, optional): Number of products to return. Default: `5`, Max: `20`
- `period` (string, optional): Time period filter. Values: `daily`, `weekly`, `monthly`. Default: `daily`

**Response:**
```json
{
  "status": "success",
  "data": {
    "products": [
      {
        "name": "Smartphone",
        "sales": 450,
        "revenue": 225000,
        "growth": 12.5
      },
      {
        "name": "Laptop",
        "sales": 380,
        "revenue": 380000,
        "growth": 8.2
      },
      {
        "name": "Headphones",
        "sales": 320,
        "revenue": 32000,
        "growth": -2.1
      },
      {
        "name": "Tablet",
        "sales": 280,
        "revenue": 140000,
        "growth": 15.3
      },
      {
        "name": "Smartwatch",
        "sales": 220,
        "revenue": 66000,
        "growth": 22.1
      }
    ],
    "period": "daily",
    "currency": "USD",
    "lastUpdated": "2025-09-05T20:56:49Z"
  },
  "meta": {
    "timestamp": "2025-09-05T20:56:49Z",
    "version": "1.0.0"
  }
}
```

### 4. Dashboard Summary

#### Get Complete Dashboard Data
```http
GET /dashboard/summary
```

**Query Parameters:**
- `period` (string, optional): Time period filter. Values: `daily`, `weekly`, `monthly`. Default: `daily`

**Response:**
```json
{
  "status": "success",
  "data": {
    "kpis": {
      "totalSales": "$120K",
      "totalTransactions": "950",
      "growth": "+12%",
      "averageOrder": "$126",
      "salesChange": 8.5,
      "transactionChange": 5.2,
      "growthChange": 12.0,
      "avgOrderChange": 3.1
    },
    "salesTrend": {
      "labels": ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      "sales": [45000, 52000, 48000, 61000, 55000, 67000, 58000],
      "target": [50000, 55000, 52000, 65000, 60000, 70000, 62000]
    },
    "topProducts": {
      "products": ["Smartphone", "Laptop", "Headphones", "Tablet", "Smartwatch"],
      "sales": [450, 380, 320, 280, 220]
    },
    "period": "daily",
    "currency": "USD",
    "lastUpdated": "2025-09-05T20:56:49Z"
  },
  "meta": {
    "timestamp": "2025-09-05T20:56:49Z",
    "version": "1.0.0"
  }
}
```

## Data Models

### KPI Model
```typescript
interface KPIData {
  totalSales: string;           // Formatted currency string
  totalTransactions: string;    // Formatted number string
  growth: string;              // Formatted percentage string
  averageOrder: string;        // Formatted currency string
  salesChange: number;         // Percentage change (float)
  transactionChange: number;   // Percentage change (float)
  growthChange: number;        // Percentage change (float)
  avgOrderChange: number;      // Percentage change (float)
}
```

### Sales Trend Model
```typescript
interface SalesTrendData {
  labels: string[];           // Time period labels
  sales: number[];           // Sales data points
  target: number[];          // Target data points
  period: 'daily' | 'weekly' | 'monthly';
  currency: string;          // Currency code (ISO 4217)
  lastUpdated: string;       // ISO 8601 timestamp
}
```

### Product Model
```typescript
interface ProductData {
  name: string;              // Product name
  sales: number;             // Units sold
  revenue: number;           // Revenue generated
  growth: number;            // Growth percentage
}

interface TopProductsData {
  products: ProductData[];
  period: 'daily' | 'weekly' | 'monthly';
  currency: string;
  lastUpdated: string;
}
```

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `INVALID_PERIOD` | 400 | Invalid time period specified |
| `INVALID_DATE_RANGE` | 400 | Invalid date range provided |
| `UNAUTHORIZED` | 401 | Authentication required |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Internal server error |
| `SERVICE_UNAVAILABLE` | 503 | Service temporarily unavailable |

## Rate Limiting

- **Authenticated Users:** 1000 requests per hour
- **Unauthenticated Users:** 100 requests per hour
- **Burst Limit:** 10 requests per second

Rate limit headers:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1757109605
```

## Caching

- **KPI Data:** Cached for 5 minutes
- **Sales Trend:** Cached for 15 minutes
- **Top Products:** Cached for 30 minutes
- **Dashboard Summary:** Cached for 5 minutes

Cache headers:
```http
Cache-Control: public, max-age=300
ETag: "abc123def456"
Last-Modified: Thu, 05 Sep 2025 20:56:49 GMT
```

## Webhooks (Future Implementation)

### Dashboard Data Updated
```http
POST /webhooks/dashboard-updated
```

**Payload:**
```json
{
  "event": "dashboard.updated",
  "timestamp": "2025-09-05T20:56:49Z",
  "data": {
    "period": "daily",
    "updatedFields": ["kpis", "salesTrend"],
    "lastUpdated": "2025-09-05T20:56:49Z"
  }
}
```

## SDK Examples

### JavaScript/TypeScript
```typescript
import { SalesDashboardAPI } from '@salesdashboard/api-client';

const api = new SalesDashboardAPI({
  baseURL: 'https://api.salesdashboard.com/v1',
  apiKey: 'your-api-key'
});

// Get KPIs
const kpis = await api.dashboard.getKPIs({ period: 'daily' });

// Get sales trend
const salesTrend = await api.dashboard.getSalesTrend({ period: 'weekly' });

// Get complete dashboard
const dashboard = await api.dashboard.getSummary({ period: 'monthly' });
```

### Python
```python
from salesdashboard import SalesDashboardClient

client = SalesDashboardClient(
    base_url='https://api.salesdashboard.com/v1',
    api_key='your-api-key'
)

# Get KPIs
kpis = client.dashboard.get_kpis(period='daily')

# Get sales trend
sales_trend = client.dashboard.get_sales_trend(period='weekly')

# Get complete dashboard
dashboard = client.dashboard.get_summary(period='monthly')
```

## Testing

### Test Endpoints
```
Staging: https://staging-api.salesdashboard.com/v1
Test API Key: test_sk_1234567890abcdef
```

### Mock Data
The current implementation uses mock data generation. See `src/utils/mockData.js` for the data generation logic.

## Changelog

### Version 1.0.0 (2025-09-05)
- Initial API specification
- Dashboard KPIs endpoint
- Sales trend endpoint
- Top products endpoint
- Dashboard summary endpoint
- Error handling specification
- Rate limiting specification

---

**API Version:** 1.0.0  
**Last Updated:** September 5, 2025  
**Status:** Draft (Implementation Pending)
