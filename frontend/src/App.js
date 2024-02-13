import { Routes,Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </div>
  );
}

export default App;
