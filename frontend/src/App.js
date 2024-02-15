import { Routes,Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
