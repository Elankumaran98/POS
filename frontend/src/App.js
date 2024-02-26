import { Routes,Route ,Navigate} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import CartPage from "./pages/cart/CartPage";
import BillsPage from "./pages/bills/BillsPage";
import CustomersPage from "./pages/customers/CustomersPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouter>
              <HomePage/>
            </ProtectedRouter>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRouter>
              <ProductsPage/>
            </ProtectedRouter>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRouter>
              <CartPage/>
            </ProtectedRouter>
          }
        />
        <Route
          path="/bills"
          element={
            <ProtectedRouter>
              <BillsPage/>
            </ProtectedRouter>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRouter>
              <CustomersPage/>
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
