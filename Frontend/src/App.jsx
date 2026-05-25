import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainLayout from './layouts/MainLayout/MainLayout';
import Dashboard from './pages/DashboardPage/DashboardPage';
import Expenses from './pages/ExpensesPage/ExpensesPage';
import Incomes from './pages/IncomesPage/IncomesPage';
import Budgets from './pages/BudgetPage/BudgetPage';
import Goals from './pages/GoalPage/GoalPage';
import Reports from './pages/ReportPage/ReportPage';
import Profile from './pages/ProfilePage/ProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toast-custom.css';


function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/expenses" element={<Expenses />} />
              <Route path="/dashboard/incomes" element={<Incomes />} />
              <Route path="/dashboard/budgets" element={<Budgets />} />
              <Route path="/dashboard/goals" element={<Goals />} />
              <Route path="/dashboard/reports" element={<Reports />} />
              <Route path="/dashboard/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ zIndex: 9999 }}
        />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
