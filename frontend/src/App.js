import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BillsPage from "./pages/BillsPage";
import CustomersPage from "./pages/CustomersPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouter>
              <HomePage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/bills"
          element={
            <ProtectedRouter>
              <BillsPage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/items"
          element={
            <ProtectedRouter>
              <ItemPage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRouter>
              <CartPage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRouter>
              <CustomersPage />
            </ProtectedRouter>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

export function ProtectedRouter({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
