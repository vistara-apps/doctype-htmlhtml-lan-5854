# 📊 Sales Dashboard

A modern, responsive sales dashboard built with React, featuring real-time analytics, interactive charts, and comprehensive KPI tracking.

![Sales Dashboard](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-cyan)

## ✨ Features

### 📈 Dashboard Analytics
- **Real-time KPI Cards** - Total sales, transactions, growth rate, and average order value
- **Interactive Charts** - Sales trend line chart and top products bar chart
- **Time-based Filtering** - Switch between daily, weekly, and monthly views
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 🎨 Modern UI/UX
- **Glass-morphism Design** - Modern frosted glass effects with backdrop blur
- **Dark Theme** - Professional dark color scheme optimized for extended use
- **Smooth Animations** - Hover effects and transitions for enhanced user experience
- **Accessibility** - WCAG 2.1 AA compliant with proper contrast ratios

### 📊 Data Visualization
- **Chart.js Integration** - High-performance, interactive charts
- **Responsive Charts** - Charts adapt to different screen sizes
- **Custom Tooltips** - Detailed information on hover
- **Color-coded Metrics** - Visual indicators for positive/negative changes

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vistara-apps/doctype-htmlhtml-lan-5854.git
   cd doctype-htmlhtml-lan-5854
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Dashboard header with time filter
│   ├── KPICards.jsx     # Key performance indicator cards
│   ├── SalesChart.jsx   # Sales trend line chart
│   └── ProductChart.jsx # Top products bar chart
├── utils/               # Utility functions
│   └── mockData.js      # Mock data generation
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:

- **Desktop** (1280px+) - Full layout with side-by-side charts
- **Tablet** (768px - 1279px) - Stacked layout with optimized spacing
- **Mobile** (320px - 767px) - Single column layout with touch-friendly controls

## 🎯 Key Performance Indicators

### Sales Metrics
- **Total Sales** - Aggregate revenue with percentage change indicator
- **Total Transactions** - Number of completed orders with trend
- **Growth Rate** - Period-over-period growth percentage
- **Average Order Value** - Mean transaction value with change indicator

### Time Periods
- **Daily** - Hourly breakdown (00:00 to 24:00)
- **Weekly** - Daily breakdown (Monday to Sunday)
- **Monthly** - Monthly breakdown (January to June)

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0** - Modern React with hooks and functional components
- **Vite 5.4.1** - Fast build tool and development server
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Chart.js 4.4.1** - Flexible charting library
- **React-ChartJS-2 5.2.0** - React wrapper for Chart.js
- **Lucide React 0.263.1** - Beautiful SVG icons

### Development Tools
- **PostCSS** - CSS processing with autoprefixer
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting (recommended)

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#1e3a8a to #3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Success**: Green (#22c55e)
- **Warning**: Orange (#f97316)
- **Error**: Red (#ef4444)
- **Neutral**: Gray shades for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Scale**: Responsive typography with proper line heights

### Spacing
- **Grid System**: 8px base unit
- **Breakpoints**: 320px, 768px, 1024px, 1280px
- **Container**: Max-width 1280px with responsive padding

## 📊 Data Structure

### KPI Data Format
```javascript
{
  totalSales: "$120K",
  totalTransactions: "950",
  growth: "+12%",
  averageOrder: "$126",
  salesChange: 8.5,
  transactionChange: 5.2,
  growthChange: 12.0,
  avgOrderChange: 3.1
}
```

### Sales Trend Format
```javascript
{
  labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
  sales: [45000, 52000, 48000, 61000, 55000, 67000, 58000],
  target: [50000, 55000, 52000, 65000, 60000, 70000, 62000]
}
```

### Top Products Format
```javascript
{
  products: ["Smartphone", "Laptop", "Headphones", "Tablet", "Smartwatch"],
  sales: [450, 380, 320, 280, 220]
}
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://api.salesdashboard.com/v1
VITE_APP_TITLE=Sales Dashboard
VITE_APP_VERSION=1.0.0
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended font family
- Responsive breakpoints
- Custom animations

## 🚀 Deployment

### Static Hosting
The application can be deployed to any static hosting service:

- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect GitHub repository for automatic deployments
- **AWS S3** - Upload files to S3 bucket with CloudFront
- **GitHub Pages** - Use GitHub Actions for automated deployment

### Docker Deployment
```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm run test

# Coverage report
npm run test:coverage

# E2E tests (if configured)
npm run test:e2e
```

### Testing Strategy
- **Unit Tests** - Component testing with React Testing Library
- **Integration Tests** - Chart rendering and data flow
- **Visual Tests** - Screenshot testing for UI consistency
- **Performance Tests** - Lighthouse CI for performance monitoring

## 🔒 Security

### Frontend Security
- **XSS Prevention** - Sanitized data rendering
- **Content Security Policy** - Strict CSP headers
- **Dependency Security** - Regular vulnerability scanning
- **HTTPS Enforcement** - Secure communication only

## 📈 Performance

### Optimization Features
- **Code Splitting** - Dynamic imports for optimal loading
- **Tree Shaking** - Unused code elimination
- **Asset Optimization** - Image compression and lazy loading
- **Bundle Analysis** - Webpack bundle analyzer integration

### Performance Metrics
- **First Contentful Paint** - < 1.5 seconds
- **Largest Contentful Paint** - < 2.5 seconds
- **Cumulative Layout Shift** - < 0.1
- **First Input Delay** - < 100ms

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- **ESLint** - Follow the configured linting rules
- **Prettier** - Use consistent code formatting
- **Conventional Commits** - Use semantic commit messages
- **Component Structure** - Follow established patterns

## 📚 Documentation

- **[PRD.md](./PRD.md)** - Complete Product Requirements Document
- **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** - API specifications and endpoints
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and changes

## 🐛 Troubleshooting

### Common Issues

**Build fails with CSS import error**
```bash
# Fix: Move @import statements before @tailwind directives
# See src/index.css for correct order
```

**Charts not rendering**
```bash
# Fix: Ensure Chart.js is properly registered
# Check component imports and ChartJS.register() calls
```

**Mobile layout issues**
```bash
# Fix: Check Tailwind responsive classes
# Use mobile-first approach with sm:, md:, lg: prefixes
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Chart.js** - Excellent charting library
- **Tailwind CSS** - Amazing utility-first CSS framework
- **Lucide** - Beautiful icon library
- **React Team** - For the fantastic React framework
- **Vite Team** - For the lightning-fast build tool

## 📞 Support

For support and questions:
- **Issues** - [GitHub Issues](https://github.com/vistara-apps/doctype-htmlhtml-lan-5854/issues)
- **Discussions** - [GitHub Discussions](https://github.com/vistara-apps/doctype-htmlhtml-lan-5854/discussions)
- **Email** - support@salesdashboard.com

---

**Made with ❤️ by the Sales Dashboard Team**

![Dashboard Preview](https://via.placeholder.com/800x400/1e3a8a/ffffff?text=Sales+Dashboard+Preview)
