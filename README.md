<p align="center">
  <img src="Frontend/public/coinly.svg" alt="Coinly Logo" width="120" height="120">
</p>

<h1 align="center">💰 Coinly</h1>

<p align="center">
  <strong>Personal Finance Management Application</strong><br>
</p>

<p align="center">
  <a href="https://github.com/Koooowal/coinly-finance-manager/actions/workflows/ci.yml">
    <img src="https://github.com/Koooowal/coinly-finance-manager/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## 📖 About

**Coinly** is a full-stack personal finance management application that helps users take control of their financial life. The goal was to build something genuinely useful end-to-end — not just a CRUD demo, but a complete product with authentication, budgeting logic, recurring transactions automated via cron jobs, and data export.

The backend follows a layered architecture (routes → controllers → services → database), keeping business logic out of request handlers. The frontend is a React SPA with protected routing, context-based auth state, and a consistent API layer built on Axios.

---

## ✨ Features

### 💳 Transaction Management
- Add, edit, and delete income/expense transactions
- Categorize transactions for better organization
- Filter and search through transaction history
- View transaction statistics and summaries

### 📊 Budget Planning
- Create monthly/custom period budgets
- Set spending limits per category
- Track budget progress in real-time
- Receive alerts when approaching budget limits

### 🎯 Savings Goals
- Define financial goals with target amounts
- Track progress towards each goal
- Make deposits to goals from accounts
- Manage multiple savings accounts

### 📈 Financial Reports
- Monthly and yearly financial summaries
- Category-wise expense breakdown
- Income vs Expenses comparison charts
- Visual analytics with interactive charts

### 🔄 Recurring Transactions
- Set up automatic recurring income/expenses
- Support for daily, weekly, monthly, and yearly frequencies
- Toggle recurring transactions on/off
- Automated execution via scheduled cron jobs

### 📤 Import & Export
- Export financial data to Excel format
- Import transactions from external sources
- Data backup and restore capabilities

### 🔐 Security
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected API routes
- Session management

### 🎨 User Experience
- Dark/Light theme support
- Responsive design
- Toast notifications
- Clean and intuitive interface

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js 5** | Web application framework |
| **MySQL** | Relational database |
| **JWT** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **node-cron** | Scheduled tasks |
| **ExcelJS** | Excel file generation |
| **Multer** | File upload handling |
| **express-validator** | Request validation |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **Vite** | Build tool & dev server |
| **React Router 7** | Client-side routing |
| **Axios** | HTTP client |
| **Recharts** | Data visualization |
| **Styled Components** | CSS-in-JS styling |
| **React Icons** | Icon library |
| **React Toastify** | Notifications |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **MySQL** (v8.0 or higher)
- **Git**

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/coinly.git
cd coinly
```

### 2. Install Backend dependencies

```bash
cd Backend
npm install
```

### 3. Install Frontend dependencies

```bash
cd ../Frontend
npm install
```

### 4. Set up the database

Create a MySQL database for the application:

```sql
CREATE DATABASE coinly_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

---

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `Backend` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=coinly_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### Frontend Configuration

Create a `.env` file in the `Frontend` directory:

```env
VITE_API_URL=http://localhost:3000/api
```

---

## ▶️ Running the Application

### Development Mode

**Start Backend server:**

```bash
cd Backend
npm run dev
```

The API server will start on `http://localhost:3000`

**Start Frontend development server:**

```bash
cd Frontend
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Mode

**Build Frontend:**

```bash
cd Frontend
npm run build
```

**Start Backend in production:**

```bash
cd Backend
npm start
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | User login |
| `GET` | `/api/auth/me` | Get current user |

