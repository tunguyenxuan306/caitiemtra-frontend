import { Routes, Route, Navigate } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import OrdersPage from "./pages/OrdersPage";
import StatsPage from "./pages/StatsPage";
import EmployeesPage from "./pages/EmployeesPage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";

const isAuthenticated = () => !!localStorage.getItem("token");

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {isAuthenticated() ? (
        <>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<Navigate to="/menu" />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}