### Transactions
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/transactions` | Get all transactions |
| `GET` | `/api/transactions/stats` | Get transaction statistics |
| `GET` | `/api/transactions/:id` | Get transaction by ID |
| `POST` | `/api/transactions` | Create transaction |
| `PUT` | `/api/transactions/:id` | Update transaction |
| `DELETE` | `/api/transactions/:id` | Delete transaction |

### Budgets
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/budgets` | Get all budgets |
| `GET` | `/api/budgets/:id` | Get budget by ID |
| `GET` | `/api/budgets/:id/status` | Get budget status |
| `POST` | `/api/budgets` | Create budget |
| `PUT` | `/api/budgets/:id` | Update budget |
| `DELETE` | `/api/budgets/:id` | Delete budget |

### Savings Goals
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/savings/goals` | Get all goals |
| `GET` | `/api/savings/goals/:id` | Get goal by ID |
| `POST` | `/api/savings/goals` | Create goal |
| `PUT` | `/api/savings/goals/:id` | Update goal |
| `DELETE` | `/api/savings/goals/:id` | Delete goal |
| `POST` | `/api/savings/goals/:id/deposit` | Deposit to goal |

### Savings Accounts
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/savings/accounts` | Get all savings accounts |
| `GET` | `/api/savings/accounts/:id` | Get account by ID |
| `POST` | `/api/savings/accounts` | Create account |
| `PUT` | `/api/savings/accounts/:id` | Update account |
| `DELETE` | `/api/savings/accounts/:id` | Delete account |

### Reports
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/reports/monthly` | Monthly report |
| `GET` | `/api/reports/yearly` | Yearly report |
| `GET` | `/api/reports/category` | Category report |
| `GET` | `/api/reports/income-vs-expenses` | Income vs Expenses |

### Recurring Transactions
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/recurring` | Get all recurring |
| `GET` | `/api/recurring/:id` | Get recurring by ID |
| `POST` | `/api/recurring` | Create recurring |
| `PUT` | `/api/recurring/:id` | Update recurring |
| `DELETE` | `/api/recurring/:id` | Delete recurring |
| `PATCH` | `/api/recurring/:id/toggle` | Toggle active status |

### Categories
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/categories` | Get all categories |
| `POST` | `/api/categories` | Create category |
| `PUT` | `/api/categories/:id` | Update category |
| `DELETE` | `/api/categories/:id` | Delete category |

### Accounts
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/accounts` | Get all accounts |
| `POST` | `/api/accounts` | Create account |
| `PUT` | `/api/accounts/:id` | Update account |
| `DELETE` | `/api/accounts/:id` | Delete account |

### Import/Export
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/export` | Export data |
| `POST` | `/api/import` | Import data |

---

## 🏗 Architecture & Design Decisions

### Backend — Layered Architecture

The backend follows a three-layer separation:

- **Routes** — define endpoints and apply validation middleware
- **Controllers** — parse requests, call services, return responses
- **Services** — contain all business logic, isolated from HTTP concerns

This means controllers stay thin and business logic is independently testable. For example, `transactionService.js` handles filtering, aggregation, and balance updates without knowing anything about `req` or `res`.

Recurring transactions are processed by a `node-cron` job rather than being triggered on the frontend — this ensures they execute even when no user is logged in.

### Frontend — React SPA

Authentication state is managed via React Context (`AuthContext`) so any component can access the current user and token without prop drilling. A `ProtectedRoute` wrapper redirects unauthenticated users before any protected page renders.

All HTTP calls go through a shared Axios instance (`src/api/axios.js`) that automatically attaches the JWT from localStorage and handles 401 responses globally — so individual pages don't need to handle auth errors themselves.

### Known Limitations & Planned Improvements

Being honest about trade-offs is part of writing good software:

- **Large page components** — pages like `ExpensesPage` and `ReportPage` currently handle both data fetching and rendering in a single component. The natural next step is extracting the API/state logic into custom hooks (`useExpenses`, `useReport`) to separate concerns and make the components easier to read and test.
- **No TypeScript** — adding types would catch a class of bugs at compile time, especially around API response shapes. This is a planned migration.
- **Limited test coverage** — backend utilities are tested; integration and component tests are missing. Given this is a solo project, the priority was shipping a working product first.

---

## 📁 Project Structure

```
Coinly/
├── Backend/
│   ├── controllers/          # Request handlers
│   │   ├── authController.js
│   │   ├── transactionController.js
│   │   ├── budgetController.js
│   │   ├── savingsController.js
│   │   ├── reportController.js
│   │   └── ...
│   ├── database/
│   │   └── db.js             # Database connection
│   ├── middleware/
│   │   ├── authMiddleware.js # JWT verification
│   │   ├── errorHandler.js   # Error handling
│   │   └── validationMiddleware.js
│   ├── routes/               # API route definitions
│   │   ├── authRoutes.js
│   │   ├── transactionRoutes.js
│   │   └── ...
│   ├── services/             # Business logic
│   │   ├── authService.js
│   │   ├── transactionService.js
│   │   └── ...
│   ├── utils/
│   │   ├── bcrypt.js         # Password utilities
│   │   ├── jwt.js            # Token utilities
│   │   ├── cronService.js    # Scheduled tasks
│   │   └── responseFormatter.js
│   ├── tests/
│   │   └── utils.test.js
│   ├── server.js             # Application entry point
│   └── package.json
│
├── Frontend/
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── api/              # Axios instance + service helpers
│   │   │   ├── axios.js      # Shared instance with JWT interceptor
│   │   │   └── dashboardService.js
│   │   ├── assets/           # Images, logos
│   │   ├── components/       # Reusable UI components
│   │   │   ├── LeftBar/
│   │   │   ├── StatCard/
│   │   │   └── ProtectedRoute/
│   │   ├── context/          # Global state via React Context
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── layouts/          # Page shell with sidebar + Outlet
│   │   │   └── MainLayout/
│   │   ├── pages/            # One folder per route
│   │   │   ├── DashboardPage/
│   │   │   ├── ExpensesPage/
│   │   │   ├── IncomesPage/
│   │   │   ├── BudgetPage/
│   │   │   ├── GoalPage/
│   │   │   ├── ReportPage/
│   │   │   ├── ProfilePage/
│   │   │   ├── LoginPage/
│   │   │   ├── RegisterPage/
│   │   │   └── WelcomePage/
│   │   ├── styles/           # Global style overrides
│   │   ├── utils/            # Shared helpers
│   │   ├── App.jsx           # Router + provider setup
│   │   ├── main.jsx          # Entry point
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🖼 Screenshots

![Dashboard](images/1.png)
![Expenses](images/2.png)
![Landing Page](images/3.png)
![Login Page](images/4.png)

---

## 🧪 Testing

Run backend tests:

```bash
cd Backend
npm test
```

---

## 💡 What I Learned

Building Coinly end-to-end taught me things that tutorials don't cover:

**Layered architecture pays off immediately.** Early on I put business logic directly in route handlers. As soon as I needed the same logic in two places (e.g. updating account balance after a transaction and after a recurring job ran), I had to refactor. Moving to controllers → services made that trivial and made the codebase significantly easier to reason about.

**Global Axios interceptors are worth the upfront work.** I initially handled auth errors page by page. After the third copy-paste I extracted it into a single interceptor on the shared instance. Now every 401 is handled in one place and every page gets it for free.

**State that lives in context needs to be designed, not just added.** `AuthContext` works well because it has a clear, single responsibility. `ThemeContext` is fine too. I made the mistake of considering putting too much into context early on — realising that most state belongs local to the component that uses it was a meaningful shift in how I think about React apps.

**Cron jobs are deceptively simple until they're not.** Setting up `node-cron` to run recurring transactions took an hour. Making it idempotent (so a server restart doesn't double-execute), handling timezone edge cases, and writing the logic so it doesn't silently swallow errors — that took considerably longer.

**Writing code you'll read later is a skill in itself.** Some of the page components in this project grew too large. Coming back to a 700-line file after two weeks is genuinely painful. The main thing I'd do differently is extract data-fetching logic into custom hooks from the start — not as an afterthought.

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ and ☕
</p>
